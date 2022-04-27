import React, {useState, useEffect} from "react";
import Image from 'next/image'
import styles from '../styles/account.module.css'
import Header from './components/Header'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";
import {createAccount} from "../service"

export default function Account() {
  const [hasAccount, setHasAccount] =  useState(false);
  const [account, setAccount] = useState([])
  const [transactions, setTransactions] = useState([
    {
      title: 'Send',
      value: "0.01",
      from: "0x000000000000000",
      time: "5 mins"
    },
    {
      title: 'Invoke',
      value: "",
      from: "0x000000000000000",
      time: "30 mins"
    },
    {
      title: 'Invoke',
      value: "",
      from: "0x000000000000000",
      time: "50mins"
    },
    {
      title: 'Received',
      value: "0.5",
      from: "0x000000000000000",
      time: "2 hrs"
    },
    ])
  useEffect(() => {
    if(localStorage.getItem("accounts")) {
      setAccount(JSON.parse(localStorage.getItem("accounts"))[0]);
      setHasAccount(true)
    }
  }, []);
  return (
    <div className={styles.body}>
        <Header/>
        { hasAccount ?
        <main className={styles.main}>
        <div className={styles.account}>
            <div className={styles.settings}>

            </div>
            <h2 className={styles.account_name}>{account.name}</h2>
            <p className={styles.account_address}>{account.address + "..."}</p>
            <div className={styles.actions}>
              <Link href='/send'>
                <p className={styles.action}>
                  <i className="fa-solid fa-paper-plane fa-2x"></i> Send
                </p>
              </Link>
                <p className={styles.action}>
                  <i className="fa-solid fa-download fa-2x"></i>
                  Receive
                </p>
                <Link href='/send'>
                <p className={styles.action}>
                  <i className="fa-solid fa-repeat fa-2x"></i>
                  Swap
                </p>
                </Link>
                <p className={styles.action}>
                  <i className="fa-solid fa-dollar-sign fa-2x"></i>
                  Stake
                </p>
            </div>
            {account.tokens?.map((token, index) => (
                <div key={index} className={styles.token}>
                  <p className={styles.name}>{token.symbol}</p>
                  <p className={styles.balance}>{token.balance}</p>
                </div>
            ))}
            <p className={styles.add}>+</p>
        </div>
        <div className={styles.transactions}>
            <h2>Recent transactions</h2>
            {transactions.map((transaction, index) => (
              <div key={index} className={styles.transaction}>
                <div className={styles.title}>
                    <h3 className={styles.tx_title}>{transaction.title}</h3>
                    <p className={styles.tx_value}>{transaction.value}</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.tx_from}>{transaction.from}</p>
                    <p className={styles.tx_time}>{transaction.time}</p>
                </div>
              </div>
            ))}
          </div>
        </main> : 
        <main className={styles.main}>
          <div className={styles.noaccount}>
              <p>You do not have an account yet!</p>
              <button className={styles.button} onClick={createAccount}>Create Account</button>
              <p id='status'></p>
          </div>
        </main>}
        <Footer/>
    </div>
  )
}