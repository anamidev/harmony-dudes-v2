import harmonyImage from '@/assets/svg/harmony.svg';
import { StaticImageData } from 'next/image';
import pashaPotekhin from '@/assets/images/mentors/Pasha_Potekhin.png';
import irinaGolina from '@/assets/images/mentors/Irina_Golina.jpg';
import marinaIpatova from '@/assets/images/mentors/Marina_Ipatova.jpg';
import svetlanaCherepanova from '@/assets/images/mentors/Svetlana_Cherepanova.jpg';
import tatianaSimonova from '@/assets/images/mentors/Tatiana_Simonova.jpg';

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
}
enum EClass_ru {
    basic = 'Класс 1',
    advanced = 'Класс 2',
    expert = 'Класс 3',
    professional = 'Класс 4',
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
    price: string;
    isOpen: boolean;
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
    'harmony-animation-basic': {
        category: ECategory.animation,
        cover: harmonyImage,
        href: 'harmony-animation-basic',
        name: '2.5D Toon Boom Harmony. Animation foundations',
        description:
            "Progress faster with expert career advisory and mentorship!\n\nDiscover what it takes to become a professional 2D animator! In this comprehensive 2.5D animation course, you'll learn how to use Toon Boom Harmony to create rigged style character animations from scratch, and be guided step by step by industry professionals who have worked on iconic animated films and TV shows.",
        duration: '12 weeks',
        price: '19,500 ₽ per month',
        isOpen: false,
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
    'harmony-animation-basic': {
        category: ECategory_ru.animation,
        cover: harmonyImage,
        href: 'harmony-animation-basic',
        name: 'Анимация в Toon Boom Harmony, 1 класс',
        description:
            'Курс разработан специально для новичков,  и тех, кто нуждается в изучении нового популярного софта. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем.  Он дает всестороннее введение в программное обеспечение и научит эффективно использовать основные инструменты. Курс разработан таким образом, что во время учебного процесса вы погрузитесь в захватывающий мир профессиональной анимации и будете использовать в работе любимых персонажей из мультфильмов. К концу курса вы приобретете навыки и знания, необходимые для создания крутого и яркого портфолио. Независимо от того, являетесь ли вы новичком в программном обеспечении или просто хотите улучшить свои навыки, этот курс — идеально подойдет для вас, а наши опытыные преподаватели помогут разобраться во всем!',
        duration: '3 месяца',
        price: '19 500 ₽ в месяц',
        isOpen: true,
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
    'harmony-animation-advanced': {
        category: ECategory_ru.animation,
        cover: harmonyImage,
        href: 'harmony-animation-advanced',
        name: 'Анимация в Toon Boom Harmony, 2 класс',
        description:
            'Курс предназначен для того, чтобы поднять ваши знаний в анимации персонажей на новый уровень, обучая вас передовым концепциям и методам в Toon Boom Harmony.  Этот курс включает в общей сложности 16 видеоуроков и 16 интерактивных встреч с преподавателем. Он идеально подходит для людей, которые уже имеют некоторый опыт работы в Toon Boom Harmony и базовые знания в области анимации. На протяжении всего курса вы погрузитесь в тонкости анимации персонажей, научитесь эффективно применять передовые принципы и методы. Если вы стремитесь улучшить свои навыки анимации в профессиональных целях, например, устроиться на работу в отрасли или создать впечатляющее портфолио, этот курс идеально вам подойдет. Хотя этот курс предполагает базовое понимание программного обеспечения, он предоставит вам необходимые инструменты и знания для дальнейшего развития ваших анимационных способностей в Toon Boom Harmony. Приготовьтесь исследовать захватывающий мир продвинутой анимации персонажей!',
        duration: '4 месяца',
        price: '20 500 ₽ в месяц',
        isOpen: true,
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
    'harmony-animation-expert': {
        category: ECategory_ru.animation,
        cover: harmonyImage,
        href: 'harmony-animation-expert',
        name: 'Анимация в Toon Boom Harmony, 3 класс',
        description:
            'Курс разработан для того, чтобы изучить основные принципы работы с эмоциями и актерской игрой в анимации. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. Он позволяет сконцентрироваться на более тонких моментах лицевой анимации, и донести до зрителя чувства и эмоции персонажа. На курсе также будет уделено особое внимание полишу анимации, работе с движением волосы, одежды. Если вы стремитесь улучшить свои навыки лицевой анимации в профессиональных целях, например, обновить портфолио или болеее детально изучить работу с антропоморфными существами, этот курс идеально вам подойдет.  ',
        duration: '3 месяца',
        price: '21 500 ₽ в месяц',
        isOpen: true,
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
    'harmony-animation-professional': {
        category: ECategory_ru.animation,
        cover: harmonyImage,
        href: 'harmony-animation-professional',
        name: 'Анимация в Toon Boom Harmony, 4 класс',
        description:
            'Курс предназначен для того, чтобы обучится профессиональному подходу в создании собственного мультфильма, и поднять ваши знаний в анимации персонажей на новый уровень, обучая вас передовым концепциям и методам в Toon Boom Harmony.  Этот курс включает в общей сложности 16 видеоуроков и 16 интерактивных встреч с преподавателем. Он идеально подходит для людей, которые уже имеют опыт работы в Toon Boom Harmony и крепкие знания в области анимации. На протяжении всего курса вы будете закреплять полученные ранее материалы, добавляя новые знания из профессиональной студийной работы и пейплайна. Научитесь правильно организовывать весь процесс создания мобственного короткого мультфильма с нуля. Если вы стремитесь улучшить свои навыки анимации в профессиональных целях, например, создать свой собственный короткий метр или сериал, этот курс идеально вам подойдет. ',
        duration: '4 месяца',
        price: '22 500 ₽ в месяц',
        isOpen: true,
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
        cover: harmonyImage,
        href: 'paperless-animation-basic',
        name: 'Paperless animation, 1 класс',
        description:
            'Курс предназначен для изучения различий между традиционными методами анимации и современной техникой paperless animation. Этот курс включает в общей сложности 12 видеоуроков и 12 интерактивных встреч с преподавателем. Он предназначен как для новичков в анимации, так и для тех, кто уже обладает некоторыми классическими знаниями, но хочет узнать больше о современных технологиях и стилях анимации. Многие анимационные студии и продюсерские компании перешли на paperless animation. Обучение paperless animation соответствует отраслевым стандартам, что делает вас более адаптируемыми и готовыми к профессиональному росту. Рaperless animation позволяет создавать широкий спектр стилей: от традиционной рисованной анимации до более изысканного цифрового стиля. s',
        duration: '3 месяца',
        price: '19 500 ₽ в месяц',
        isOpen: false,
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
};

export const courses: IList = {
    'harmony-animation': {
        cover: harmonyImage,
        name: '2.5D Toon Boom Harmony. Animation foundations',
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
    'harmony-animation': {
        cover: harmonyImage,
        name: 'Анимация в Toon Boom Harmony',
        description:
            'Развивайтесь быстрее благодаря экспертным карьерным консультациям и наставничеству!\n\nУзнайте, что нужно, чтобы стать профессиональным 2D-аниматором! В этом комплексном курсе по 2.5D-анимации вы узнаете, как использовать Toon Boom Harmony для создания анимации персонажей в строгом стиле с нуля, и будете шаг за шагом получать руководство от профессионалов отрасли, которые работали над культовыми анимационными фильмами и телешоу.',
        mentors: [
            {
                name: 'Ирина Голина',
                photo: irinaGolina,
            },
            {
                photo: marinaIpatova,
                name: 'Марина Ипатова',
            },
        ],
        classes: [
            {
                level: EClass_ru.basic,
                href: 'harmony-animation-basic',
            },
            {
                level: EClass_ru.advanced,
                href: 'harmony-animation-advanced',
            },
            {
                level: EClass_ru.expert,
                href: 'harmony-animation-expert',
            },
            {
                level: EClass_ru.professional,
                href: 'harmony-animation-professional',
            },
        ],
    },
    'paperless-animation': {
        cover: harmonyImage,
        name: 'Paperless animation',
        description: 'Комплексный курс по Paperless анимации',
        mentors: [
            {
                name: 'Ирина Голина',
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
};

export const categories: ICategory[] = [
    {
        id: 1,
        category: 'Animation',
        description: null,
        courses: [courses['harmony-animation']],
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
    {
        id: 6,
        category: 'AI Animation',
        description: null,
        courses: [],
    },
];
export const categories_ru: ICategory[] = [
    {
        id: 1,
        category: 'Анимация',
        description: null,
        courses: [courses_ru['harmony-animation'], courses_ru['paperless-animation']],
    },
    {
        id: 2,
        category: 'Стори',
        description: null,
        courses: [],
    },
    {
        id: 3,
        category: 'Дизайн',
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
    {
        id: 6,
        category: 'ИИ Анимация',
        description: null,
        courses: [],
    },
];
