import React, {useState} from "react";
import Image from 'next/image'
import styles from '../styles/action.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {transfer} from '../service'

export default function Send(props) {
  console.log(props.account)
  return (
    <div className={styles.body}>
    <Header/>
    <div className={styles.main}>
    <h1 className={styles.action}>Send</h1>
    <label className={styles.label}>Token:</label><br/>
    <select name="Token" className={styles.input} id="token">
      {props.account.token.map((token) =>
        <option>{token.symbol}</option>
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