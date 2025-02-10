import back from '../../../assets/billboard-main.png';

import style from './mainBilboard.module.scss';

function MainBilboard () {

    return (
        <div className={style.mainBilboard}>
            <div className={style.backImg}>
                <img className={style.img} src={back} alt='' />
            </div>
            <div className={style.contentWrap}>
                <h1 className={style.title}>Тело в ресурсе</h1>

            </div>
        </div>
    )
}

export default MainBilboard