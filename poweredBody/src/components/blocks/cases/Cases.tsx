import { Swiper, SwiperSlide } from 'swiper/react';

import H2 from '../../ui/h2/h2';

import { CASES } from '../../../utils/constants';

import 'swiper/css';
import style from "./Cases.module.scss"; 
import CaseCard from '../../ui/caseCard/caseCard';

function Cases () {
    return (
        <section className={style.cases}>
            <H2 text={'Результат системы InsideOut'} />
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
                >
                    {CASES.map((c) => {
                        return (
                            <SwiperSlide className={style.slide}>
                                <CaseCard case={c}></CaseCard>
                            </SwiperSlide>
                        )
                    })}
            </Swiper>
            </div>
        </section>
    )
}


export default Cases;