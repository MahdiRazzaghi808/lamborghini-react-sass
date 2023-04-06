import React from 'react'
import styles from './modelsCar.module.scss'

import ShowCar from './showCar/ShowCar'

export default function ModelsCar() {
    return (
        <div className={styles.models}>
            <div className="container">
                <h2>MODELS</h2>
                </div>
                
                <div>
                    <ShowCar />
                </div>
         


        </div>
    )
}
