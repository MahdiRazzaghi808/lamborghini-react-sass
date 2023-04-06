// import React from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";



// import styles from './mainPageSlider.module.scss'
// // import required modules

// function MainPageSlider({ data, state }) {

//     const { stateActive, setStateActive } = state


//     function handleSlideChange(swiper) {
//         const currentSlide = swiper.slides[swiper.activeIndex];

//         setStateActive(+currentSlide.getAttribute('data-swiper-slide-index'))
//         console.log(+currentSlide.getAttribute('data-swiper-slide-index'));


//     }

//     return (
//         <>
//             <Swiper
//                 slidesPerView={1.7}
//                 spaceBetween={30}
//                 loop={true}
//                 className="mySwiper"
//                 onSlideChange={handleSlideChange}
//             >
//                 {

//                     data.map(item => <SwiperSlide className={styles.imageWrapper} key={item.id}>  <img src={item.image} />   </SwiperSlide>
//                     )

//                 }

//             </Swiper>
//         </>
//     );
// }
// export default MainPageSlider
