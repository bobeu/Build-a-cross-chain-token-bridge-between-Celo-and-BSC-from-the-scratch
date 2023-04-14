import { ethers } from "hardhat";
import Web3 from "web3";

const str = (x:string|undefined) => String(x);

const ALFAJORES_SOCKET_URL = "wss://alfajores-forno.celo-testnet.org/ws";
const BINANCE_HTTP_URL = "https://data-seed-prebsc-2-s1.binance.org:8545";

// Construct a new instance of the Celo's Websocket provider.
const CELO_PROVIDER = new Web3.providers.WebsocketProvider(ALFAJORES_SOCKET_URL);
const BSC_PROVIDER = new Web3.providers.HttpProvider(BINANCE_HTTP_URL);


// RPC information
const rpcInfo = Object.assign({}, {
  CELOALFAJORES: {
    name: 'Alfajores',
    rpc: ALFAJORES_SOCKET_URL,
    chainId: 44787,
  },
  BSC_TESTNET: {
    name: 'BSC Testnet',
    rpc:BINANCE_HTTP_URL,
    chainId: 97

  }
})

const waitForTransaction = async function (trx: any) {
  console.log("Waiting for confirmation ...");
  return await trx.wait(2);
}

// We create a new web3 instance parsing the provider as an argument.
const getWeb3Instance = function() {
  const web3_celo = new Web3(CELO_PROVIDER);
  const web3_bsc = new Web3(BSC_PROVIDER);

  return { web3_celo, web3_bsc }
}

// Providers function using ethers
export function getProviders() {
  const celoProvider = new ethers.providers.WebSocketProvider(
    rpcInfo.CELOALFAJORES.rpc, 
    {
      chainId: rpcInfo.CELOALFAJORES.chainId,
      name: rpcInfo.CELOALFAJORES.name,
    }
    );
    
  const bscProvider = new ethers.providers.JsonRpcProvider(
    rpcInfo.BSC_TESTNET.rpc,
    {
      chainId: rpcInfo.BSC_TESTNET.chainId,
      name: rpcInfo.BSC_TESTNET.name,  
    }
  );

  return { celoProvider, bscProvider }
}

e 