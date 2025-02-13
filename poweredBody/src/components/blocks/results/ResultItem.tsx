import styles from './ResultItem.module.scss'; // Импорт стилей

interface ResultItemProps {
  image: string;
  title: string;
  description: React.ReactNode;
  alt: string;
}

const ResultItem: React.FC<ResultItemProps> = ({ image, title, description, alt }) => {
    return (
      <div className={styles.imageItem}>
        <img src={image} alt={alt} className={styles.image} />
        <h3 className={styles.imageTitle}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    );
}

export default ResultItem;
