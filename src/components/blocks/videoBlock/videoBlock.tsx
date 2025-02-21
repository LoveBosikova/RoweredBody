//videoBlock.tsx
import Button from '../../ui/button/button'; 

import training from '../../../assets/videos/training.mp4'; 
import trainingMobile from '../../../assets/videos/video.mp4'; 
import previewImage from '../../../../src/assets/photos/video.png'; 
import previewImageMobile from '../../../../src/assets/photos/videoMobile2.png'; 

import style from './videoBlock.module.scss'; 

const VideoBlock = () => {
    return (
        <div className={style.videoContainer}>
            <div className={style.video}>
                <video width="768" controls poster={previewImage}>
                    <source src={training} type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
            
            <div className={style.videoMobile}>  
                <video width="100%" controls poster={previewImageMobile}>
                    <source src={trainingMobile} type="video/mp4" />
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