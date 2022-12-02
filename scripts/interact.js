const API_KEY = "MEhtp_BB4XbDcq6Qwhiz7IsRakZ2OJfo";
const PRIVATE_KEY = "91474fbad92ae7b8d443663db9ed1e8ab94a8e6633efa7c118b4972c2bb8c397"
const CONTRACT_ADDRESS = "0x3bf12cB6C70E8F8426D48034b08F43d5dc40CF60"

const contract = require("../artifacts/contracts/Test.sol/Test.json");


const alchemyProvider = new ethers.providers.AlchemyProvider(network="goerli", API_KEY);

const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

const Test = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

async function main() {
    let reponse = await Test.test();
    console.log(reponse);
}
  main();