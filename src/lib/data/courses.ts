import harmonyImage from '@/assets/svg/harmony.svg';
import { StaticImageData } from 'next/image';
import pashaPotekhin from '@/assets/images/mentors/Pasha_Potekhin.png';
import irinaGolina from '@/assets/images/mentors/Irina_Golina.jpg';
import marinaIpatova from '@/assets/images/mentors/Marina_Ipatova.jpg';
import svetlanaCherepanova from '@/assets/images/mentors/Svetlana_Cherepanova.jpg';
import tatianaSimonova from '@/assets/images/mentors/Tatiana_Simonova.jpg';
import adobeAnimateAnimation from '@/assets/images/advices/adobe-animate-animation.png';
import backgroundDesign from '@/assets/images/advices/background-design.png';
import harmonyAnimation from '@/assets/images/advices/harmony-animation.png';
import harmonyForTeensAnimation from '@/assets/images/advices/harmony-for-teens-animation.png';
import paperlessAnimation from '@/assets/images/advices/paperless-animation.png';

import harmony from '@/assets/harmony.png';
import harmony_blue from '@/assets/harmony_blue.png';
import storyboardPro from '@/assets/svg/storyboardPro.svg';
import adobeAnimate from '@/assets/svg/adobeAnimate.svg';
import adobePhotoshop from '@/assets/svg/adobePhotoshop.svg';

type TClass = {
    [key: string]: IClass;
};
type IList = {
    [key: string]: ICourse;
};

enum EClass {
    basic = 'Basic',
    advanced = 'Advanced',
    expert = 'Expert',
    professional = 'Professional',
    partOne = 'Part 1',
    partTwo = 'Part 2',
    partThree = 'Part 3',
    partFour = 'Part 4',
}
enum EClass_ru {
    basic = 'Базовый',
    advanced = 'Продвинутый',
    expert = 'Эксперт',
    professional = 'Профессионал',
    partOne = 'Блок 1',
    partTwo = 'Блок 2',
    partThree = 'Блок 3',
    partFour = 'Блок 4',
}

export enum ECategory {
    animation = 'Animation',
    story = 'Story',
    design = 'Design',
    rigging = 'Rigging',
    compositing = 'Compositing',
    aiAnimation = 'AI Animation',
}
export enum ECategory_ru {
    animation = 'Анимация',
    story = 'Стори',
    design = 'Дизайн',
    rigging = 'Риггинг',
    compositing = 'Композитинг',
    aiAnimation = 'ИИ Анимация',
}

export interface IClass {
    category: ECategory | ECategory_ru;
    name: string;
    href: string;
    description: string | null;
    duration: string;
    price: {
        individual: string | null;
        group: string | null;
    };
    isOpen: {
        individual: boolean;
        group: boolean;
    };
    cover: StaticImageData;
    mentors: {
        photo: StaticImageData;
        name: string;
        href: string;
    }[];
    software: string;
    weeks: {
        description: string | null;
        data: string[] | never[];
    };
    requirements: {
        description: string | null;
        data: string[] | never[];
    };
    result: {
        description: string | null;
        data: string[] | never[];
    };
    paymentMethods: string[];
}
export interface ICourse {
    name: string;
    category: ECategory | ECategory_ru;
    softwareLogo: StaticImageData;
    description: string;
    cover: StaticImageData;
    mentors: {
        name: string;
        photo: StaticImageData;
    }[];
    classes: {
        level: EClass | EClass_ru;
        href: string;
    }[];
}
export interface ICategory {
    id: number;
    category: string;
    description: string | null;
    courses: ICourse[];
}

export const classes: TClass = {
    'rigged-animation-basic': {
        category: ECategory.animation,
        cover: harmonyImage,
        href: 'rigged-animation-basic',
        name: '2.5D Toon Boom Harmony. Animation foundations',
        description:
            "Progress faster with expert career advisory and mentorship!\n\nDiscover what it takes to become a professional 2D animator! In this comprehensive 2.5D animation course, you'll learn how to use Toon Boom Harmony to create rigged style character animations from scratch, and be guided step by step by industry professionals who have worked on iconic animated films and TV shows.",
        duration: '12 weeks',
        price: {
            individual: '$70',
            group: '19,500 ₽ per month',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Irina Golina',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description:
                "An industry-approved curriculum to get you started in the exciting world of animation.\n\nWelcome to Animation - Level 1, a course designed specifically for beginners or those in need of a software refresher. With a total of 12 video lessons and 12 interactive meetings, this course provides a comprehensive introduction to the software and teaches you how to utilize its core tools effectively. Not only that, but you'll also delve into the exciting world of animating rigged characters.\n\nBy the end of the course, you'll have acquired the skills and knowledge necessary to create impressive demo reel pieces. It's an excellent opportunity to showcase your newfound abilities and demonstrate your talent in animation. Whether you're new to the software or simply want to brush up on your skills, this course is the perfect choice for you.",
            data: [
                'Interface',
                'Drawing tools',
                "Frame by frame animation in Harmony\nWe get to grips with the software, learning about what we'll need to know as an animator. We apply the principles of animation using both the latest tools in Harmony and the old-fashioned methods, and practice getting control over our keyframes before making some frame by frame animation ",
                'Model sheet for Harmony and how to Clean Up Effects',
                'Build introduction. Prepare character build. Simple side view for Cut out walk cycle',
                'Introduction to Cut out animation. Animating Walk',
                'Introduction to deformers. Tail animation.\nTakes you into the wonderful world of deformers using slightly more complex techniques such as overlap and follow through. We learn the fundamentals of how a character rig is put together, how to utilise the camera, build animated loops, work in space and more!',
                'Morph Rough',
                'BG in Harmony',
                'Morph Build',
                "Morph Animation & Project Organization\nWe start to apply all we have learnt so far to a functional character rig. We're focusing on quality application of the principles here, so strong posing, performance, timing and everything inbetween! We also delve into the often-overlooked art of using reference.\nNow we are introduced to full body rig to test out your action animation skills! We pose out a sequence of movement and study several different ways of moving from keys to fully inbetweened animation. We also become power users of the timeline and brush up on shortcuts. You can choose to work with 1 or 2 characters (rigs are provided, but you can build your own)",
                "Showreel\nNow we will polish your animation adn we’ll develop your ability to direct the eye, stage the acting in a 'two shot' and adding the final touches. We also cover showreel tips, using reference effectively and how to work in a studio environment.",
            ],
        },
        software: 'Toon Boom Harmony 17 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description:
                "This 2D animation for beginners course is an excellent way to start your career as an animator! Starting with the basics of animation and working your way up to much more complex projects, your mentor will guide you through fun exercises, share  modern  animation techniques, and offer insightful feedback on your work, frame by frame, to help you progress faster as an artist.\n\nYou'll be personally mentored by former Netflix, Hasbro, Adult Swim and DreamWorks artists with decades of real world experience working on TV shows.",
            data: [
                'Learn rigged transitional character animation',
                'Train on industry standard software Toon Boom Harmony',
                'Be mentored by a world-class animator',
                'Flexible study and payment options',
            ],
        },
        paymentMethods: ['PayPal', 'Direct Bank Card Payment'],
    },
};
export const classes_ru: TClass = {
    'rigged-animation-basic': {
        category: ECategory_ru.animation,
        cover: harmonyAnimation,
        href: 'rigged-animation-basic',
        name: 'Rigged animation, 1 класс',
        description:
            'Курс разработан специально для новичков,  и тех, кто нуждается в изучении нового популярного софта. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем.  Он дает всестороннее введение в программное обеспечение и научит эффективно использовать основные инструменты. Курс разработан таким образом, что во время учебного процесса вы погрузитесь в захватывающий мир профессиональной анимации и будете использовать в работе любимых персонажей из мультфильмов. К концу курса вы приобретете навыки и знания, необходимые для создания крутого и яркого портфолио. Независимо от того, являетесь ли вы новичком в программном обеспечении или просто хотите улучшить свои навыки, этот курс — идеально подойдет для вас, а наши опытыные преподаватели помогут разобраться во всем!',
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '19 500 ₽ в месяц',
        },
        isOpen: {
            individual: true,
            group: true,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
            {
                photo: marinaIpatova,
                name: 'Марина Ипатова',
                href: 'marina-ipatova',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Введение. Знакомство с программой. Общая информация про инструменты Toon Boom Harmony.',
                'Отработка поз и прочистка. Изучение инструментов, необходимых для рисования.',
                'Работа с видео, импорт и управление. Как удалить или добавить кадры. Изучение 12 принципов анимации. Учимся оприделать ключевые кадры в видео, самостоятельно создаем видео референс для вашего эффекта. ',
                'Что такое Model sheet. Особенности дизайна персонажей для Toon Boom Harmony. ',
                'Введение в риггинг, подготовка и создание билдов. Подготовка персонажа к боковой походке.',
                'Создание ключей и анимации для боковой походки, изучение цикла хотьбы. ',
                'Изучение и работа с деформерами, анимация хвостика. ',
                'Скетчевая анимация (черновая) для морфинга. Обсуждение сцены.',
                'Изучение особенностей работы с фонами в Toon Boom Harmony, подготовка собственного фона для морфинга. ',
                'Подготовка билдов, требуемых для создания морфинга, работа с библиотеками. ',
                'Организация проекта, создание анимации морфинга. ',
                'Сборка финального шоурила.',
            ],
        },
        software: 'Toon Boom Harmony Premium 17',
        requirements: {
            description: 'Курс подойдет для новичков',
            data: ['наличие компьютера с Windows 10', 'стабильный интернет', 'планшет'],
        },
        result: {
            description:
                'После прохождения курса студент соберет свое первое портфолио, познакомится с основными базовыми инструментами, необходимыми для работы в Toon Boom Harmony и может продолжить обучение во втором классе по анимации в Toon Boom Harmony, посвященному механике тела',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'rigged-animation-advanced': {
        category: ECategory_ru.animation,
        cover: harmonyAnimation,
        href: 'rigged-animation-advanced',
        name: 'Rigged animation, 2 класс',
        description:
            'Курс предназначен для того, чтобы поднять ваши знаний в анимации персонажей на новый уровень, обучая вас передовым концепциям и методам в Toon Boom Harmony.  Этот курс включает в общей сложности 16 видеоуроков и 16 интерактивных встреч с преподавателем. Он идеально подходит для людей, которые уже имеют некоторый опыт работы в Toon Boom Harmony и базовые знания в области анимации. На протяжении всего курса вы погрузитесь в тонкости анимации персонажей, научитесь эффективно применять передовые принципы и методы. Если вы стремитесь улучшить свои навыки анимации в профессиональных целях, например, устроиться на работу в отрасли или создать впечатляющее портфолио, этот курс идеально вам подойдет. Хотя этот курс предполагает базовое понимание программного обеспечения, он предоставит вам необходимые инструменты и знания для дальнейшего развития ваших анимационных способностей в Toon Boom Harmony. Приготовьтесь исследовать захватывающий мир продвинутой анимации персонажей!',
        duration: '4 месяца',
        price: {
            individual: '$70 за урок',
            group: '20 500 ₽ в месяц',
        },
        isOpen: {
            individual: true,
            group: true,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Поворот головы. Анатомия головы. Прорисовка головы в программе. Анимация поворота головы. Деление на слои и пеги в программе.',
                'Поворот головы. Анализ персонажа. Прорисовка ключевых кадров. Создание овершута и оверлапа. Чистка анимации и прорисовка линий. Создание ключей для анимации (практика).',
                'Поворот головы. Брейкдауны. Как создавать Tweens в программе Toon Boom Harmony.',
                'Подготовка персонажа к походке в программе Toon Boom Harmony.',
                'Анимация походки. Начинаем выстраивать ключевые позы ног. Альтернативный вариант анимации походки в программе Toon Boom Harmony.',
                'Анимация подушки. Физика движения. Обзор инструмента Morph.',
                'Анимация подушки. Второстепенные движения. Альтернативный способ анимации подушки.',
                'Анимация с использованием предметов (пропов). Динамика движения. Общие понятия. Работа с пропом. Поднятие предмета.',
                'Рисование кистей рук. Создание анимации с использованием пропов в Toon Boom Harmony.',
                'Анимация прыжка Анатомия связанная с движением. Изучение 3D пространства. ',
                'Анимация сцены прыжка, изучение действия и работа с аниматиком. Mapping (рисунок форм). Анимация в перспективе.',
                'Как сделать динамичный шот. Работа над персонажем (упрощение и ускорение своей работы). Подготовка 3D пространства.',
                'Динамичный рисунок. Анатомия человека. Финальная сцена прыжка героя. Референс для динамичных поз. Работа с Xstage.',
                'Динамичная анимация. Мужская и женская анатомия. Как поставить позу инфинитива. Как правильно скопировать объект. Изучение ключей и скетчевой анимации.',
                'Интерполяция & Velocity. Подготовка сцены и переход на двойки.',
                'Завершение работы над динамичным шотом, полиш и финальная доработка и сборка портфолио. ',
            ],
        },
        software: 'Toon Boom Harmony Premium 17',
        requirements: {
            description: 'Курс подойдет для тех, кто уже имеет навыки работы в Toon Boom Harmony',
            data: [
                'прием на курс осуществляется при наличии портфолио, если студент до этого не проходил 1 класс',
                'наличие компьютера с Windows 10',
                'стабильный интернет',
                'планшет',
            ],
        },
        result: {
            description:
                'После прохождения курса студент улучшит качество персонажной анимации, научится работать с 3D пространством и изучит механику тела. Соберет портфолио на основе лучших работ, кототорое поможет при устройстве на работу в анимационную 2D студию и может продолжить обучение в третьем классе, посвященному работе с эмоциями и актерской игре',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'rigged-animation-expert': {
        category: ECategory_ru.animation,
        cover: harmonyAnimation,
        href: 'rigged-animation-expert',
        name: 'Rigged animation, 3 класс',
        description:
            'Курс разработан для того, чтобы изучить основные принципы работы с эмоциями и актерской игрой в анимации. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. Он позволяет сконцентрироваться на более тонких моментах лицевой анимации, и донести до зрителя чувства и эмоции персонажа. На курсе также будет уделено особое внимание полишу анимации, работе с движением волосы, одежды. Если вы стремитесь улучшить свои навыки лицевой анимации в профессиональных целях, например, обновить портфолио или болеее детально изучить работу с антропоморфными существами, этот курс идеально вам подойдет.  ',
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '21 500 ₽ в месяц',
        },
        isOpen: {
            individual: true,
            group: true,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Монолог. Монолог-введение в курс. Липсинк.',
                'Монолог. Планирование анимации.',
                'Монолог. Актерская игра.',
                'Монолог. Эмоции. Изучение AutoLipsync / Lipsync. ',
                'Работа с антропомофрным персонажем, поиск референсов.',
                'Антропоморф. Ключевые позы. Анимация динамического диалога. Деление сложного рта.',
                'Антропоморф. Особенности анимирования губ, лица.',
                'Антропоморф. Взаимосвязь тела, головы, глаз.',
                'Антропоморф. Эмоциональная поза лица, детали.',
                'Диалог. Композиция / Анимация диалога.',
                'Диалог. Монтаж и Камера / Анимация диалога.',
                'Диалог. Камера в анимации / Анимация диалога.',
            ],
        },
        software: 'Toon Boom Harmony Premium 17',
        requirements: {
            description: 'Курс подойдет для тех, кто уже имеет навыки работы в Toon Boom Harmony',
            data: [
                'прием на курс осуществляется при наличии портфолио, если студент до этого не проходил 2 класс',
                'наличие компьютера с Windows 10',
                'стабильный интернет',
                'планшет',
            ],
        },
        result: {
            description:
                'После прохождения курса студент улучшит знания в работе с эмоциями, липсингами и актерской игре, научится передавать основные чувства и эмоции изрителю. Соберет профессиональное портфолио на основе лучших работ, кототорое поможет при устройстве на работу в анимационную 2D студию и может продолжить обучение в четвертом классе, посвященному работе над собственными мультфильмом',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'rigged-animation-professional': {
        category: ECategory_ru.animation,
        cover: harmonyAnimation,
        href: 'rigged-animation-professional',
        name: 'Rigged animation, 4 класс',
        description:
            'Курс предназначен для того, чтобы обучится профессиональному подходу в создании собственного мультфильма, и поднять ваши знаний в анимации персонажей на новый уровень, обучая вас передовым концепциям и методам в Toon Boom Harmony.  Этот курс включает в общей сложности 16 видеоуроков и 16 интерактивных встреч с преподавателем. Он идеально подходит для людей, которые уже имеют опыт работы в Toon Boom Harmony и крепкие знания в области анимации. На протяжении всего курса вы будете закреплять полученные ранее материалы, добавляя новые знания из профессиональной студийной работы и пейплайна. Научитесь правильно организовывать весь процесс создания мобственного короткого мультфильма с нуля. Если вы стремитесь улучшить свои навыки анимации в профессиональных целях, например, создать свой собственный короткий метр или сериал, этот курс идеально вам подойдет. ',
        duration: '4 месяца',
        price: {
            individual: '$70 за урок',
            group: '22 500 ₽ в месяц',
        },
        isOpen: {
            individual: true,
            group: true,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
            {
                photo: marinaIpatova,
                name: 'Марина Ипатова',
                href: 'marina-ipatova',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Разработка концепции, создание аниматика (наброски первых идей), сбор референсов, подбор ригов и фонов, подходящих под проект. ',
                'Внесение исправлений в скетчки, добавление динамики и действий. Обсуждение экшен сцен. Наращивание активных действий в стиле анимационного мультфильма, придача динамичности, живости и визуальной насыщенности. ',
                'Организация проекта, сбор папок, изучение производственного нейминга. Подготовка темплейтов персонажей, первые тесты камеры.',
                'Обрабатываем фон, изучаем 3D пространство. Выбираем для себя Simple Multiplane или Origami style в фонах. ',
                'Готовим финальный скетч. Перерабатываем зарисовки в финальные скетчи. Изучаем Shift and Trace, работаем с ХSheet.',
                'Создаем ключевые кадры. Вносим исправления в скетчи начинаем и начинаем работать над ключевыми позами. Делаем ставку на Special poses, проверяем есть ли необходимость в технических изменениях билдов. Могут ли билды “встать в те позы”, которые были запланированы.',
                'Внесение необходимых исправлений в билды. Проверка Special poses.',
                'Переходим на "двойки". Используем знания, полученные в 3м классе по созданию твинов и перехода на финальную анимацию. Изучаем кривую Бизье. ',
                'Полишуем ключи и выставляем недостающие. Практика. ',
                'Работаем с промежуточными кадрами. Изучаем такие понятия как: Smears, Phantoms, Multiplications and Distrots.',
                'Oбсуждаем инструмент Mesh Wrap, который поможет создать интересные промежуточные кадры.',
                'Добавляем второстепенные движения (моргания, дрожжание зрачков и т.д.), учимся работать с overshoots, overlaps, follow through and dragging motions. ',
                'Oбсуждаем камеру, продумываем композиционную организацию в сценах и обсуждаем референсы эффектов, освещения. Рассматриваем визуальную обработку сцены, исследуем техническую сторону эффектов и пропов.  ',
                'Oбсуждаем рисованные эффекты на примере взрывов, огня, воды, молнии',
                'Работаем над созданием эффектов света и теней на персонаже, а также изучаем необходимые инструменты для работы с тенями на окружающих объектах или поверхностях.',
                'Проверка финальной сборки сцены. Обсуждение основных трендов и производства в мировых студиях.',
            ],
        },
        software: 'Toon Boom Harmony Premium 17',
        requirements: {
            description: 'Курс подойдет для тех, кто уже имеет навыки работы в Toon Boom Harmony',
            data: [
                'прием на курс осуществляется при наличии портфолио, если студент до этого не проходил 3 класс',
                'наличие компьютера с Windows 10',
                'стабильный интернет',
                'планшет',
            ],
        },
        result: {
            description:
                'После прохождения курса студент повторит все ранее изученные материалы, улучшит знания в профессиональной работе в Toon Boom Harmony, научится организации студийной работе и пейплайну. Соберет профессиональное портфолио на основе лучших работ, кототорое поможет при устройстве на работу в анимационную 2D студию и попробует себя в качестве создателя собственного мультфильма',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'paperless-animation-basic': {
        category: ECategory_ru.animation,
        cover: paperlessAnimation,
        href: 'paperless-animation-basic',
        name: 'Paperless animation, 1 класс',
        description:
            'Курс предназначен для изучения различий между традиционными методами анимации и современной техникой paperless animation. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. Он предназначен как для новичков в анимации, так и для тех, кто уже обладает некоторыми классическими знаниями, но хочет узнать больше о современных технологиях и стилях анимации. Многие анимационные студии и продюсерские компании перешли на paperless animation. Обучение paperless animation соответствует отраслевым стандартам, что делает вас более адаптируемыми и готовыми к профессиональному росту. Рaperless animation позволяет создавать широкий спектр стилей: от традиционной рисованной анимации до более изысканного цифрового стиля. s',
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '19 500 ₽ в месяц',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Знакомство с инструментами рисования и ключевыми позами',
                'Принципы покадровой анимации в технике paperless animation',
                'Изучение этапов работы в анимации',
                'Освоение работы с ключевыми кадрами',
                'Создание промежуточных кадров и использование модельных листов',
                'Второстепенные движения, амортизация, оверлап и овершут',
                '12 основных принципов анимации',
                '28 принципов анимации',
                'Изучение дополнительных принципов анимации',
                'Освоение "holds" в анимации',
                'Освоение clean-up  в paperless animation',
                'Изучение 3D камеры и пространства',
            ],
        },
        software: 'Toon Boom Harmony Premium 17',
        requirements: {
            description: 'Курс подойдет для новичков',
            data: ['наличие компьютера с Windows 10', 'стабильный интернет', 'планшет'],
        },
        result: {
            description:
                'После прохождения курса студент соберет свое первое портфолио, познакомится с основными базовыми инструментами, необходимыми для работы в Toon Boom Harmony в современной технике paperless animation и может продолжить обучение во втором классе по анимации, посвященному механике тела',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'paperless-animation-advanced': {
        category: ECategory_ru.animation,
        cover: paperlessAnimation,
        href: 'paperless-animation-advanced',
        name: 'Paperless animation, 2 класс',
        description:
            'Курс предназначен для того, что получить новые знания в области механики тела. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. По мере обучения будут затороны различные стили анимации, от суперкартуна до боевиков. Каждую неделю вы будете получать свежые знания от профессионально, работающих в индустрии. Приготовьтесь усовершенствовать свою технику и глубже раскрыть творческий потенциал Toon Boom Harmony!',
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '20 500 ₽ в месяц',
        },
        isOpen: {
            individual: true,
            group: true,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Введение в механику тела.',
                'От скетча к анимации',
                'Динамика движения. Создание эффектных скетчей ',
                'Система переиспользования различных элементов',
                'Планирование и организация анимационного процесса',
                'Динамика сцены борьбы. Создание динамичного шота.',
                'Работа с фонами и пространством в Toon Boom Harmony',
                'Внедрение в работу нескольких принципов анимации с 8 по 13 пункт',
                'Ключевые кадры, как сделать сильную позу?',
                'Curved vs. Straight Animation',
                'Полишинг анатомии. Второстепенные движения.',
                'Работа над портфолио ',
            ],
        },
        software: 'Toon Boom Harmony Premium 17',
        requirements: {
            description: 'Курс подойдет для тех, кто уже имеет навыки работы в Toon Boom Harmony',
            data: [
                'прием на курс осуществляется при наличии портфолио, если студент до этого не проходил 1 класс',
                'наличие компьютера с Windows 10',
                'стабильный интернет',
                'планшет',
            ],
        },
        result: {
            description:
                'После прохождения курса студент улучшит качество рисванной персонажной анимации и анимации животных, научится работать с 3D пространством и камерой и изучит механику тела персонажа. Соберет портфолио на основе лучших работ, кототорое поможет при устройстве на работу в анимационную 2D студию и может продолжить обучение в третьем классе, посвященному работе с эмоциями и актерской игре',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'paperless-animation-expert': {
        category: ECategory_ru.animation,
        cover: paperlessAnimation,
        href: 'paperless-animation-expert',
        name: 'Paperless animation, 3 класс',
        description:
            'Курс разработан для того, чтобы изучить основные принципы работы с эмоциями и актерской игрой в анимации, используя все возможности техники paperless animation. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. Он позволяет сконцентрироваться на основных моментах работы с чувствами и эмоциями. Если вы стремитесь улучшить свои навыки лицевой анимации в профессиональных целях, например, обновить портфолио или болеее детально изучить работу с антропоморфными существами, рисуя их, этот курс идеально вам подойдет.  ',
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '21 500 ₽ в месяц',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Эмоции.',
                'Эмоции.',
                'Монолог. Rough Animation.',
                'Монолог. KeyPoses.',
                'Монолог. Secondary Actions.',
                'Монолог. In-betweens.',
                'Антропоморф.',
                'Стиль Тартаковского.',
                'Работа с камерой.',
                'Композиция.',
                'Ткани и их свойства. Часть 1.',
                'Ткани и их взаимодействие. Часть 2.',
            ],
        },
        software: 'Toon Boom Harmony Premium 17',
        requirements: {
            description: 'Курс подойдет для тех, кто уже имеет навыки работы в Toon Boom Harmony',
            data: [
                'прием на курс осуществляется при наличии портфолио, если студент до этого не проходил 2 класс',
                'наличие компьютера с Windows 10',
                'стабильный интернет',
                'планшет',
            ],
        },
        result: {
            description:
                'После прохождения курса студент улучшит знания в работе с эмоциями, липсингами и актерской игре, научится передавать основные чувства и эмоции изрителю. Соберет профессиональное портфолио на основе лучших работ, кототорое поможет при устройстве на работу в анимационную 2D студию и может продолжить обучение в четвертом классе, посвященному работе над собственной небольшой сценкой, с использованием различных эффектов, анимации животных и людей',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'paperless-animation-professional': {
        category: ECategory_ru.animation,
        cover: paperlessAnimation,
        href: 'paperless-animation-professional',
        name: 'Paperless animation, 4 класс',
        description:
            'Курс предназначен для того, чтобы обучится профессиональному подходу в создании собственого короткого мультфильма. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. Он идеально подходит для людей, которые уже имеют опыт работы в Toon Boom Harmony и крепкие знания в области анимации в технике paperless animation. На протяжении всего курса вы будете закреплять полученные ранее материалы, добавляя новые знания из профессиональной студийной работы и пейплайна. Научитесь правильно организовывать весь процесс создания собственного короткого мультфильма с нуля. ',
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '22 500 ₽ в месяц',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Videoboard. Движение камеры.',
                'Профессия «Layout-Backgrounder».',
                'Профессия «Keyposer».',
                'Профессия «Clean-up Artist».',
                'Digital Animation.',
                'Effects Animation.',
                'Анимация воды.',
                'Анимация огня.',
                'Анимация птиц.',
                'Дополнительная подготовка.',
                'Дополнительная подготовка.',
                'Дополнительная подготовка, создание шоурила.',
            ],
        },
        software: 'Toon Boom Harmony Premium 17',
        requirements: {
            description: 'Курс подойдет для тех, кто уже имеет навыки работы в Toon Boom Harmony',
            data: [
                'прием на курс осуществляется при наличии портфолио, если студент до этого не проходил 3 класс',
                'наличие компьютера с Windows 10',
                'стабильный интернет',
                'планшет',
            ],
        },
        result: {
            description:
                'После прохождения курса студент закрепит полученные ранее знания  в работе с персонажной анимацией и на основе собственной небольшой истории соберет достойные работы в портфолио. ',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'cartoon-animation-basic': {
        category: ECategory_ru.animation,
        cover: adobeAnimateAnimation,
        href: 'cartoon-animation-basic',
        name: 'Сartoon animation, 1 класс',
        description:
            'Курс предназначен для того, чтобы изучить разнообразные аспекты анимации Cut-out. Вы научитесь эффективно подготавливать материалы и персонажей к работе, используя векторные линии. Мы обучим вас техникам работы, позволяющим сохранять высокое качество анимации при максимальной скорости выполнения. Вы узнаете, на что следует делать акцент в процессе работы. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. В ходе курса будут рассмотрены различные направления, в которых используется анимации, созданная в Adobe Animate: игровая индустрия, интернет-проекты и телесериалы. Мы рассмотрим различные техники и стили в рамках Cut-out, в будущем, это позволит  вам расширить свой кругозор и выбрать наиболее интересное направление для дальнейшего изучения.',
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '19 500 ₽ в месяц',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Введение в курс.',
                '12 принципов анимации. Введение в Adobe Animate. Виды дизайна персонажей и анимации . Ключевые моменты при анимации в Adobe Animate.',
                'Рисуем в Animate линии, формы, силуэты и позы. Планирование в Animate. Ключевые моменты (памятка).',
                'Рисуем руки в Adobe Animate. Растяжение и сжатие в программе . Adobe Animate: реклама, кино, сериалы.',
                'Регистрационные точки. Процесс запаздывания деталей в анимации. Эффект деформации деталей.',
                'Анимация Cartoon, как создается, ее стилистика. Походка в Adobe Animate.',
                'Ошибки анимации в мультфильмах. Нестандартная походка в Adobe Animate.',
                'Нестандартные персонажи. Анимируем Goofy Chars. Глаза и выражения лица в Adobe Animate.',
                'Clean up. Работа с линиями в анимации. Диалог.',
                'Morf во флеш-анимации. Как сделать эффекты в Adobe Animate.',
                'Overlap и Hold - растягивание движения (запоздание) и остановка. Эффекты в Adobe Animate.',
                'Комбинация двух стилей Cutouts & Classic animation Система работы Easy In/ Easy out. Как улучшить перекладную анимацию.',
            ],
        },
        software: 'Adobe Animate 2020',
        requirements: {
            description: 'Курс подойдет для новичков',
            data: ['наличие компьютера с Windows 10', 'стабильный интернет', 'планшет'],
        },
        result: {
            description:
                'После прохождения курса студент соберет свое первое портфолио в картунной стилистике, познакомится с основными базовыми инструментами, необходимыми для работы в Abode Animate и может продолжить обучение во втором классе по анимации, посвященному механике тела',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'cartoon-animation-advanced': {
        category: ECategory_ru.animation,
        cover: adobeAnimateAnimation,
        href: 'cartoon-animation-advanced',
        name: 'Сartoon animation, 2 класс',
        description:
            'Курс предназначен для того, чтобы обучится механике тела с использованием Cut-out. Вы научитесь эффективно подготавливать материалы и комплексных персонажей к работе, используя современные студийные подходы Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. В ходе курса вы сможете сконцентрироваться на механике тела и различных второстепенных движениях, придающих яркость и уникальность вашей анимации. Если вы стремитесь улучшить свои навыки анимации в профессиональных целях, например, устроиться на работу в отрасли или создать впечатляющее портфолио, этот курс идеально вам подойдет.',
        duration: '2 месяца',
        price: {
            individual: '$70 за урок',
            group: '20 500 ₽ в месяц',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Концепция создания игр в Adobe Animate. Анимация для презентаций.',
                'Работа с Shape-twine. Анимация фонов в Adobe Animate.',
                'Работа с камерой. Игры в Adobe Animate.',
                'Правило работы с планами. Супер-крупный план. (Extreme Close up). Подготовка анимации для Android и Apple.',
                'Работа на фрилансе. Работа в студиях. Опыт работы. Коммуникация в студиях.',
                'Создание графики в игре и вопросы по движению камеры. План построения графики игры. Дизайн объекта.',
                'Детальная проработка дизайна объекта. Детальная проработка дизайна. Как создавать материалы. Роль аниматора в индустрии игр. Создание дизайна объекта.',
                'Анимация рук в Adobe Animate. Структура руки. Анализ построения руки. Рука в форме круга. Силуэт руки.',
            ],
        },
        software: 'Adobe Animate 2020',
        requirements: {
            description: 'Курс подойдет для тех, кто уже имеет навыки работы в Adobe Animate',
            data: [
                'прием на курс осуществляется при наличии портфолио, если студент до этого не проходил 1 класс',
                'наличие компьютера с Windows 10',
                'стабильный интернет',
                'планшет',
            ],
        },
        result: {
            description:
                'После прохождения курса студент улучшит качество персонажной анимации, изучит механику тела. Соберет портфолио на основе лучших работ, кототорое поможет при устройстве на работу в анимационную 2D студию и может продолжить обучение в третьем классе, посвященному работе с эмоциями и актерской игре',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'cartoon-animation-expert': {
        category: ECategory_ru.animation,
        cover: adobeAnimateAnimation,
        href: 'cartoon-animation-expert',
        name: 'Сartoon animation, 3 класс',
        description:
            'Курс предназначен для того, чтобы обучится лицевой анимации и актерской игре, используя современные подходы в Cut-out. Вы научитесь передавать чувства и эмоции, понятные зрителю, усиливая их и дорабатывая, с использованием современных студийных подходов. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. В ходе курса вы сможете сконцентрироваться на актерской игре и отыгрышах.  Если вы стремитесь улучшить свои навыки анимации в профессиональных целях, например, устроиться на работу в отрасли или создать впечатляющее портфолио, этот курс идеально вам подойдет.',
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '21 500 ₽ в месяц',
        },
        isOpen: {
            individual: true,
            group: true,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Введение в курс.',
                'Правильное деление персонажа, правильный timing, анимация под звук.',
                'Правильное деление персонажа, правильный timing, анимация под звук.',
                'Позы при диалоге. Overshoots. Breakdowns.',
                'Как делать персонажа более мягким. В чем разница между Snap Animation и Cartoon Animation',
                'Как работать с персонажами с утрированной анатомией.',
                'Как применять сжатие и растяжение на персонаже и при этом не потерять форму.',
                'Почему Animate наиболее удобная программа для Super Cartoon анимации.',
                'Продвинутая механика движения.',
                'Bouncing hips, Shape change, lead and follow.',
                'Polish Body Mech.',
                'Фабрика сериалов.',
            ],
        },
        software: 'Adobe Animate 2020',
        requirements: {
            description: 'Курс подойдет для тех, кто уже имеет навыки работы в Adobe Animate',
            data: [
                'прием на курс осуществляется при наличии портфолио, если студент до этого не проходил 2 класс',
                'наличие компьютера с Windows 10',
                'стабильный интернет',
                'планшет',
            ],
        },
        result: {
            description:
                'После прохождения курса студент улучшит знания в работе с эмоциями, липсингами и актерской игре, научится передавать основные чувства и эмоции изрителю. Соберет профессиональное портфолио на основе лучших работ, кототорое поможет при устройстве на работу в анимационную 2D студию ',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'background-design-partone': {
        category: ECategory_ru.design,
        cover: backgroundDesign,
        href: 'background-design-basic',
        name: 'Дизайн фонов окружения. Блок 1. Город, растительность и ландшафты',
        description: null,
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '20 000 ₽ в месяц',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Shape and Space (монохормный набросок).',
                'Form, перспектива.',
                'Текстура.',
                'Светотень.',
                'Цвет.',
                'Основы.',
                'Композиция. Как придать рисунку глубину.',
                'Освещение и цвет. Придаём рисунку характер.',
                'Освещение и цвет. Техника работы.',
                'Способы прорисовки. Практика.',
                'Практика.',
                'Практика и доработка.',
            ],
        },
        software: 'Adobe Photoshop 2020',
        requirements: {
            description:
                'Блок подойдет как для новичков, желающих научится разрабатывать дизайны фонов, так и для работающих профессионалов, желающих улучшить свои навыки и прокачать портфолио',
            data: ['наличие компьютера с Windows 10', 'стабильный интернет', 'планшет'],
        },
        result: {
            description:
                'После завершения курса студент получит понимание, как приступать к визуальной разработке окружения растительности и ландшафтов. Научится основам разработке локаций городского типа, объединенных общей темой и стилем, а также – работе с тоном, цветом и светом. Соберет 2 качественные работы, которые можно будет положить в свое портфолио',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'background-design-parttwo': {
        category: ECategory_ru.design,
        cover: backgroundDesign,
        href: 'background-design-advanced',
        name: 'Дизайн фонов окружения. Блок 2. Постройки и здания, дизайн интерьера и внутренних помещений',
        description: null,
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '20 000 ₽ в месяц',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Наружный дизайн.',
                'Перспектива.',
                'Способ работы.',
                'Проработка деталей.',
                'Композиция цветом.',
                'Хороший дизайн.',
                'Проработка деталей.',
                'Перспектива.',
                'Работа с цветом.',
                'Текстуры.',
                'Практика.',
                'Практика и доработка.',
            ],
        },
        software: 'Adobe Photoshop 2020',
        requirements: {
            description:
                'Блок подойдет как для новичков, желающих научится разрабатывать дизайны фонов, так и для работающих профессионалов, желающих улучшить свои навыки и прокачать портфолио',
            data: ['наличие компьютера с Windows 10', 'стабильный интернет', 'планшет'],
        },
        result: {
            description:
                'После завершения курса студент получит понимание, как приступать к визуальной разработке интерьеров и экстерьеров. Научится основам разработке различных построек и зданий, объединенных общей темой и стилем, а также – работе с тоном, цветом и светом. Соберет 2 качественные работы, которые можно будет положить в свое портфолио',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'background-design-partthree': {
        category: ECategory_ru.design,
        cover: backgroundDesign,
        href: 'background-design-expert',
        name: 'Дизайн фонов окружения. Блок 3. Транспорт и средства передвижения. Скалы и пещеры',
        description: null,
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '20 000 ₽ в месяц',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: irinaGolina,
                name: 'Ирина Голина-Сагателиан',
                href: 'irina-golina',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Средства передвижения. Часть 1.',
                'Средства передвижения. Часть 2.',
                'Как создать дизайн на века.',
                'Цвет.',
                'Текстура vs Детализация',
                'Пещеры. Часть 1.',
                'Пещеры. Часть 2.',
                'Свет.',
                'Цвет и покраска, текстуры.',
                'Цвет и покраска, текстуры. Практика.',
                'Практика.',
                'Практика и доработка.',
            ],
        },
        software: 'Adobe Photoshop 2020',
        requirements: {
            description:
                'Блок подойдет как для новичков, желающих научится разрабатывать дизайны фонов, так и для работающих профессионалов, желающих улучшить свои навыки и прокачать портфолио',
            data: ['наличие компьютера с Windows 10', 'стабильный интернет', 'планшет'],
        },
        result: {
            description:
                'После завершения курса студент получит понимание, как приступать к визуальной разработке транспортных средств, как подходить к поиску референсов и сборку необходимых материалов. Научится основам разработке локаций скалистых мест и пещер, объединенных общей темой и стилем, а также – работе с тоном, цветом и светом. Соберет 2 качественные работы, которые можно будет положить в свое портфолио',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
    'for-teens-animation-basic': {
        category: ECategory_ru.animation,
        cover: harmonyForTeensAnimation,
        href: 'for-teens-animation-basic',
        name: 'Курс по анимации для подростков',
        description:
            'Курс разработан специально для новичков, желающих попробовать работу аниматора и создать свою первую небольшую работу. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. Он дает всестороннее введение в программное обеспечение и обучает эффективно использовать основные инструменты. Курс разработан таким образом, что во время учебного процесса вы погрузитесь в захватывающий мир анимации и будете использовать в работе любимых персонажей из аниме и популярных мультфильмов. ',
        duration: '3 месяца',
        price: {
            individual: '$70 за урок',
            group: '15 000 ₽ в месяц',
        },
        isOpen: {
            individual: false,
            group: false,
        },
        mentors: [
            {
                photo: marinaIpatova,
                name: 'Марина Ипатова',
                href: 'marina-ipatova',
            },
        ],
        weeks: {
            description: null,
            data: [
                'Введение. Знакомство с программой. Общая информация про инструменты Toon Boom Harmony. Рисуем 5 разных эмоций.',
                'Отработка поз и прочистка 5 эмоций. Изучение инструментов, необходимых для рисования. ',
                'Разрабатываем собственного персонажа, учимся адаптировать риги для работы. Изучаем modelsheet.',
                'Создаем свой собственный боковой риг персонажа. Подготовка к походке.',
                'Учимся делать походку персонажей, изучаем ключевые позы.',
                'Изучаем деформеры и пеги, создаем свой небольшой риг.',
                'Тренируем арки и делаем прыжок персонажа.Разбираемся что такое сквош и стрейч.',
                'Самостоятельно собираем риг в 3/4 и делаем отрисовку базовых ртов.',
                'На примере любимого аниме персонажа ищем хороший реф и рисуем скетчевую анимацию короткой эмоциональной сценки.',
                'Изучаем работу с камерой и фонами.',
                'Изучаем эффекты, светяшки, тени если необходимо, усиливаем сцену.',
                'Учимся делать рендеры в разных форматах под ютуб, под разные соц сети, как оформить свой пост, даем готовые шаблоны и хештеги. ',
            ],
        },
        software: 'Toon Boom Harmony Premium 17',
        requirements: {
            description:
                'Курс подойдет для новичков, желающих на примере любимых персонажей из аниме и популярных мультфильмов получить начальные знания в Toon Boom Harmony',
            data: ['наличие компьютера с Windows 10', 'стабильный интернет', 'планшет'],
        },
        result: {
            description:
                'После завершения курса студент приобретет навыки и знания, необходимые для создания небольших простых сценок. Этот курс идеально подойдет тем, кто хочет узнать как создаются мультфильмы, но пока не оприделился с профессией. В рамках курса мы рассмотрим и отрисовку, риги и анимацию, эффекты и сборку сцены, тем самым вы сможете попробовать себя в нескольких профессиях и узнать работают крупные студии.',
            data: [],
        },
        paymentMethods: ['Перевод на карту', 'PayPal', 'crypto wallet'],
    },
};

export const courses: IList = {
    'rigged-animation': {
        cover: harmonyImage,
        name: '2.5D Toon Boom Harmony. Animation foundations',
        category: ECategory.animation,
        softwareLogo: harmony_blue,
        description:
            "Progress faster with expert career advisory and mentorship!\n\nDiscover what it takes to become a professional 2D animator! In this comprehensive 2.5D animation course, you'll learn how to use Toon Boom Harmony to create rigged style character animations from scratch, and be guided step by step by industry professionals who have worked on iconic animated films and TV shows.",
        mentors: [
            {
                name: 'Irina Golina',
                photo: irinaGolina,
            },
        ],
        classes: [
            {
                level: EClass.basic,
                href: 'harmony-animation-basic',
            },
        ],
    },
};
export const courses_ru: IList = {
    'rigged-animation': {
        cover: harmonyAnimation,
        name: 'Rigged animation',
        category: ECategory_ru.animation,
        softwareLogo: harmony_blue,
        description:
            'Развивайтесь быстрее благодаря экспертным карьерным консультациям и наставничеству!\n\nУзнайте, что нужно, чтобы стать профессиональным 2D-аниматором! В этом комплексном курсе по 2.5D-анимации вы узнаете, как использовать Toon Boom Harmony для создания анимации персонажей в строгом стиле с нуля, и будете шаг за шагом получать руководство от профессионалов отрасли, которые работали над культовыми анимационными фильмами и телешоу.',
        mentors: [
            {
                name: 'И. Голина',
                photo: irinaGolina,
            },
            {
                photo: marinaIpatova,
                name: 'М. Ипатова',
            },
        ],
        classes: [
            {
                level: EClass_ru.basic,
                href: 'rigged-animation-basic',
            },
            {
                level: EClass_ru.advanced,
                href: 'rigged-animation-advanced',
            },
            {
                level: EClass_ru.expert,
                href: 'rigged-animation-expert',
            },
            {
                level: EClass_ru.professional,
                href: 'rigged-animation-professional',
            },
        ],
    },
    'paperless-animation': {
        cover: paperlessAnimation,
        name: 'Paperless animation',
        category: ECategory_ru.animation,
        softwareLogo: harmony_blue,
        description: 'Комплексный курс по Paperless анимации',
        mentors: [
            {
                name: 'И. Голина',
                photo: irinaGolina,
            },
        ],
        classes: [
            {
                level: EClass_ru.basic,
                href: 'paperless-animation-basic',
            },
            {
                level: EClass_ru.advanced,
                href: 'paperless-animation-advanced',
            },
            {
                level: EClass_ru.expert,
                href: 'paperless-animation-expert',
            },
            {
                level: EClass_ru.professional,
                href: 'paperless-animation-professional',
            },
        ],
    },
    'cartoon-animation': {
        cover: adobeAnimateAnimation,
        name: 'Сartoon animation',
        category: ECategory_ru.animation,
        softwareLogo: adobeAnimate,
        description: 'Комплексный курс по Сartoon анимации в Adobe Animate',
        mentors: [
            {
                name: 'И. Голина',
                photo: irinaGolina,
            },
        ],
        classes: [
            {
                level: EClass_ru.basic,
                href: 'adobe-animate-animation-basic',
            },
            {
                level: EClass_ru.advanced,
                href: 'adobe-animate-animation-advanced',
            },
            {
                level: EClass_ru.expert,
                href: 'adobe-animate-animation-expert',
            },
        ],
    },
    'background-design': {
        cover: backgroundDesign,
        name: 'Дизайн фонов',
        category: ECategory_ru.design,
        softwareLogo: adobePhotoshop,
        description: 'Комплексный курс по дизайну фонов окружения',
        mentors: [
            {
                name: 'И. Голина',
                photo: irinaGolina,
            },
        ],
        classes: [
            {
                level: EClass_ru.partOne,
                href: 'background-design-partone',
            },
            {
                level: EClass_ru.partTwo,
                href: 'background-design-parttwo',
            },
            {
                level: EClass_ru.partThree,
                href: 'background-design-partthree',
            },
        ],
    },
    'for-teens-animation': {
        cover: harmonyForTeensAnimation,
        name: 'Курс по анимации для подростков',
        category: ECategory_ru.animation,
        softwareLogo: harmony_blue,
        description:
            'Курс разработан специально для новичков, желающих попробовать работу аниматора и создать свою первую небольшую работу. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. Он дает всестороннее введение в программное обеспечение и обучает эффективно использовать основные инструменты. Курс разработан таким образом, что во время учебного процесса вы погрузитесь в захватывающий мир анимации и будете использовать в работе любимых персонажей из аниме и популярных мультфильмов. ',
        mentors: [
            {
                name: 'М. Ипатова',
                photo: marinaIpatova,
            },
        ],
        classes: [
            {
                level: EClass_ru.basic,
                href: 'for-teens-animation-basic',
            },
        ],
    },
};

export const categories: ICategory[] = [
    {
        id: 1,
        category: 'Animation',
        description: null,
        courses: [courses['rigged-animation']],
    },
    {
        id: 2,
        category: 'Story',
        description: null,
        courses: [],
    },
    {
        id: 3,
        category: 'Design',
        description: null,
        courses: [],
    },
    {
        id: 4,
        category: 'Rigging',
        description: null,
        courses: [],
    },
    {
        id: 5,
        category: 'Compositing',
        description: null,
        courses: [],
    },
    // {
    //     id: 6,
    //     category: 'AI Animation',
    //     description: null,
    //     courses: [],
    // },
];
export const categories_ru: ICategory[] = [
    {
        id: 1,
        category: 'Анимация',
        description: null,
        courses: [
            courses_ru['rigged-animation'],
            courses_ru['paperless-animation'],
            courses_ru['cartoon-animation'],
            courses_ru['for-teens-animation'],
        ],
    },
    {
        id: 2,
        category: 'Дизайн',
        description: null,
        courses: [courses_ru['background-design']],
    },
    {
        id: 3,
        category: 'Стори',
        description: null,
        courses: [],
    },
    {
        id: 4,
        category: 'Риггинг',
        description: null,
        courses: [],
    },
    {
        id: 5,
        category: 'Композитинг',
        description: null,
        courses: [],
    },
    // {
    //     id: 6,
    //     category: 'ИИ Анимация',
    //     description: null,
    //     courses: [],
    // },
];
