import styles from '../../styles/Home.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>SKIA</div>
        <div className={styles.others}>
            <button className={styles.button}>My Accounts</button>
        </div>
    </header>
  )
}