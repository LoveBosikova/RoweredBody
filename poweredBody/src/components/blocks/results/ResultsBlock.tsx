import ResultItem from './ResultItem';

import result1 from '../../../assets/results/result-1.png';
import result2 from '../../../assets/results/result-2.png';
import result3 from '../../../assets/results/result-3.png';
import result4 from '../../../assets/results/result-4.png';

import styles from './ResultsBlock.module.scss';

const ResultsBlock: React.FC = () => {
  return (
    <div className={styles.resultsBlock}>
      <h2 className={styles.title}>Какие результаты у клиентов</h2>
      <div className={styles.images}>
        <ResultItem
          image={result1}
          title="Подтянутое тело"
          description={
            <>
              Плоский живот, упругие ягодицы, подтянутые бедра и кожа без целлюлита.
              <p>Ваше тело станет рельефным, выносливым, готовым к любым нагрузкам.</p>
            </>
          }
          alt="Подтянутое тело"
        />
        <ResultItem
          image={result2}
          title="Красивая осанка"
          description={
            <>
              Почувствуете, как расправляются плечи, уходит напряжение. Осанка станет «гордой», а походка — женственной и легкой.
              <p>Улучшится мобильность суставов и позвоночника, исчезнут зажатость и боли в спине.</p>
            </>
          }
          alt="Красивая осанка"
        />
        <ResultItem
          image={result3}
          title="Интимное здоровье"
          description={
            <>
              Восстановите тонус интимных мышц, улучшите чувствительность и вернёте либидо.
              <p>Забудете о дискомфорте и боли — ваша интимная жизнь станет ярче и гармоничнее.</p>
            </>
          }
          alt="Интимное здоровье"
        />
        <ResultItem
          image={result4}
          title="Уровень энергии"
          description={
            <>
              Ощутите прилив сил и радость каждого дня. Будете наслаждаться свободой движений и новыми возможностями своего тела.
              <p>Ваша выносливость и сила возрастут, а вместе с ними — настроение, самооценка и уверенность в себе.</p>
            </>
          }
          alt="Уровень энергии"
        />
      </div>
    </div>
  );
}

export default ResultsBlock;

