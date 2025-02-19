import Slider from './Slider';
import H2 from '../../ui/h2/h2';

import { SLIDES } from '../../../utils/constants';

import style from "./Cases.module.scss"; 

const Cases = () => {

    return (
        <div className={style.cases}>
            <H2 text={'Результат системы InsideOut'} />
            <div className={style.casesDescribe}>
                <Slider slides={SLIDES} />
            </div>
        </div>
    );
};

export default Cases;