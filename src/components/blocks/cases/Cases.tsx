import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import H2 from '../../ui/h2/h2';
import CaseCard from '../../ui/caseCard/caseCard';

import { CASES } from '../../../utils/constants';
import btn from '../../../assets/btn-swiper.svg';

import style from "./Cases.module.scss"; 

function Cases () {
    const swiperRef = useRef<any>(null);

    return (
        <section className={style.cases} id='cases'>
            <div className={style.titleWrap}>
                <H2 text={'Результат системы InsideOut'} />
            </div>
            <div className={style.swiperWrap}>
                <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={1}
                spaceBetween={10}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                pagination={true}
                className={style.swiper}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                >
                    {CASES.map((c) => {
                        return (
                            <SwiperSlide key={c.name} className={style.slide}>
                                <CaseCard key={c.name} case={c}></CaseCard>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
            <div className={style.btnsWrap}>
                <button className={style.btnPrev} onClick={() => swiperRef.current?.slidePrev()}>
                    <img className={style.img} src={btn} alt="" />
                </button>
                <button className={style.btnNext} onClick={() => swiperRef.current?.slideNext()}>
                        <img className={style.img} src={btn} alt='Следующий слайд' />
                </button>
            </div>
            </div>
        </section>
    )
}


export default Cases;