
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
        <div className={styles.imageItem}>
          <img src={result1} alt="Подтянутое тело" className={styles.image} />
          <h3 className={styles.imageTitle}>Подтянутое тело</h3>
          <p className={styles.description}>
            Спортивное тело, плоский живот, подтянутые бедра и упругие ягодицы. Тонус кожи без целлюлита. Функциональное тело, способное выдержать нагрузку.
          </p>
        </div>
        <div className={styles.imageItem}>
          <img src={result2} alt="Красивая осанка" className={styles.image} />
          <h3 className={styles.imageTitle}>Красивая осанка</h3>
          <p className={styles.description}>
            Легкая женственная походка. Расправляются плечи, появляется легкость в шее, плечах и между лопатками.
          </p>
        </div>
        <div className={styles.imageItem}>
          <img src={result3} alt="Интимное здоровье" className={styles.image} />
          <h3 className={styles.imageTitle}>Интимное здоровье</h3>
          <p className={styles.description}>
            Восстанавливается тонус интимных мышц, улучшается чувствительность мышц, возвращается либидо. Возвращается интимная жизнь без боли и дискомфорта.
          </p>
        </div>
        <div className={styles.imageItem}>
          <img src={result4} alt="Уровень энергии" className={styles.image} />
          <h3 className={styles.imageTitle}>Уровень энергии</h3>
          <p className={styles.description}>
            Появляются радость жизни и свобода движений. Увеличивается сила и выносливость. Улучшается настроение, поднимается самооценка и уверенность в себе.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResultsBlock;
