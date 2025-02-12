import CustomerPain from '../../blocks/customerPain/customerPain';
import Feedback from '../../blocks/feedback/feedback';
import MainBilboard from '../../blocks/mainBulboard/mainBilboard';
import ResultsBlock from '../../blocks/results/ResultsBlock';
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
                <CustomerPain></CustomerPain>
                <ResultsBlock></ResultsBlock>
                <Feedback></Feedback>
                <Footer></Footer>
            </main>
        </div>

    )
}

export default MainPage;