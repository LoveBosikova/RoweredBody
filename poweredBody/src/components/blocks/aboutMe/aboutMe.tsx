import H3 from '../../ui/h3/h3';
import H2 from '../../ui/h2/h2';
import style from './aboutMe.module.scss'; 

import aboutme from '../../../assets/photos/about-me.png';


function AboutMe () {
    return (
        <section className={style.aboutMe}>
            <H2 text={'Обо мне'}></H2>
            <article className={style.info}>
                <img src={aboutme} alt="" />
                <div className={style.text}>
                <p className={style.paragraph}>Я Таша, женский фитнес-тренер, специалист по мышцам тазового дна, но ученицы зовут меня «тренер с бархатным голосом».
                </p>
                <p className={style.paragraph}>Помогаю решить неудобные «радости материнства»: торчащий живот, диастаз, подтекание мочи, опущения, боли в спине.
                </p>
                <p className={style.paragraph}>Являюсь ведущим тренером в онлайн-клубе блогера-миллионника, где единовременно тренируются 7000+ женщин.</p> 
                <p className={style.paragraph}>Сама дважды прошла путь восстановления от диагноза: "несостоятельность мышц тазового дна и диастаза прямых мышц живота" до полного восстановления.
                </p>
                <p className={style.paragraph}>Выступала спикером на 3-дневной конференции «Фестиваль женского здоровья» и на интенсиве «Breaking БАД» от 4fresh.
                </p>
                </div>
            </article>
        </section>
    )
}



export default AboutMe