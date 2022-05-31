import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Label,
  Segment,
  Visibility,
} from 'semantic-ui-react'

import { NftGallery } from 'react-nft-gallery';
import useMetaMask from './hooks/metamask';
import SLMNFTFactory from './contracts/SLMNFTFactory';
import SLMToken from './contracts/SLMToken';
import SLMNFT from './contracts/SLMNFT';
import Web3 from 'web3';
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component, useState, useEffect } from 'react'

const MATIC_USD_FEED = '0xd0D5e3DB44DE05E9F294BB0a3bEEaF030DE24Ada'
const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})

const loadWeb3 = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
}

const Login = ({ }) => {

  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()
  const [walletSlmBalance, setSlmBalance] = useState(0);
  const web3 = window.web3
  const nftToken = new web3.eth.Contract(SLMToken.abi, SLMToken.networks["80001"].address)

  useEffect(async () => {
    const wsb = web3.utils.fromWei(
      await nftToken.methods.balanceOf(web3.currentProvider.selectedAddress).call(),
      'gwei'
    )
    setSlmBalance(wsb)
  });

  if (isActive) {
    return <>
      <Label image>
        <img src="/images/logo.webp" width="10" height="10" />
        {walletSlmBalance} SLM
      </Label>

      <Label as='a' image>
        <img src="images/metamask.svg" alt="MetaMask" width="10" height="10" />
        {account.substring(2, 10)}..
      </Label></>
  } else {
    return (<Button inverted onClick={connect} disabled={shouldDisable}>
      <img src="images/metamask.svg" alt="MetaMask" width="25" height="25" /> Connect to MetaMask
    </Button>)
  }
}

async function watchSLMNFT() {
  await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: SLMNFT.networks["80001"].address, // The address that the token is at.
        symbol: "SLM", // A ticker symbol or shorthand, up to 5 chars.
        decimals: 0, // The number of decimals in the token
      },
    },
  });
}

function BuyNFT() {
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()
  const nftFactory = new window.web3.eth.Contract(SLMNFTFactory.abi, SLMNFTFactory.networks["80001"].address);

  async function purchaseRandomNFT() {
    await nftFactory.methods.purchaseRandomNFT().send({
      from: account,
      value: window.web3.utils.toWei('0.001', 'ether'),
    });

    if (window.ethereum) {
      await watchSLMNFT()
    }
  }

  return (<Button variant="secondary" onClick={purchaseRandomNFT} disabled={shouldDisable}>
    <img src="images/metamask.svg" alt="MetaMask" width="50" height="50" /> Купить SLM по преступно низкой цене
  </Button>)

}

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image style={{ margin: 'auto' }} src="https://static.tildacdn.com/tild6337-6634-4433-a366-373632313530/7mLrpN3HkwU-removebg.png" />
    <Header
      as='h1'
      content='Schizophrenic Lives Matter'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
      }}
    />
    <Header
      as='h2'
      content='Extreme deflate and viral crypto to become immortal.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        marginBottom: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

const NFTHeading = ({ mobile }) => {

  const web3 = window.web3

  const nftFactory = new web3.eth.Contract(SLMNFTFactory.abi, SLMNFTFactory.networks["80001"].address)

  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()

  async function purchaseRandomNFT() {
    await nftFactory.methods.purchaseRandomNFT().send({
      from: account,
      value: window.web3.utils.toWei('0.001', 'ether'),
    });

    if (window.ethereum) {
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: SLMNFT.networks["80001"].address, // The address that the token is at.
            symbol: "SLM", // A ticker symbol or shorthand, up to 5 chars.
            decimals: 0, // The number of decimals in the token
          },
        },
      });
    }
  }

  return (
  <Container text>
    <Header
      as='h1'
      content='Schizo NFTs'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
      }}
    />
    <Header
      as='h2'
      content='Exclusive NFT collection drawn by Schizoid Artists'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
        marginBottom: mobile ? '0.5em' : '1.5em',
      }}
    />

    <Button primary color="green"  size='huge' onClick={purchaseRandomNFT}>
       Buy Surprise NFT Criminally Cheap
    </Button>

    <Button size='huge' >
     Trade NFTs on OpenSea
    </Button>
  </Container>
)
    }

NFTHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {

  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            style={this.context.section == "home" ? { minHeight: 700, padding: '1em 0em' } : {}}
            vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'>
              <Container>
                <Menu.Item as='a' active={this.context.section == "home"} onClick={() => this.context.setSection('home')} >
                  Home
                </Menu.Item>
                <Menu.Item as='a' active={this.context.section == "nft"} onClick={() => this.context.setSection('nft')}>NFT</Menu.Item>
                <Menu.Item as='a' href="https://pancakeswap.finance/swap">Exchange</Menu.Item>
                <Menu.Item position='right'>
                  <Login />
                </Menu.Item>
              </Container>
            </Menu>
            {this.context.section == "home" ? <HomepageHeading /> : null}
            {this.context.section == "nft" ? <NFTHeading /> : null}
          </Segment>
        </Visibility>
        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

DesktopContainer.contextTypes = {
  section: PropTypes.string,
  setSection: PropTypes.func,
}

const ResponsiveContainer = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
  section: PropTypes.string,
}

const MainPage = () => {

  const web3 = window.web3
  const [state, setState_] = useState({
    exchangeRate: 0,
    ethBalance: 0,
    fundSlmBalance: 0,
    fundWalletSlmBalance: 0,
    maticUsdRate: 0,
    decimals: 1,
  });

  const nftFactory = new web3.eth.Contract(SLMNFTFactory.abi, SLMNFTFactory.networks["80001"].address)
  const nftToken = new web3.eth.Contract(SLMToken.abi, SLMToken.networks["80001"].address)
  const priceFeed = new web3.eth.Contract(aggregatorV3InterfaceABI, MATIC_USD_FEED)

  useEffect(async () => {
    let rate = await priceFeed.methods.latestRoundData().call();
    let decimals = await priceFeed.methods.decimals().call();
    const state = {
      exchangeRate: await nftFactory.methods.exchangeRate().call(),
      fundEthBalance: web3.utils.fromWei(await web3.eth.getBalance(SLMNFTFactory.networks["80001"].address), 'ether'),
      fundSlmBalance: await nftToken.methods.balanceOf(SLMNFTFactory.networks["80001"].address).call(),
      walletSlmBalance: await nftToken.methods.balanceOf(web3.currentProvider.selectedAddress).call(),
      maticUsdRate: rate.answer / 10 ** decimals,
    }
    console.log(state)
    setState_(state)
  }, []);

  return (
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h1'>
              <Image style={{ margin: 'auto' }} src="/images/logo.webp" />
              Schizophrenic Fund
              <Image style={{ margin: 'auto' }} src="/images/logo.webp" />
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <b>MATIC:</b>  {state.fundEthBalance}
              <br />
              <b>SLM:</b> {state.fundSlmBalance}
              <br />
              <b>SLM/MATIC:</b> {state.exchangeRate}
              <br />
              <b>Market Cap:</b> {state.maticUsdRate} USD
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

const NFT = () => {
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()
  return (
    <Segment style={{ padding: '0em' }} vertical>
      <NftGallery ownerAddress={account} />
    </Segment>
  );
}

class App extends React.Component {

  state = {
    section: "home",
  }

  constructor() {
    super()
    loadWeb3()
  }

  getChildContext() {
    return {
      section: this.state.section,
      setSection: this.setSection,
    };
  }

  setSection = (section) => {
    this.setState({ section: section })
  }


  render() {
    if (this.state.section == "home") {
      return (
        <ResponsiveContainer>
          <MainPage />
        </ResponsiveContainer>
      )
    }

    if (this.state.section == "nft") {
      return (
        <ResponsiveContainer>
          <NFT />
        </ResponsiveContainer>
      )
    }

  }
}

App.childContextTypes = {
  section: PropTypes.string,
  setSection: PropTypes.func,
};

export default App
