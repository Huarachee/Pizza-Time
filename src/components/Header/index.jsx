import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.headerTop}>
      <Link to="/">
        <div className={styles.logo}>
          <img src="/img/pizza-time__logo.svg" alt="logo" width={300} height={200}/>
        </div>
      </Link>
      
      <menu className={styles.menuHeader}>
        <ul className={styles.menuHeaderList}>
          <li className={styles.menuHeaderItem}>Пицца</li>
          <li className={styles.menuHeaderItem}>Напитки</li>
          <li className={styles.menuHeaderItem}>Акции</li>
          <li className={styles.menuHeaderItem}>Контакты</li>
          <li className={styles.menuHeaderItem}>О нас</li>
        </ul>
      </menu>
      <Link to="/Cart">
        <button className={styles.basket}>
            Корзина
        </button>
      </Link>
      
    </div>
  );
}

export default Header;