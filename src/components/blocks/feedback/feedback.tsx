import { Swiper, SwiperSlide } from 'swiper/react';

import feedback1 from '../../../assets/feedback/feedback-1.png';
import feedback2 from '../../../assets/feedback/feedback-2.png';
import feedback3 from '../../../assets/feedback/feedback-3.png';
import feedback4 from '../../../assets/feedback/feedback-4.png';
import feedback5 from '../../../assets/feedback/feedback-5.png';
import feedback6 from '../../../assets/feedback/feedback-6.png';
import feedback7 from '../../../assets/feedback/feedback-7.png';
import feedback8 from '../../../assets/feedback/feedback-8.png';
import feedback9 from '../../../assets/feedback/feedback-9.png';
import feedback10 from '../../../assets/feedback/feedback-10.png';
import feedback11 from '../../../assets/feedback/feedback-11.png';
import feedback12 from '../../../assets/feedback/feedback-12.png';
import feedback13 from '../../../assets/feedback/feedback-13.png';
import feedback14 from '../../../assets/feedback/feedback-14.png';
import feedback15 from '../../../assets/feedback/feedback-15.png';
import feedback16 from '../../../assets/feedback/feedback-16.png';
import feedback17 from '../../../assets/feedback/feedback-17.png';
import feedback18 from '../../../assets/feedback/feedback-18.png';

import H2 from '../../ui/h2/h2';
//
import style from './feedback.module.scss';

function Feedback () {
    return (
        <section className={style.feedback} id='feedback'>
            <div className={style.titleWrap}>
                <H2 text={'Отзывы'}></H2>
            </div>
            <div className={style.swiperWrap}>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={3.5}
            spaceBetween={5}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            breakpoints={{
                // when window width is >= 576px
                    0: {
                        slidesPerView: 1.25,
                    },
                // when window width is >= 768px
                    768: {
                        slidesPerView: 2.25,
                    },
                // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3.5,
                    },
                }}
            pagination={true}
            className={style.swiper}
            >
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback2} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback3} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback4} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback5} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback6} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback7} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback8} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback9} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback10} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback11} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback12} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback13} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback14} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback15} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback16} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback17} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback18} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
            </div>
            <div className={style.swiperWrap}>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={3.5}
            slidesOffsetBefore={-70}
            spaceBetween={5}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            breakpoints={{
                // when window width is >= 576px
                    0: {
                        slidesPerView: 1.25,
                    },
                // when window width is >= 768px
                    768: {
                        slidesPerView: 2.25,
                    },
                // when window width is >= 1024px
                    1024: {
                        slidesPerView: 3.5,
                    },
                }}
            pagination={true}
            className={style.swiper}
        >
                        <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback1} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback2} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback3} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback4} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback5} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback6} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback7} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback8} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback9} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback10} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback11} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback12} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback13} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback14} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback15} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback16} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback17} alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide className={style.slide}>
                <div className={style.slideWrap}>
                    <img className={style.img} src={feedback18} alt="" />
                </div>
            </SwiperSlide>
        </Swiper>
            </div>
        </section>
    )
}

export default Feedback
