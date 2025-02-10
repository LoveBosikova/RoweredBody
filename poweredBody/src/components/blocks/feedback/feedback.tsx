import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

import feedback1 from '../../../assets/feedback/feedback-1.webp';
import feedback2 from '../../../assets/feedback/feedback-2.webp';
import feedback3 from '../../../assets/feedback/feedback-3.webp';
import feedback4 from '../../../assets/feedback/feedback-4.webp';
import feedback5 from '../../../assets/feedback/feedback-5.webp';
import feedback6 from '../../../assets/feedback/feedback-6.webp';
import feedback7 from '../../../assets/feedback/feedback-7.webp';
import H2 from '../../ui/h2/h2';

import 'swiper/css';
import style from './feedback.module.scss';

function Feedback () {
    return (
        <section className={style.feedback}>
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
        </Swiper>
            </div>
            <div className={style.swiperWrap}>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={false}
            slidesPerView={3.5}
            slidesOffsetBefore={-200}
            spaceBetween={5}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
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
        </Swiper>
            </div>
        </section>
    )
}

export default Feedback


// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';


// export default () => {
//   return (
//     <Swiper
//       // install Swiper modules
//       modules={[Navigation, Pagination, Scrollbar, A11y]}
//       spaceBetween={50}
//       slidesPerView={3}
//       navigation
//       pagination={{ clickable: true }}
//       scrollbar={{ draggable: true }}
//       onSwiper={(swiper) => console.log(swiper)}
//       onSlideChange={() => console.log('slide change')}
//     >
//       <SwiperSlide>Slide 1</SwiperSlide>
//       <SwiperSlide>Slide 2</SwiperSlide>
//       <SwiperSlide>Slide 3</SwiperSlide>
//       <SwiperSlide>Slide 4</SwiperSlide>
//       ...
//     </Swiper>
//   );
// };