## Описание

SLM Token (ERC20/BEP20) + NFT (ERC721) [1].

**Основные особенности:**

* Vesting

## Blockchain

* Polygon (Ethereum Sidechain) — нулевые transaction fees на OpenSea NFT market.
* Ethereum — Shiba Inu / CatGirl на Ethereum.

## Особенности

1. Staking: https://github.com/andreitoma8/ERC20-Staking **[Not Audited]**
2. Vesting: https://github.com/abdelhamidbakhta/token-vesting-contracts **[Security audit from Hacken]**

## Техническая реализация

Здесь описан процесс создания окружения разработчика в среде Windows 11. В первую очередь стоит устаносить Windows Subsystem For Linux (WSL2), т.к. основные инструменты разработки используют NodeJS, использование которого в Linux должно избавить от лишних сюрпризов.

### WSL for Linux

### Установка Окружения Разработчика

#### NodeJS

Следующие команды внутри терминала Ubuntu установят nodejs 18 версии внутри NVM — node version managerю

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install nvm
nvm install 18.0.0
nvm use 18.0.0 
```

#### OpenZeppelin

OpenZeppelin — это библиотка аудированных контрактов на Solidity для EVM-совместимых систем. [3]

```bash
npm install @openzeppelin/contracts
```

#### Truffle 

Truffle — это набор инструментов для разработки Solidity контрактов и таких операций как развертывание, обновление и комплияция. [4]

```bash
npm install truffle -g
```

#### Ganache

Ganache — это локальный ETH-совместимый blockchain для тестирования и разработки контрактов [5]

Скачать Ganache для Windows можно тут: <https://trufflesuite.com/ganache/>

### ERC20 на Ganache

1. Запустите Ganache на Windows. В настройках Server — Hostname укажите 0.0.0.0 - All Interfaces
2. Скомпилируйте ERC20 контракт ```truffle compile```
3. Разверните контракт на Ganache Blockchain ```truffle deploy``` 

При перезапуске Ganache контракт надо развертывать снова, тк Ganache не сохраняет состояние между перезапусками.

### Polygon Testnet Mumbai

Для тестирования контракта в полу-боевой среде предлается использовать test-blockchain сети Polygon (Matric)

1. Установите Metamask
2. Добавьте mumbai blockchain. Нажмите add mumbai network на Mumbai Block Explorer: https://mumbai.polygonscan.com/ и выберите mumbai blockchain в качестве активной сети
3. Запросите на баланс тестовые токены MATIC: https://faucet.polygon.technology/

Контракт на Polygon Mumbai: https://mumbai.polygonscan.com/address/0xbb27B9f7c7eA4a14C1b1c985f9f829165C3b1aE2#code

## Контракты

См. `deployment.json`

### SLMToken

* ERC20
* Burnable
* Vesting

### SFD NFT

### NFT Factory

Контракт-фабрика, для выпуска NFT на OpenSea, создающий новые NFT в момент продажи токена на площадке.

Когда токен создан, его метаданные обновляются API, который назначает токену случайное изображение (и метаданные).
Площадка переводит на счёт контракта средства, которые увеличиваю встроенный в контракт пул ликвидности SLM/ETH(MATIC), позволяющий производить обмен токенов в автоматическом режиме.

Обменник SLM/ETH доступен по адресу контракта, содержит Pre-Minted SLM и ликвидность (ETH/MATIC) обеспечивающую SLM. Обмен ETH -> SLM, SLM -> ETH происходит исходя из текущего соотношения балансов SLM/ETH.

### Обеспечение ликвидности токена SLM

OpenSea выплачивает доходы с продажи NFT раз в 2-4 недели, обычным transfer, что делает затруднительным вызов какого-либо контракта при получении дохода.

Прелагается использовать возможность OpenSea Custom Sale Contract [6]

Листинг сущесвующего контракта на OpenSea: https://testnets.opensea.io/get-listed/step-two

Factory реализующая чеканку монет также имеет возможности обменника: https://github.com/stillonearth/SLM-Coin/blob/main/contracts/SLMNFT.sol

## Токеномика

* **Initial supply**: 1,000,000,000,000,000
* **Initial burn**: 50%
* **Team allocation**: 1%

### Automated Market Maker Fees

* **Burn**: 2% Burn Each Transfer / Buy / Sell
* **Marketing**: 2%

## Transfer Fees

* **Liquidity Pool**: 2%
* **Marketing**: 2%

## Staking 

**Pro-Rata**

* **3 month**  1% of supply distributed across holders
* **6 month**  2% of supply distributed across holders
* **12 month**  10% of supply distributed across holders
    
## Ссылки 

1. https://opensea.io/collection/schizofacedark
2. https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-11-with-gui-support
3. https://docs.openzeppelin.com/contracts/4.x/
4. https://trufflesuite.com/
5. https://trufflesuite.com/ganache/
6. https://docs.opensea.io/docs/2-custom-item-sale-contract
