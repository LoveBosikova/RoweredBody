import style from './videoBlock.module.scss'; 

import training from '../../../assets/videos/training.mp4'; 

const VideoBlock = () => {
    return (
        <div className={style.videoContainer}>
            <video width="800" controls>
                <source src={training} type="video/mp4" />
                Ваш браузер не поддерживает видео.
            </video>
        </div>
    );
}

export default VideoBlock;