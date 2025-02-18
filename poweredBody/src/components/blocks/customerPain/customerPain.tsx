import { CUSTOMER_PAINS } from '../../../utils/constants';
import Button from '../../ui/button/button';
import H3 from '../../ui/h3/h3';
import style from './customerPain.module.scss';

function CustomerPain () {
    return (
        <section className={style.customerPain} id='help'>
            <article className={style.contentWrap}>
                <div className={style.titleWrap}>
                    <H3 text={'Эти тренировки точно для вас, если вы:'}></H3>
                </div>
                <ol className={style.painWrap}>
                    {CUSTOMER_PAINS.map((pain)=> <li key={pain} className={style.pain}>{pain}</li>)}
                </ol>
            </article>
            <div className={style.btnWrap}>
                <Button text={'Запись на консультацию'}></Button>
            </div>
        </section>
    )
}

export default CustomerPain