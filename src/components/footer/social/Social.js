import React from 'react'
import styles from './social.module.scss'
// icons
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { IconFaWeiboName } from "react-icons/fa";
import { FaRegPlayCircle } from "react-icons/fa";
// import { IoLogoWechat } from "react-icons/io5";
import { FaDiscord } from "react-icons/fa";

export default function Social() {
    return (
        <div className={styles.social}>
            <FaInstagram />
            <FaFacebookF />
            <FaYoutube />
            <FaTwitter />
            <FaTiktok />
            <FaLinkedinIn />
            {/* <IconFaWeiboName /> */}
            <FaRegPlayCircle />
            {/* <IoLogoWechat /> */}
            <FaDiscord />

        </div>
    )
}
