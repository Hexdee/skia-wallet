import { ec, defaultProvider, Contract, hash, Account, number, stark } from 'starknet';
import { genKeyPair, getKeyPair, getStarkKey } from 'starknet/dist/utils/ellipticCurve';
import { hexToDecimalString } from 'starknet/utils/number';
import { transformCallsToMulticallArrays } from 'starknet/utils/transaction'
import CompiledAccount from './public/Account.json';
import erc20Json from './public/erc20.json'

async function createAccount() {
  const privKey = stark.randomAddress();
  const starkKeyPair = getKeyPair(privKey);
  let pubKey = ec.getStarkKey(starkKeyPair);
  const accounts = [];
  console.log(`Private key: ${privKey}, Public key: ${pubKey}`)
  
  if (typeof(window) == "object") {
    document.getElementById("status").innerHTML = "Creating account...";
  }
  localStorage.setItem("keys", JSON.stringify({pubKey, privKey}));
  
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

  console.log("initializing account....");
  await accountContract.initialize(
    pubKey,
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
  location.href = "/account"
}

async function transfer(tokenAddress, receiver, amount) {
  
const Pkey = "0x052f84e84c571e9fb817d4392afde8e260710b742d4ad62cede7cca4a1003c10"
const accountAddress = "0x242976053e751b8f1fc64b4a6d9ce086327b0d7135b3870a2f54e62159de2ce"
//const tokenAddress = "0x1d771896bb0322ca4ef229375206ff1e09f8f9fa5591d4c3e405bc46187a000"

const KeyPair = ec.getKeyPair(Pkey)

const account = new Account(
    defaultProvider,
    accountAddress,
    KeyPair
)
  // console.log("Minting 100 tokens...")
  // const mint = await account.execute(
  //   {
  //     contractAddress: tokenAddress,
  //     entrypoint: "mint",
  //     calldata: [accountAddress, "100"],
  //   },
  //   undefined,
  //   { maxFee: "0" }
  // );

  // await defaultProvider.waitForTransaction(mint.transaction_hash)

  console.log("Transferring token...")
  const transaction = await account.execute(
    {
      contractAddress: tokenAddress,
      entrypoint: "transfer",
      calldata: [tokenAddress, "10"],
    },
    undefined,
    { maxFee: "0" }
  );

  const txHash = transaction.transaction_hash
  console.log(`transaction hash: ${txHash}`)

  await defaultProvider.waitForTransaction(txHash)
  console.log("transaction completed!")
}

module.exports = {createAccount, transfer}