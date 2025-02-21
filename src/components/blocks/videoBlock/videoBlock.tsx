//videoBlock.tsx
import style from './videoBlock.module.scss'; 
import Button from '../../ui/button/button'; 

import training from '../../../assets/videos/training.mp4'; 
import previewImage from '../../../../src/assets/photos/video.png'; 

const VideoBlock = () => {
    return (
        <div className={style.videoContainer}>
            <div className={style.video}>
            <video width="768" controls poster={previewImage}>
                <source src={training} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
            </div>
            <div className={style.btn}>
                <Button text="Бесплатная тренировка" />
            </div>
        </div>
    );
}

export default VideoBlock;