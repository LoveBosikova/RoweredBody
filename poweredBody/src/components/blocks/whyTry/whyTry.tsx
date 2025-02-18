import H2 from '../../ui/h2/h2';

import tasha from '../../../assets/photos/tasha.png';

import style from './whyTry.module.scss'; 

function WhyTry () {
    return (
        <section className={style.aboutMe}>
            <H2 text={'Почему стоит попробовать'}></H2>
            <article className={style.info}>
                <div className={style.text}>
                    <p className={style.paragraph}>
                        Ваше тело после родов заслуживает особой заботы и подхода. 
                        Если привычные тренировки вызывают дискомфорт или кажутся недоступными, 
                        это не повод отказываться от спорта.
                    </p>
                    <p className={style.paragraph}>
                        Мои программы созданы специально для женщин и учитывают все особенности: 
                        диастаз, опущения, боли в спине или коленях, грыжи, протрузии, остеохондроз.
                    </p>
                    <p className={style.paragraph}>
                        Это не просто фитнес — это осознанные, мягкие тренировки, которые бережно восстанавливают тело. 
                        С помощью дыхания мы укрепляем глубокие мышцы кора, включая мышцы тазового дна, что дает силу изнутри и красоту снаружи. 
                        Работаем с осанкой, прорабатываем суставы во всех плоскостях, снимаем напряжение и возвращаем телу легкость.
                    </p> 
                </div>
                <img src={tasha} alt='' />
            </article>
            <p className={style.ctatext}>
                Я научу вас двигаться осознанно, с уважением к своему телу, чтобы вы не только избавились от дискомфорта, 
                но и обрели уверенность в себе. Готовы начать?
            </p>
        </section>
    )
}

export default WhyTry