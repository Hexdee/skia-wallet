import { ec, defaultProvider, Contract, hash, Account } from 'starknet';
import { getKeyPair } from 'starknet/dist/utils/ellipticCurve';
import { transformCallsToMulticallArrays } from 'starknet/utils/transaction'
import CompiledAccount from './public/Account.json';

async function createAccount() {
  const starkKeyPair = ec.genKeyPair();
  const starkKeyPub = ec.getStarkKey(starkKeyPair);
  const accounts = [];
  
  if (typeof(window) == "object") {
    document.getElementById("status").innerHTML = "Deploying Account, Please wait...";
  }
  localStorage.setItem("keys", JSON.stringify({keyPair: starkKeyPair, keyPub: starkKeyPub}));
  
  console.log("deploying account....");

  const accountTxn = await defaultProvider.deployContract({
    contract: CompiledAccount,
    //addressSalt: public_key
  });

  const contract_address = accountTxn.address
  const accountContract = new Contract(
    CompiledAccount.abi,
    contract_address
  );

  if (typeof(window) == "object") {
    document.getElementById("status").innerHTML = "Initializing Account, Please wait...";
  }
  console.log("initializing account....");
  await accountContract.initialize(
    starkKeyPub,
    "0"
  );

  accounts[0] = {
    name: "Account 1",
    address: contract_address,
    tokens: [
      {
        "symbol": "ETH",
        "address": "0x0",
        "balance": "0.00"
      },
      {
        "symbol": "SKIA",
        "address": "0x0",
        "balance": "0.00"
      }
    ]
  };
  localStorage.setItem("accounts", JSON.stringify(accounts));
  console.log(`account deployed to ${accountTxn.address}`);
    if (typeof(window) == "object") {
    document.getElementById("status").innerHTML = "Your account is ready!";
  }
  window.open("/account")
}

module.exports = {createAccount}