
import annaBefore from '../../src/assets/photos/anna_before.svg'; 
import annaAfter from '../../src/assets/photos/anna_after.svg';   
import irinaBefore from '../../src/assets/photos/irina_before.svg'; 
import irinaAfter from '../../src/assets/photos/irina_after.svg';   
import liaBefore from '../../src/assets/photos/lia_before.svg';  
import liaAfter from '../../src/assets/photos/lia_after.svg';  
import loveBefore from '../../src/assets/photos/love_before.svg'; 
import loveAfter from '../../src/assets/photos/love_after.svg'; 
import ninaBefore from '../../src/assets/photos/nina_before.svg'; 
import ninaAfter from '../../src/assets/photos//nina_after.svg'; 
import annaBefore1 from '../../src/assets/photos/anna_before_1.svg'; 
import annaAfter1 from '../../src/assets/photos/anna_after_1.svg';  
import daryaBefore from '../../src/assets/photos/darya_before.svg';
import daryaAfter from '../../src/assets/photos/darya_after.svg';
import yanaBefore from '../../src/assets/photos/yana_before.svg';
import yanaAfter from '../../src/assets/photos/yana_after.svg';
import svetaBefore from '../../src/assets/photos/sveta_before.svg';
import svetaAfter from '../../src/assets/photos/sveta_after.svg';

const CUSTOMER_PAINS : string[] = [
    'Качате пресс, а живот не уходит',
    'Недавно стали мамой или после родов прошло много времени, но не было послеродового восстановления',
    'Имеете диагнозы: опущение или диастаз',
    'Столкнулись с подтеканием мочи при чихании, смехе или тренировках',
    'Испытываете регулярные вздутия живота',
    'Страдаете от болей в пояснице/тазу/внизу живота',
    'Замечаете изменения в осанке',
    'Быстро устаете после обычной бытовой нагрузки',
    'Находитесь на этапе менопаузы и хотите поддержать свое женское здоровье',
    'Давно не занимались, но мечтаете заняться собой',
]

const CASES = [
    {
        name: 'Анна, 32 года, 6 детей',
        titleBefore: 'Точка А - февраль 2023',
        textBefore: [
            "вес 61 кг при росте 158 см",
            "слабые мышцы тазового дна",
            "боли в спине, пояснице, между лопаток",
            "не было сил - ни физических, ни моральных"
        ],
        imageBefore: annaBefore, 
        imageAfter: annaAfter,  
        titleAfter: 'Точка Б - октябрь 2023',
        textAfter: [
            "вес 49 кг",
            "укрепилось всё тело",
            "ушли зажимы в области лопаток и боли в спине",
            "диастаз уменьшился с 3 пальцев до 1",
            "муж постоянно делает комплименты"
        ]
    },
    {
        name: 'Ирина, 42 года, 3 детей',
        titleBefore: 'Точка А -  июль 2023',
        textBefore: [
            "беспокоил выпяченный живот",
            "сутулость, изменения в осанке",
            "диастаз"
        ],
        imageBefore: irinaBefore, 
        imageAfter: irinaAfter,  
        titleAfter: 'Точка Б - октябрь 2023',
        textAfter: [
            "прошли боли в спине",
            "изменилось качество кожи - стала более подтянутой и упругой",
            "подтянулся живот"
        ]
    },
    {
        name: 'Лия, 29 лет, 2 детей',
        titleBefore: 'Точка А - ноябрь 2022',
        textBefore: [
            "вес 74 кг при росте 161 см",
            "с детства сколиоз, часто мучили боли в спине, слабые МТД",
            "тяжело двигаться, постоянная одышка",
            "не понимала, с чего начать"
        ],
        imageBefore: liaBefore, 
        imageAfter: liaAfter,  
        titleAfter: 'Точка Б - октябрь 2023',
        textAfter: [
            "вес 57 кг, рост увеличился до 164 см",
            "размер одежды был 52, стал 44",
            "ушли боли в спине",
            "постепенно изменила питание, на сладкое не тянет"
        ]
    },
    {
        name: 'Любовь, 32 года, 2 детей',
        titleBefore: 'Точка А - июль 2022',
        textBefore: [
            "вес 73 кг",
            "лишний вес, “галифе” бедер",
            "не было энергии, сил, не получалось считать калории в еде",
            "записалась на месяц тренировок"
        ],
        imageBefore: loveBefore, 
        imageAfter: loveAfter, 
        titleAfter: 'Точка Б - август 2023',
        textAfter: [
            "вес 62 кг, - 6 см в талии (с 75 до 69)",
            "не может без зарядки, абонемент до октября 2024",
            "муж и дети тоже присоединились к зарядкам",
            "благодаря клубу использует правило здоровой тарелки"
        ]
    },
    {
        name: 'Нина, 43 года, 2 детей',
        titleBefore: 'Точка А - август 2023',
        textBefore: [
            "проблемы с осанкой",
            "зажатость в грудном отделе",
            "боли в пояснице",
            "слабые МТД"
        ],
        imageBefore: ninaBefore,
        imageAfter: ninaAfter,  
        titleAfter: 'Точка Б - ноябрь 2023',
        textAfter: [
            "выпрямилась осанка, ушли боли в спине, пояснице и ноге",
            "раскрылась грудная клетка, прошло зажатие седалищного нерва",
            "укрепились МТД",
            "делает зарядку по утрам",
            "все тело подтянулось"
        ]
    },
    {
        name: 'Анна, 42 года, 2 детей',
        titleBefore: 'Точка А - август 2022',
        textBefore: [
            "проблемы с осанкой",
            "лишний вес",
            "слабые мышцы живота"
        ],
        imageBefore: annaBefore1, 
        imageAfter: annaAfter1,  
        titleAfter: 'Точка Б - ноябрь 2022',
        textAfter: [
            "выпрямилась осанка, ушла асимметрия в теле",
            "укрепились мышцы живота, ушел лишний вес",
            "изменилось отношение к зарядкам и активностям"
        ]
    },
    {
        name: 'Дарья, 33 года, 2 детей',
        titleBefore: 'Точка А - июнь 2023',
        textBefore: [
            "постоянные боли в спине",
            "сутулость",
            "целлюлит",
            "неправильный наклон таза"
        ],
        imageBefore: daryaBefore, 
        imageAfter: daryaAfter,  
        titleAfter: 'Точка Б - ноябрь 2023',
        textAfter: [
            "выровнялась осанка",
            "изменился наклон таза",
            "ушел целлюлит",
            "забыла о болях в спине",
            "подтянулся живот и всё тело"
        ]
    },
    {
        name: 'Яна, 31 год, 2 детей',
        titleBefore: 'Точка А - июль 2023',
        textBefore: [
            "вес 72 кг",
            "боли в спине",
            "головные боли"
        ],
        imageBefore: yanaBefore, 
        imageAfter: yanaAfter,  
        titleAfter: 'Точка Б - ноябрь 2023',
        textAfter: [
            "вес 62 кг",
            "убрала перекусы и начала пить воду",
            "добавила в жизнь движение",
            "влезла в брюки, которые ждали 2 года",
            "ушли головные боли и боли в спине",
            "чувствует себя моложе, появилось больше энергии"
        ]
    },
    {
        name: 'Светлана, 34 года, 3 детей',
        titleBefore: 'Точка А - июль 2022',
        textBefore: [
            "лишний вес, торчащий живот, сгибалась спина от кормления",
            "лень, тяжело двигаться, нет энергии",
            "дряблая кожа",
            "слабые МТД"
        ],
        imageBefore: svetaBefore, 
        imageAfter: svetaAfter, 
        titleAfter: 'Точка Б - июнь 2024',
        textAfter: [
            "- 10 кг на зарядках, без насилия",
            "ушел живот, расправились плечи и вытянулась шея",
            "выровнялась осанка, улучшилась кожа",
            "укрепились МТД",
            "подтянулось все тело: красивый рельеф рук, бедер и живота"
        ]
    }
]

export { CUSTOMER_PAINS, CASES }