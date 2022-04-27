import React, {useState} from "react";
import Image from 'next/image'
import styles from '../styles/action.module.css'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Swap() {
  return (
    <div className={styles.body}>
    <Header/>
    <div className={styles.main}>
    <h1 className={styles.action}>Swap</h1>
    <label className={styles.label}>From:</label><br/>
    <input className={styles.input} type="text" id="from" name="from" placeholder="Contract address:"/><br/>
    <label className={styles.label}>To:</label><br/>
    <input className={styles.input} type="text" id="to" name="to" placeholder="Contract address:"/><br/>
    <label className={styles.label}>Amount:</label><br/>
    <input className={styles.input} type="text" id="amount" name="amount" placeholder="Amount of tokens:"/><br/><br/>
    <button className={styles.button}>Swap</button>
    </div>
    <Footer/>
    </div>
    )
}