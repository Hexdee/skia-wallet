import React, {useState, useEffect} from "react";
import Image from 'next/image'
import styles from '../styles/action.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {transfer} from '../service'

export default function Send() {
  const [tokens, setTokens] = useState([])
  useEffect(() => {
    const accounts = JSON.parse(localStorage.getItem("accounts"))
    setTokens(accounts[0].tokens)
  }, []);
  return (
    <div className={styles.body}>
    <Header/>
    <div className={styles.main}>
    <h1 className={styles.action}>Send</h1>
    <label className={styles.label}>Token:</label><br/>
    <select name="Token" className={styles.input} id="token">
      {tokens.map((token, index) =>
        <option key={index}>{token.symbol}</option>
      )}
    </select>
    {/* <input className={styles.input} type="text" id="token" name="token" placeholder="Contract address:"/><br/> */}
    <label className={styles.label}>Transfer to:</label><br/>
    <input className={styles.input} type="text" id="to" name="to" placeholder="Receiver's address:"/><br/>
     <label className={styles.label}>Amount:</label><br/>
    <input className={styles.input} type="text" id="amount" name="amount" placeholder="Amount of tokens:"/><br/><br/>
    <button className={styles.button} onClick={transfer}>Swap</button>
    </div>
    <Footer/>
    </div>
    )
}

Send.getInitialprops = async (account) => {account}
