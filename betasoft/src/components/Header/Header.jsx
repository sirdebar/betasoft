import Styles from './Header.module.css'

function Header() {
  return (
    <div className={Styles["header__wrapper"]}>
      <div className={Styles["header__logo"]}>
        <img src="../images/Logo.png" alt="" />
      </div>
      <div className={Styles["header__button"]}>
        <a href="#"><h2>Home</h2></a>
      </div>
    </div>
  )
}

export default Header
