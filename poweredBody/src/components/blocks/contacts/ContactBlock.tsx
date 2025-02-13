import contacts from "../../../assets/contacts/contacts.png";
import instagram from "../../../assets/contacts/Instagram.svg";
import telegram from "../../../assets/contacts/telegram.svg";
import groups from "../../../assets/contacts/groups.svg";
import icon from "../../../assets/stars-fond.svg";

import styles from './ContactBlock.module.scss';

const ContactBlock: React.FC = () => {
  return (
    <section className={styles.contactBlock}>
      <div className={styles.backgroundImage}>
        <img src={contacts} alt="Контакты" className={styles.contactsImage} />
      </div>
      
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.contactList}>
          <p className={styles.contactItem}>
            <img src={instagram} alt="Instagram" className={styles.contactIcon} />
            Instagram
          </p>
          <p className={styles.contactItem}>
            <img src={telegram} alt="Telegram" className={styles.contactIcon} />
            Telegram
          </p>
          <p className={styles.contactItem}>
            <img src={groups} alt="Telegram Group" className={styles.contactIcon} />
            Telegram-group
          </p>
        </div>
      </div>

      <div className={styles.leftIcon}>
        <img src={icon} alt="Icon" className={styles.icon} />
      </div>
    </section>
  );
};

export default ContactBlock;
