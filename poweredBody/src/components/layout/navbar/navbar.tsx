import style from './navbar.module.scss';

function NavBar () {
    return (
        <nav className={style.navbar}>
            <ul className={style.linksWrap}>
                <li className={style.linkWrap}><a className={style.link} href='#'>Главная страница</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#'>Кому помогаю</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#'>Бесплатные тренировки</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#'>Основные занятия</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#'>Результаты</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#'>Контакты</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;