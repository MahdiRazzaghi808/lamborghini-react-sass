import React from 'react'
import styles from "./header.module.scss"
import banner from "../../asset/banner/cover1.jpg"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className='container'>
                <img src={banner} alt="banner" />

                <div className={styles.wrapper}>

                    <div className={styles.explanation}>
                        <p>A NEW ERA BEGINS</p>
                        <p id={styles.name}>LB744</p>

                        <button className='btn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="49.464" height="57.116" viewBox="0 0 49.464 57.116">
                                <g id="Group_2" data-name="Group 2" transform="translate(-1624.5 -188.5)">
                                    <path id="Path_3" data-name="Path 3" d="M50.464,43.992,25.732,58.271,1,43.992V15.434L25.732,1.155,50.464,15.434Z" transform="translate(1623.5 187.345)" strokeWidth="2px" stroke=" #fff" fill="#000" />
                                    <path id="Path_4" data-name="Path 4" d="M0,0,7.432,5.674,14.864,0" transform="translate(1646.5 224.364) rotate(-90)" strokeWidth="2px" stroke="#fff" />
                                </g>
                            </svg>
                        </button>

                    </div>
                    
                </div>

            </div>
        </div>
    )
}
