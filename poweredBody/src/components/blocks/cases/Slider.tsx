import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import style from './Slider.module.scss'; 
import arrowLeft from "../../../assets/photos/arrow_left.svg";
import arrowRight from "../../../assets/photos/arrow_right.svg";

const Slider = ({ slides }) => {

    const nextRef = React.useRef(null);
    const prevRef = React.useRef(null);
    const swiperRef = React.useRef(null); 

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.navigation.init();
            swiperRef.current.swiper.navigation.update();
        }
    }, [swiperRef]);

    return (
        <Swiper
            ref={swiperRef} 
            spaceBetween={50}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{ clickable: true }}
            modules={[Navigation]}
            scrollbar={{ draggable: true }}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className={style.slidecontent}>
                        <div className={style.photos}>
                            <div className="before-section">
                                <p className={style.when}>До</p>
                                <img src={slide.imageBefore} alt="Before" className={style.image} />
                                
                            </div>
                            <div className="after-section">
                                <p className={style.when}>После</p>
                                <img src={slide.imageAfter} alt="After" className={style.image} />
                            </div>
                        </div>
                        <div className={style.slideText}>
                                <p className={style.name}>{slide.name}</p>
                                <p className={style.caseHeading}>{slide.titleBefore}</p>
                                <ul className={style.list}>
                                    {slide.textBefore.map((text, idx) => (
                                        <li key={idx}>{text}</li>
                                    ))}
                                </ul>
                                <p className={style.caseHeading}>{slide.titleAfter}</p>
                                <ul className={style.list}>
                                    {slide.textAfter.map((text, idx) => (
                                        <li key={idx}>{text}</li>
                                    ))}
                                </ul>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            
            <div ref={prevRef} className={style.navigationButtonLeft}>
                <img src={arrowLeft} alt="Previous" />
            </div>

            <div ref={nextRef} className={style.navigationButtonRight}>
                <img src={arrowRight} alt="Next" />
            </div>

        </Swiper>
        
    );
};

export default Slider;