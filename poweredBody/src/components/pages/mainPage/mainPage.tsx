import CustomerPain from '../../blocks/customerPain/customerPain';
import Feedback from '../../blocks/feedback/feedback';
import MainBilboard from '../../blocks/mainBulboard/mainBilboard';
import ResultsBlock from '../../blocks/results/ResultsBlock';
import WhyTry from '../../blocks/whyTry/whyTry';
import AboutMe from '../../blocks/aboutMe/aboutMe';
import ContactBlock from '../../blocks/contacts/ContactBlock';
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
                <AboutMe></AboutMe>
                <CustomerPain></CustomerPain>
                <ResultsBlock></ResultsBlock>
                <WhyTry></WhyTry>
                <Feedback></Feedback>
                <ContactBlock></ContactBlock>
                <Footer></Footer>
            </main>
        </div>

    )
}

export default MainPage;