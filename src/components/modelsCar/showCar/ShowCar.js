import React ,{useState} from 'react'
import styles from "./ShowCar.module.scss"

import car1 from "../../../asset/cars/car1.png"
import car2 from "../../../asset/cars/car2.png"
import car3 from "../../../asset/cars/car3.png"


import MainPageSlider from '../../slider/MainPageSlider'

const carsModel = [
    { id: 1, title: 'HURACÁN', subtitle: 'BEYOND THE CONCRETE', button1: '', button2: '', image:car1  },
    { id: 2, title: 'REVUELTO', subtitle: 'FROM NOW ON', button1: '', button2: '', image: car2 },
    { id: 3, title: 'URUS', subtitle: 'UNLOCK ANY ROAD', button1: '', button2: '', image: car3 },
    { id: 4, title: 'HURACÁN', subtitle: 'BEYOND THE CONCRETE', button1: '', button2: '', image:car1  },
    { id: 5, title: 'REVUELTO', subtitle: 'FROM NOW ON', button1: '', button2: '', image: car2 },
    { id: 6, title: 'URUS', subtitle: 'UNLOCK ANY ROAD', button1: '', button2: '', image: car3 },
]

export default function ShowCar() {

    const [stateActive,setStateActive]=useState(0)


    return (
        <div>

            <div className={styles.imageWrapper}>
            
{/* <MainPageSlider data={carsModel} state={{stateActive,setStateActive}}/> */}
            </div>

<div className="container">
            <div className={styles.explanation}>
                <div>
                    <h3>{carsModel[stateActive].title}</h3>
                    <p>{carsModel[stateActive].subtitle}</p>
                </div>

                <div className={styles.buttons}>
                    <button>EXPLORE THE MODELS</button>
                    <button>OPEN CAR CONFIGURATOR</button>
                </div>
            </div>
            </div>

        </div>
    )
}


// style={{ display: active ? "flex" : "none" }}