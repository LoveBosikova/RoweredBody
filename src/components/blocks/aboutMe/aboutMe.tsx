//aboutMe.tsx
import H2 from '../../ui/h2/h2';

import aboutme from '../../../assets/photos/about-me.png';

import style from './aboutMe.module.scss'; 

function AboutMe () {
    return (
        <section className={style.aboutMe} id='about'>
            <H2 text={'Обо мне'}></H2>
            <article className={style.info}>
                <div className={style.photo}>
                    <img src={aboutme} alt="" />
                </div>
                <div className={style.text}>
                    <p className={style.paragraph}>
                        Я Таша, женский фитнес-тренер, специалист по мышцам тазового дна, 
                        но ученицы зовут меня «тренер с бархатным голосом».
                    </p>
                    <p className={style.paragraph}>
                        Помогаю решить неудобные «радости материнства»: торчащий живот, диастаз,
                        подтекание мочи, опущения, боли в спине.
                    </p>
                    <p className={style.paragraph}>
                        Являюсь ведущим тренером в онлайн-клубе блогера-миллионника,
                        где единовременно тренируются 7000+ женщин.
                    </p> 
                    <p className={style.paragraphLast}>
                        Сама дважды прошла путь восстановления от диагноза: "несостоятельность
                        мышц тазового дна и диастаза прямых мышц живота" до полного восстановления.
                    </p>
                    <p className={style.paragraphLast}>
                        Выступала спикером на 3-дневной конференции «Фестиваль женского здоровья» 
                        и на интенсиве «Breaking БАД» от 4fresh.
                    </p>
                </div>
            </article>
            <div className={style.textNew}>
                    <p className={style.paragraphNew}>
                        Сама дважды прошла путь восстановления от диагноза: "несостоятельность
                        мышц тазового дна и диастаза прямых мышц живота" до полного восстановления.
                    </p>
                    <p className={style.paragraphNew}>
                        Выступала спикером на 3-дневной конференции «Фестиваль женского здоровья» 
                        и на интенсиве «Breaking БАД» от 4fresh.
                    </p>
            </div>
        </section>
    )
}



export default AboutMe