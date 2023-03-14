import React from 'react'
import styles from "./footer.module.scss"

// import Social from './social/Social'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>

                    <div className={styles.social}>

                        <ul>
                            <li><a href="#">COMPANY</a></li>
                            <li><a href="#">CAREERS</a></li>
                            <li><a href="#">CONTACT US</a></li>
                            <li><a href="#">SUSTAINABILITY</a></li>
                            <li><a href="#">MEDIA CENTER</a></li>
                            <li><a href="#">PRIVACY & LEGAL</a></li>
                            <li><a href="#">COOKIE SETTINGS</a></li>
                            <li><a href="#">SITEMAP</a></li>
                            <li><a href="#">NEWSLETTER</a></li>
                            <li><a href="#">ACCESSIBILITY</a></li>
                        </ul>

                        <div>social</div>
                    </div>


                    <div class={styles.explain}>
                        The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.
                    </div>


                    <div>
                        <p>Copyright © 2023 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.</p>
                        <p>All rights reserved. VAT no. IT 00591801204</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
