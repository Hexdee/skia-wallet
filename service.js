import { ec, defaultProvider, Contract, hash, Account } from 'starknet';
import { getKeyPair } from 'starknet/dist/utils/ellipticCurve';
import { transformCallsToMulticallArrays } from 'starknet/utils/transaction'
import CompiledAccount from './public/Account.json';

async function createAccount() {
  const starkKeyPair = ec.genKeyPair();
  const starkKeyPub = ec.getStarkKey(starkKeyPair);
  
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
    
  console.log("initializing account....");
  const initTxn = await accountContract.initialize(
    starkKeyPub,
    "0"
  );
  
  console.log(`account deployed to ${accountTxn.address}`);
}

module.exports = {createAccount}