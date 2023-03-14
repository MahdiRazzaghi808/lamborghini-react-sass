import React from 'react'
import styles from './navbar.module.scss'

import logo from '../../asset/icon/logo.svg'
import chat from '../../asset/icon/chat.svg'
import search from '../../asset/icon/search.svg'
import menu from '../../asset/icon/menu.svg'

const Navbar = () => {
    return (

        <div className={styles.navbar}>

            <div className={styles.nav}>

                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>

                <div className={styles.menu}>
                    <ul>
                        <li><a href="#">MODELS</a></li>
                        <li><a href="#">CUSTOM SOLUTIONS</a></li>
                        <li><a href="#">OWNERSHIP</a></li>
                        <li><a href="#">MOTORSPORT</a></li>
                    </ul>
                </div>

            </div>


            <div className={styles.nav}>

                <div className={styles.menu}>
                    <ul>
                        <li><a href="#">DEALERSHIPS</a></li>
                        <li><a href="#">MUSEUM</a></li>
                        <li><a href="#">STORE</a></li>
                    </ul>
                </div>

                <div className={styles.menu} id={styles.a}>
                    <ul>
                        <li><a href="#"><img src={chat} alt="chat" /></a></li>
                        <li><a href="#"><img src={search} alt="search" /></a></li>
                        <li><a href="#"><img src={menu} alt="menu" /></a></li>
                    </ul>
                </div>

            </div>


        </div>
    )
}

export default Navbar
