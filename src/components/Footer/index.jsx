import React from "react";
import styles from "./Footer.module.scss";


function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <img src="/img/pizza-time__logo.svg" alt="logo"/>
                    <p className={styles.footerText}>© Все права защищены 2021.</p>
                </div>   
            </div>
        </footer>
    );
}

export default Footer;