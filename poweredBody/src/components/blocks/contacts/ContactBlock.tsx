
import contacts from "../../../assets/contacts/contacts.png";
import Instagram from "../../../assets/contacts/Instagram.svg";
import telegram from "../../../assets/contacts/telegram.svg";
import groups from "../../../assets/contacts/groups.svg";
import Icon from "../../../assets/stars-fond.svg";

import styles from './ContactBlock.module.scss'; 

const ContactBlock: React.FC = () => {
  return (
    <section className={styles.contactBlock}>
      <div className={styles.backgroundImage}>
        <img src={contacts} alt="Контакты" className={styles.contactsImage} />
      </div>
      
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>Контакты</h2>
        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <img src={Instagram} alt="Instagram" className={styles.contactIcon} />
            Instagram
          </li>
          <li className={styles.contactItem}>
            <img src={telegram} alt="Telegram" className={styles.contactIcon} />
            Telegram
          </li>
          <li className={styles.contactItem}>
            <img src={groups} alt="Telegram Group" className={styles.contactIcon} />
            Telegram-group
          </li>
        </ul>
      </div>

      <div className={styles.leftIcon}>
        <img src={Icon} alt="Icon" className={styles.icon} />
      </div>
    </section>
  );
};

export default ContactBlock;