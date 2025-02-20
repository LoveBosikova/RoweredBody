import React, { useState } from 'react';
import programs1 from "../../../assets/programs/programs-1.png";
import programs2 from "../../../assets/programs/programs-2.png";
import programs3 from "../../../assets/programs/programs-3.png";

import programs4 from "../../../assets/programs/programs-4.png"; // Картинка для relaxation
import programs5 from "../../../assets/programs/programs-5.png"; // Картинка для fitness camp

import arrow from "../../../assets/programs/arrow.svg";
import arrow2 from "../../../assets/programs/arrow-2.svg";
import starsFond from "../../../assets/stars-fond.svg"; 

import Button from '../../ui/button/button'; 
import styles from "./Programs.module.scss"; 

const Programs: React.FC = () => {
  // Состояния для управления картинкой, заголовком и текстом
  const [isRelaxationVisible, setIsRelaxationVisible] = useState(false);
  const [relaxationText, setRelaxationText] = useState("За час разберем ваше текущее состояние физической активности, осанки и подвижности, выявим причины дискомфорта и создадим пошаговый план решения выявленных проблем.");
  const [relaxationTitle, setRelaxationTitle] = useState("Диагностическая консультация");

  const [isFitnessCampVisible, setIsFitnessCampVisible] = useState(false);
  const [fitnessCampText, setFitnessCampText] = useState("Начнем с диагностики — я помогу создать программу тренировок, которая подойдет именно вам. Каждое занятие длится всего 35-40 минут, где я внимательно проверю вашу технику, чтобы каждое движение было уверенным и безопасным. Плюс, дам советы по бытовым привычкам и поддержу в личном чате.");
  const [fitnessCampTitle, setFitnessCampTitle] = useState("Персональные тренировки");

  // Функции для переключения картинок, заголовков и текста
  const toggleRelaxation = () => {
    setIsRelaxationVisible(!isRelaxationVisible);
    setRelaxationTitle(isRelaxationVisible ? "Диагностическая консультация" : "Фитнес-кэмп в горах и на море");
    setRelaxationText(isRelaxationVisible ? "За час разберем ваше текущее состояние физической активности, осанки и подвижности, выявим причины дискомфорта и создадим пошаговый план решения выявленных проблем." : "7 дней активного отдыха в горах и на море: уникальные тренировки, треккинг, сапы и волшебные закаты и рассветы!");
  };

  const toggleFitnessCamp = () => {
    setIsFitnessCampVisible(!isFitnessCampVisible);
    setFitnessCampTitle(isFitnessCampVisible ? "Персональные тренировки" : "Курс тренировок для расслабления");
    setFitnessCampText(isFitnessCampVisible ? "Начнем с диагностики — я помогу создать программу тренировок, которая подойдет именно вам. Каждое занятие длится всего 35-40 минут, где я внимательно проверю вашу технику, чтобы каждое движение было уверенным и безопасным. Плюс, дам советы по бытовым привычкам и поддержу в личном чате." : "Подарите себе время для отдыха и гармонии! Курс вечерних тренировок поможет вам улучшить качество сна, укрепить тело и восстановить физическое и ментальное здоровье. Вас ждут упражнения для улучшения мобильности и растяжка, практики для снятия напряжения и для глубокого расслабления.");
  };

  return (
    <section className={styles.programs} id='programs'>
      <h2 className={styles.title}>Программы</h2>

      <div className={styles.cards}>
        <div className={styles.cardContainer}>
          {/* Первая карточка */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={isRelaxationVisible ? programs5 : programs1} 
                alt="Диагностическая консультация"
                className={styles.image}
              />
              <div className={`${styles.arrowWrapper} ${styles.arrowLeft}`}>
                <img
                  src={arrow}
                  alt="arrow"
                  className={styles.arrow}
                  onClick={toggleRelaxation}
                />
              </div>
            </div>
            <h3 className={styles.cardTitle}>{relaxationTitle}</h3>
            <p className={styles.cardDescription}>
              {relaxationText}
            </p>
          </div>

          <div className={styles.icon}>
            <img src={starsFond} alt="Иконка" className={styles.iconImage} />
          </div>

          {/* Вторая карточка — без изменений */}
          <div className={styles.card}>
            <img
              src={programs2} 
              alt="Персональные тренировки"
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>Групповые тренировки</h3>
            <p className={styles.cardDescription}>
              Онлайн-тренировки, которые вдохновляют!
              Всего 35-40 минут — и вы в тонусе. Поддержка тренера, полезные советы по бытовым привычкам 
              и самостоятельным занятиям, проверка техники, групповая динамика, а общий чат станет местом 
              для вопросов и мотивации. Записи занятий всегда под рукой.
            </p>
          </div>

          <div className={styles.icon}>
            <img src={starsFond} alt="Иконка" className={styles.iconImage} />
          </div>

          {/* Третья карточка */}
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={isFitnessCampVisible ? programs4 : programs3} 
                alt="Групповые тренировки"
                className={styles.image}
              />
              <div className={`${styles.arrowWrapper} ${styles.arrowRight}`}>
                <img
                  src={arrow2}
                  alt="arrow2"
                  className={styles.arrow}
                  onClick={toggleFitnessCamp}
                />
              </div>
            </div>
            <h3 className={styles.cardTitle}>{fitnessCampTitle}</h3>
            <p className={styles.cardDescription}>
              {fitnessCampText}
            </p>
          </div>
        </div>

        <div className={styles.cardMobile}>
            <img
              src={programs4} 
              alt="Фитнес-кэмп в горах и на море"
              className={styles.image}
            />
            <h3 className={styles.cardTitle}>
              Фитнес-кэмп в горах и на море
            </h3>
            <p className={styles.cardDescription}>
              Подарите себе время для отдыха и гармонии! Курс вечерних тренировок поможет вам улучшить качество сна,
              укрепить тело и восстановить физическое и ментальное здоровье. Вас ждут упражнения для улучшения 
              мобильности и растяжка, практики для снятия напряжения и для глубокого расслабления.
            </p>
          </div>


        <div className={styles.btnWrap}>
          <Button text="Позаботиться о себе сейчас" />
        </div>

        <div className={styles.footerText}>
          Забота о своем теле начинается изнутри!
        </div>
      </div>
    </section>
  );
};

export default Programs;
