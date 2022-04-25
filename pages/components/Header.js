import Link from 'next/link';
import styles from '../../styles/Home.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <Link href="/"><div className={styles.logo}>SKIA</div></Link>
        <div className={styles.others}>
            <Link href="/account"><button className={styles.button}>My Accounts</button></Link>
        </div>
    </header>
  )
}