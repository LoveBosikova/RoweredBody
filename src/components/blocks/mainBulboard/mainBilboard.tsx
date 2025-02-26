import back from '../../../assets/billboard-main.png';
import Button from '../../ui/button/button';

import style from './mainBilboard.module.scss';

function MainBilboard () {

    return (
        <section className={style.mainBilboard}>
            <picture className={style.backImg} >
                <source
                    media="(max-width: 767px)"
                    srcSet="/billboard-main-mobile.png 767w"
                    sizes="720px"
                />
                <source
                    media="(min-width: 767px)"
                    srcSet="/billboard-main.png 767w"
                    sizes="1140px"
                />
                <source
                    srcSet="/billboard-main.png 767w"
                    sizes="776px"
                />
                <img className={style.img} src={back} alt='' />
            </picture>
            <div className={style.contentWrap}>
                <h1 className={style.title}>Тело в ресурсе</h1>
                <div className={style.btnWrap}>
                    <Button link='https://t.me/Tasha_kolchik' text={'Запись на консультацию'}></Button>
                </div>
                <p className={style.text}>
                    Тренировки, на которых женщины со мной укрепляют здоровье, тело и самооценку, без страданий и стресса
                </p>
            </div>
        </section>
    )
}

export default MainBilboard