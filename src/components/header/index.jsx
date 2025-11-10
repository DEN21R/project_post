import mesk_logo from '../../assets/logo/mesk_logo.svg'
import styles from './styles.module.css'

function Header() {
  return (
    <div className={styles.headerContainer}>
      <img src={mesk_logo} alt="" />
      <nav>
        <a href="">Главная</a>
        <a href="">Музыка</a>
        <a href="">Сообщества</a>
        <a href="">Друзья</a>
      </nav>
    </div>
  )
}
export default Header
