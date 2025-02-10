import MainBilboard from '../../blocks/mainBulboard/mainBilboard';
import Footer from '../../layout/footer/footer';
import Header from '../../layout/header/header';
import NavBar from '../../layout/navbar/navbar';

import style from './mainPage.module.scss';

function MainPage () {
    return (
        <div className={style.pageWrap}>
            <NavBar></NavBar>
            <main className={style.main}>
                <Header></Header>
                {/* Сюда блоки */}
                <MainBilboard></MainBilboard>
                <Footer></Footer>
            </main>
        </div>

    )
}

export default MainPage;