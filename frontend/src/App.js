import { useEffect } from 'react'
import './App.css'
import { Button } from 'react-bootstrap'
import useMetaMask from './hooks/metamask';
import SLMNFTFactory from './contracts/SLMNFTFactory';
import SLMToken from './contracts/SLMToken';
import SLMNFT from './contracts/SLMNFT';
import Web3 from 'web3';

function LoggedIn() {
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()

  if (!isActive) {
    return ""
  } else {
    return (
      <div>
        <div className="mt-3 mb-3">
          Connected Account: {isActive ? account : ''}
        </div>
        <div>
          <BuyNFT />
        </div>
        <Button variant="danger" onClick={disconnect}>
          Disconnect MetaMask<img src="images/noun_waving_3666509.svg" width="50" height="50" />
        </Button>
      </div>);
  }
}

const loadWeb3 = () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  }
}

function Login() {
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()

  if (isActive) {
    return ""
  } else {
    return (<Button variant="secondary" onClick={connect} disabled={shouldDisable}>
      <img src="images/metamask.svg" alt="MetaMask" width="50" height="50" /> Connect to MetaMask
    </Button>)
  }
}

function BuyNFT() {
  loadWeb3();
  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()
  const nftFactory = new window.web3.eth.Contract(SLMNFTFactory.abi, SLMNFTFactory.networks["80001"].address);

  async function purchaseRandomNFT() {
    await nftFactory.methods.purchaseRandomNFT().send({
      from: account,
      value: window.web3.utils.toWei('0.001', 'ether'),
    });

    if (window.ethereum) {
      console.log(123)
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


  return (<Button variant="secondary" onClick={purchaseRandomNFT} disabled={shouldDisable}>
    <img src="images/metamask.svg" alt="MetaMask" width="50" height="50" /> Купить SLM по преступно низкой цене
  </Button>)

}

function App() {

  const { connect, disconnect, isActive, account, shouldDisable } = useMetaMask()

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://static.tildacdn.com/tild6337-6634-4433-a366-373632313530/7mLrpN3HkwU-removebg.png" />
        <Login />
        <LoggedIn />
      </header>
    </div>
  );
}



export default App;
