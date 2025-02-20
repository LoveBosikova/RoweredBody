import contacts from "../../../assets/contacts/contacts.png";
import instagram from "../../../assets/contacts/Instagram.svg";
import telegram from "../../../assets/contacts/telegram.svg";
import groups from "../../../assets/contacts/groups.svg";
import icon from "../../../assets/stars-fond.svg";

import styles from './ContactBlock.module.scss';

const ContactBlock: React.FC = () => {
  return (
    <section className={styles.contactBlock} id='contacts'>
      <div className={styles.backgroundImage}>
        <img src={contacts} alt="Контакты" className={styles.contactsImage} />
      </div>
      
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Контакты</h2>
        <div className={styles.contactList}>
          <a href="https://www.instagram.com/invites/contact/?i=1kc1ew53ni78m&utm_content=mucl0r2" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <img src={instagram} alt="Instagram" className={styles.contactIcon} />
            Instagram
          </a>
          <a href="https://t.me/Tasha_kolchik" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <img src={telegram} alt="Telegram" className={styles.contactIcon} />
            Telegram
          </a>
          <a href="https://t.me/telo_v_resurse" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
            <img src={groups} alt="Telegram Group" className={styles.contactIcon} />
            Telegram-group
          </a>
        </div>
      </div>

      <div className={styles.leftIcon}>
        <img src={icon} alt="Icon" className={styles.icon} />
      </div>
    </section>
  );
};

export default ContactBlock;
