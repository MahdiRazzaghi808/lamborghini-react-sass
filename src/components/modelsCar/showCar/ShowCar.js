import React from 'react'
import styles from "./ShowCar.module.scss"

import car from "../../../asset/cars/car1.svg"

export default function ShowCar() {
    return (
        <div>

            <div className={styles.imageWrapper}>
            <img src={car} alt="car" />

            </div>


            <div className={styles.explanation}>
                <div>
                    <h3>AVENTADOR</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                </div>

                <div className={styles.buttons}>
                    <button>EXPLORE THE MODELS</button>
                    <button>OPEN CAR CONFIGURATOR</button>
                </div>
            </div>


        </div>
    )
}


// style={{ display: active ? "flex" : "none" }}