import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/Header'
import LoadingSpinner from "./components/Loader";
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {createAccount} from '../service'
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.body}>
    <Header/>
    <main className={styles.main}>
        <div className={styles.hero}>
            <div className={styles.text}>
                <h2>SKIA WALLET is live on Starknet!</h2>
                <p>The first web based wallet on startknet. Skia wallet is accessible from any device. <br/>Get started by creating an account.</p>
                <button className={styles.button} onClick={createAccount}>Create Account</button>
                <p id='status'></p>
            </div>
            <div className={styles.image}>
                <Image src={"/starknet.png"} alt="starknet logo" width="250px" height="250px"/>
            </div>
        </div>
        <div className={styles.features}>
            <div className={styles.feature}>

            </div>
            <div className={styles.feature}>
            
            </div>
            <div className={styles.feature}>
            
            </div>
            <div className={styles.feature}>
            
            </div>
        </div>
        <div className={styles.quote}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente assumenda nesciunt alias minus eius ipsam, nulla sit doloremque, nostrum fugit cum, eveniet aspernatur repellat? Dolorem sit maxime commodi sed. 
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quaerat, voluptate ullam deleniti quos fugit id pariatur, quam minima numquam reiciendis dignissimos. Quo amet alias tempora molestias reiciendis blanditiis et!
            </p>
            <p className={styles.author}>-Satoshi Nakamoto</p>
        </div>
        <div className={styles.disclaimer}>
            <div className={styles.disclaimer_body}>
                <h1>Lorem Ipsum! Lorem Ipsum!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente assumenda nesciunt alias minus eius ipsam.</p>
            </div>
            <button className={styles.button}>Lorem Ip</button>
        </div>
    </main>
    <Footer/>
    </div>
  )
}
