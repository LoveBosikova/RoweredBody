import back from '../../../assets/billboard-main.png';
import Button from '../../ui/button/button';

import style from './mainBilboard.module.scss';

function MainBilboard () {

    return (
        <div className={style.mainBilboard}>
            <div className={style.backImg}>
                <img className={style.img} src={back} alt='' />
            </div>
            <div className={style.contentWrap}>
                <h1 className={style.title}>Тело в ресурсе</h1>
                <div className={style.btnWrap}>
                    <Button text={'Запись на консультацию'}></Button>
                </div>
                <p className={style.text}>
                    Тренировки, на которых женщины со мной укрепляют здоровье, тело и самооценку, без страданий и стресса
                </p>
            </div>
        </div>
    )
}

export default MainBilboard