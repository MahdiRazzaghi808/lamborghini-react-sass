import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const MainPageSlider = () => {
    return (
        <div style={{ width: "30rem", height: "30rem", margin: "0 auto" }}>
            <AwesomeSlider>
                <div>1</div>
                <div><Header /></div>
                <div>3</div>
                <div>4</div>
            </AwesomeSlider>

        </div>)
}


export default MainPageSlider;