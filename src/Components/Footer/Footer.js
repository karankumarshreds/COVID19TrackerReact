import React from 'react';
import styles from './Footer.module.css'

function Footer() {
    const url = 'https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png';
    return(
        <div>
            <div className={styles.footer}>
                <a href="https://www.linkedin.com/in/karan-kumar-456098127/" target="_blank">
                <img src={url} />
                </a>
            </div>
            <p className={styles.p}>copyright Ⓒ Karan Kumar</p>
        </div >
    )
}

export default Footer;