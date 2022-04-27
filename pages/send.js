import React, {useState} from "react";
import Image from 'next/image'
import styles from '../styles/action.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import {transfer} from '../service'

export default function Send() {
  if (typeof(window) == "object") {
    document.getElementById('swap').addEventListener('click', () => {
      const token = document.getElementById('token').value
      const to = document.getElementById('to').value
      const amount = document.getElementById('amount').value
      // console.log(token, to, amount)
      transfer(token, to, amount);
    })
  }
  return (
    <div className={styles.body}>
    <Header/>
    <div className={styles.main}>
    <h1 className={styles.action}>Send</h1>
    <label className={styles.label}>Token:</label><br/>
    <input className={styles.input} type="text" id="token" name="token" placeholder="Contract address:"/><br/>
    <label className={styles.label}>Transfer to:</label><br/>
    <input className={styles.input} type="text" id="to" name="to" placeholder="Receiver's address:"/><br/>
     <label className={styles.label}>Amount:</label><br/>
    <input className={styles.input} type="text" id="amount" name="amount" placeholder="Amount of tokens:"/><br/><br/>
    <button className={styles.button} id='swap'>Swap</button>
    </div>
    <Footer/>
    </div>
    )
}