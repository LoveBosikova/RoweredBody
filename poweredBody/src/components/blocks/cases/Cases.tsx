import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';

import H2 from '../../ui/h2/h2';

import 'swiper/css';


const slides = [
    {
        name: 'Анна, 32 года, 6 детей',
        titleBefore: 'Точка А - февраль 2023',
        textBefore: ["вес 61 кг при росте 158 см", "слабые мышцы тазового дна", "боли в спине, пояснице, между лопаток", "не было сил - ни физических, ни моральных"],
        imageBefore: 'before.jpg', // Фото "до"
        imageAfter: 'before.jpg',  // Фото после
        titleAfter: 'Точка Б - октябрь 2023',
        textAfter: ["вес 49 кг", "укрепилось всё тело", "ушли зажимы в области лопаток и боли в спине", "диастаз уменьшился с 3 пальцев до 1", "муж постоянно делает комплименты"]
    },
    {
        name: 'Ирина, 42 года, 3 детей',
        titleBefore: 'Точка А - июль 2023',
        textBefore: ["вес 61 кг при росте 158 см", "слабые мышцы тазового дна", "боли в спине, пояснице, между лопаток", "не было сил - ни физических, ни моральных"],
        imageBefore: 'before.jpg', // Фото "до"
        imageAfter: 'before.jpg',  // Фото после
        titleAfter: 'Точка Б - октябрь 2023',
        textAfter: ["вес 49 кг", "укрепилось всё тело", "ушли зажимы в области лопаток и боли в спине", "диастаз уменьшился с 3 пальцев до 1", "муж постоянно делает комплименты"]
    },
];

const Cases = () => {
    return (
            <div>
            <H2 text={'Результат системы InsideOut'} />
            <Swiper
                spaceBetween={30} // пространство между слайдами
                navigation // Включаем навигацию
                pagination={{ clickable: true }} // Включаем пагинацию
                scrollbar={{ draggable: true }} // Включаем прокрутку
            >
                <SwiperSlide>Слайд 1</SwiperSlide>
                <SwiperSlide>Слайд 2</SwiperSlide>
                <SwiperSlide>Слайд 3</SwiperSlide>
                {/* Добавьте другие слайды по мере необходимости */}
            </Swiper>
            </div>
    );
}

export default Cases;