import React from 'react'
import styles from './modelsCar.module.scss'

import ShowCar from './showCar/ShowCar'

export default function ModelsCar() {
    return (
        <div className={styles.models}>
            <div className="container">


                <h2>MODELS</h2>

                <div style={{ width: "80%", margin: "1.5rem 0", overflow: "hidden" }}>
                    <ShowCar />
                </div>
            </div>


        </div>
    )
}
