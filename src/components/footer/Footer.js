import React from 'react'
import styles from "./footer.module.scss"

import Social from './social/Social'

const linkArr = [
    { id: 1, title: 'COMPANY', href: "#" },
    { id: 2, title: 'CAREERS', href: "#" },
    { id: 3, title: 'CONTACT US', href: "#" },
    { id: 4, title: 'SUSTAINABILITY', href: "#" },
    { id: 5, title: 'MEDIA CENTER', href: "#" },
    { id: 6, title: 'PRIVACY & LEGAL', href: "#" },
    { id: 7, title: 'COOKIE SETTINGS', href: "#" },
    { id: 8, title: 'SITEMAP', href: "#" },
    { id: 9, title: 'NEWSLETTER', href: "#" },
    { id: 10, title: 'ACCESSIBILITY', href: "#" },

]



const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <div className={styles.wrapper}>

                    <div className={styles.social}>

                        <ul>
                            {linkArr.map(item => <li ket={item.id}><a href={item.href}>{item.title}</a></li>)}

                        </ul>

                        <div>
                            <Social />
                        </div>


                    </div>


                    <div class={styles.explain}>
                        The consumption and emissions values in the website refer to your geographical IP. This value might be unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions information in your area.
                    </div>


                    <div>
                        <p>Copyright © 2023 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.</p>
                        <p>All rights reserved. VAT no. IT 00591801204</p>
                    </div>

                    <div className={styles.mobileSocialIcons}> <Social /></div>


                </div>
            </div>
        </div>
    )
}

export default Footer
