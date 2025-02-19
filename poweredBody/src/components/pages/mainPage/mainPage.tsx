import CustomerPain from '../../blocks/customerPain/customerPain';
import Feedback from '../../blocks/feedback/feedback';
import MainBilboard from '../../blocks/mainBulboard/mainBilboard';
import ResultsBlock from '../../blocks/results/ResultsBlock';
import Cases1 from '../../blocks/cases/Cases1';
import WhyTry from '../../blocks/whyTry/whyTry';
import VideoBlock from '../../blocks/videoBlock/videoBlock';
import VideoBlockMobile from '../../blocks/videoBlockMobile/VideoBlockMobile';
import AboutMe from '../../blocks/aboutMe/aboutMe';
import ContactBlock from '../../blocks/contacts/ContactBlock';
import Footer from '../../layout/footer/footer';
import Header from '../../layout/header/header';
import NavBar from '../../layout/navbar/navbar';

import style from './mainPage.module.scss';
import Programs from '../../blocks/programs/Programs';


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
                <Cases1></Cases1>
                <WhyTry></WhyTry>
                <VideoBlock></VideoBlock>
                <VideoBlockMobile></VideoBlockMobile>
                <Programs></Programs>
                <Feedback></Feedback>
                <ContactBlock></ContactBlock>
                <Footer></Footer>
            </main>
        </div>

    )
}

export default MainPage;