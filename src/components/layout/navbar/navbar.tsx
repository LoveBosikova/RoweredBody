import starsFond from "../../../assets/stars-fond.svg"; 


import style from './navbar.module.scss';

function NavBar () {
    return (
        <nav className={style.navbar}>
            <div className={style.imgWrap}>
                <img className={style.img} src={starsFond} alt='logo' />
            </div>
            <ul className={style.linksWrap}>
                <li className={style.linkWrap}><a className={style.link} href='#about'>Обо мне</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#help'>Кому помогаю</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#programs'>Программы</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#results'>Кейсы</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#feedback'>Отзывы</a></li>
                <li className={style.linkWrap}><a className={style.link} href='#contacts'>Контакты</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;