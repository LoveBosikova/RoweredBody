import style from './VideoBlockMobile.module.scss'; 
import Button from '../../ui/button/button'; 

import training from '../../../assets/videos/video.mp4'; 

const VideoBlockMobile = () => {
    return (
        <div className={style.videoContainer}>
            <video width="100%" controls>
                <source src={training} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
            <div className={style.btn}>
            <Button text="Бесплатная тренировка" />
            </div>
        </div>
    );
}

export default VideoBlockMobile;