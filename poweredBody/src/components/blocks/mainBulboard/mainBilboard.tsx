import back from '../../../assets/billboard-main.png';

import style from './mainBilboard.module.scss';

function MainBilboard () {

    return (
        <div className={style.mainBilboard}>
            <div className={style.backImg}>
                <img className={style.img} src={back} alt='' />
            </div>
        </div>
    )
}

export default MainBilboard