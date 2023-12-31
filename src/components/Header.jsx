import styles from './Header.module.css'

import willifeedLogo from '../assets/willifeed-logo.svg'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={willifeedLogo} alt="Logotipo do WilliFeed" />
      <h1>WilliFeed</h1>
    </header>
  )
}