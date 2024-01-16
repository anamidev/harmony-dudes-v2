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
}
enum EClass_ru {
    basic = 'Класс 1',
    advanced = 'Класс 2',
    expert = 'Класс 3',
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
    description: string;
    duration: string;
    price: string;
    isOpen: boolean;
    cover: StaticImageData;
    mentor: {
        photo: StaticImageData;
        name: string;
        href: string;
    };
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
    mentor: {
        name: string;
        photo: StaticImageData;
    };
    classes: {
        level: EClass | EClass_ru;
        href: string;
    }[];
}
export interface ICategory {
    id: number;
    category: string;
    description: string;
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
        mentor: {
            photo: irinaGolina,
            name: 'Irina Golina',
            href: 'irina-golina',
        },
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
    'ai-animation-basic': {
        category: ECategory.aiAnimation,
        cover: harmonyImage,
        href: 'ai-animation-basic',
        name: 'AI Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            photo: tatianaSimonova,
            name: 'Tatiana Simonova',
            href: 'tatiana-simonova',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Harmony 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
    'action-storyboard-basic': {
        category: ECategory.story,
        cover: harmonyImage,
        href: 'action-storyboard-basic',
        name: 'Action Storyboard',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: true,
        mentor: {
            photo: pashaPotekhin,
            name: 'Pasha Potekhin',
            href: 'pasha-potekhin',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Storyboard 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
    'harmony-design-basic': {
        category: ECategory.design,
        cover: harmonyImage,
        href: 'harmony-design-basic',
        name: 'Harmony Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            photo: irinaGolina,
            name: 'Irina Golina',
            href: 'irina-golina',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Harmony 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
    'harmony-rigging-basic': {
        category: ECategory.rigging,
        cover: harmonyImage,
        href: 'harmony-rigging-basic',
        name: 'Harmony Rigging',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            photo: svetlanaCherepanova,
            name: 'Svetlana Cherepanova',
            href: 'svetlana-cherepanova',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Harmony 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
    'harmony-compositing-basic': {
        category: ECategory.compositing,
        cover: harmonyImage,
        href: 'harmony-compositing-basic',
        name: 'Harmony Compositing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            photo: marinaIpatova,
            name: 'Marina Ipatova',
            href: 'marina-ipatova',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Harmony 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
};
export const classes_ru: TClass = {
    'harmony-animation-basic': {
        category: ECategory_ru.animation,
        cover: harmonyImage,
        href: 'harmony-animation-basic',
        name: '2.5D Toon Boom Harmony. Основы анимации',
        description:
            'Развивайтесь быстрее благодаря экспертным карьерным консультациям и наставничеству!\n\nУзнайте, что нужно, чтобы стать профессиональным 2D-аниматором! В этом комплексном курсе по 2.5D-анимации вы узнаете, как использовать Toon Boom Harmony для создания анимации персонажей в строгом стиле с нуля, и будете шаг за шагом получать руководство от профессионалов отрасли, которые работали над культовыми анимационными фильмами и телешоу.',
        duration: '12 недель',
        price: '19,500 ₽ в месяц',
        isOpen: false,
        mentor: {
            photo: irinaGolina,
            name: 'Ирина Голина',
            href: 'irina-golina',
        },
        weeks: {
            description:
                'Одобренная отраслью учебная программа поможет вам начать работу в захватывающем мире анимации.\n\nДобро пожаловать на курс «Анимация — уровень 1», разработанный специально для новичков или тех, кто нуждается в повышении квалификации в области программного обеспечения. Этот курс, включающий в общей сложности 12 видеоуроков и 12 интерактивных встреч, дает всестороннее введение в программное обеспечение и научит вас эффективно использовать его основные инструменты. Мало того, вы также погрузитесь в захватывающий мир анимации фальсифицированных персонажей.\n\nК концу курса вы приобретете навыки и знания, необходимые для создания впечатляющих демонстрационных роликов. Это отличная возможность продемонстрировать свои новые способности и талант в анимации. Независимо от того, являетесь ли вы новичком в программном обеспечении или просто хотите освежить свои навыки, этот курс — идеальный выбор для вас.',
            data: [
                'Интерфейс',
                'Инструменты',
                'Покадровая анимация в Harmony\nМы знакомимся с программным обеспечением и узнаем, что нам нужно знать как аниматору. Мы применяем принципы анимации, используя как новейшие инструменты Harmony, так и старомодные методы, и практикуемся в получении контроля над нашими ключевыми кадрами, прежде чем создавать покадровую анимацию.',
                'Модельный лист для Harmony и способы очистки эффектов',
                'Введение в сборку. Подготовьте билд персонажа. Простой вид сбоку для цикла обхода Cut Out',
                'Введение в Cut out анимацию. Анимируем ходьбу',
                'Знакомство с деформаторами. Анимация хвоста.\nПеренесет вас в чудесный мир деформаторов, используя немного более сложные методы, такие как перекрытие и продолжение. Мы узнаем основы сборки персонажа, использования камеры, создания анимированных циклов, работы в космосе и многого другого!',
                'Морф раф',
                'Фоны в Harmony',
                'Морф билд',
                'Морф-анимация и организация проекта\nМы начинаем применять все, что мы узнали до сих пор, для создания функционального персонажа. Здесь мы концентрируемся на качественном применении принципов, таких как сильная поза, исполнение, тайминг и все, что между ними! Мы также углубимся в часто упускаемое из виду искусство использования референсов.\nТеперь мы познакомимся с ригом для всего тела, чтобы проверить ваши навыки анимации действий! Мы определяем последовательность движений и изучаем несколько различных способов перехода от клавиш к полностью промежуточной анимации. Мы также становимся опытными пользователями временной шкалы и осваиваем ярлыки. Вы можете работать с 1 или 2 персонажами (установки предоставляются, но вы можете построить свои собственные)',
                'Шоурил\nТеперь мы отточим вашу анимацию, разовьем вашу способность направлять взгляд, поставим игру в «два кадра» и добавим последние штрихи. Мы также даем советы по шоурилам, эффективному использованию референсов и тому, как работать в студии.',
            ],
        },
        software: 'Toon Boom Harmony 17 или новее',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description:
                'Этот курс 2D-анимации для начинающих — отличный способ начать карьеру аниматора! Начиная с основ анимации и заканчивая гораздо более сложными проектами, ваш наставник проведет вас через забавные упражнения, поделится современными методами анимации и предоставит ценные отзывы о вашей работе, кадр за кадром, чтобы помочь вам быстрее прогрессировать в качестве аниматора. художник.\n\nВас будут лично обучать бывшие художники Netflix, Hasbro, Adult Swim и DreamWorks с многолетним опытом работы над телешоу.',
            data: [
                'Научитесь ригговой анимации персонажа',
                'Обучайтесь на Toon Boom Harmony - ПО стандарта индустрии',
                'Получите менторство от аниматора мирового класса',
                'Гибкие возможности обучения и оплаты',
            ],
        },
        paymentMethods: ['PayPal', 'Банковский перевод'],
    },
    'ai-animation-basic': {
        category: ECategory_ru.aiAnimation,
        cover: harmonyImage,
        href: 'ai-animation-basic',
        name: 'AI Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            photo: tatianaSimonova,
            name: 'Татьяна Симонова',
            href: 'tatiana-simonova',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Harmony 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
    'action-storyboard-basic': {
        category: ECategory_ru.story,
        cover: harmonyImage,
        href: 'action-storyboard-basic',
        name: 'Action Storyboard',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: true,
        mentor: {
            photo: pashaPotekhin,
            name: 'Паша Потехин',
            href: 'pasha-potekhin',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Storyboard 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
    'harmony-design-basic': {
        category: ECategory_ru.design,
        cover: harmonyImage,
        href: 'harmony-design-basic',
        name: 'Harmony Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            photo: irinaGolina,
            name: 'Ирина Голина',
            href: 'irina-golina',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Harmony 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
    'harmony-rigging-basic': {
        category: ECategory_ru.rigging,
        cover: harmonyImage,
        href: 'harmony-rigging-basic',
        name: 'Harmony Rigging',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            photo: svetlanaCherepanova,
            name: 'Светлана Черепанова',
            href: 'svetlana-cherepanova',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Harmony 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
    'harmony-compositing-basic': {
        category: ECategory_ru.compositing,
        cover: harmonyImage,
        href: 'harmony-compositing-basic',
        name: 'Harmony Compositing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            photo: marinaIpatova,
            name: 'Марина Ипатова',
            href: 'marina-ipatova',
        },
        weeks: {
            description: null,
            data: [],
        },
        software: 'Toon Boom Harmony 20 or above',
        requirements: {
            description: null,
            data: [],
        },
        result: {
            description: null,
            data: [],
        },
        paymentMethods: ['Direct Bank Card Payment'],
    },
};

export const courses: IList = {
    'harmony-animation': {
        cover: harmonyImage,
        name: '2.5D Toon Boom Harmony. Animation foundations',
        description:
            "Progress faster with expert career advisory and mentorship!\n\nDiscover what it takes to become a professional 2D animator! In this comprehensive 2.5D animation course, you'll learn how to use Toon Boom Harmony to create rigged style character animations from scratch, and be guided step by step by industry professionals who have worked on iconic animated films and TV shows.",
        mentor: {
            name: 'Irina Golina',
            photo: irinaGolina,
        },
        classes: [
            {
                level: EClass.basic,
                href: 'harmony-animation-basic',
            },
        ],
    },
    'ai-animation': {
        cover: harmonyImage,
        name: 'AI Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Tatiana Simonova',
            photo: tatianaSimonova,
        },
        classes: [
            {
                level: EClass.basic,
                href: 'ai-animation-basic',
            },
        ],
    },
    'action-storyboard': {
        cover: harmonyImage,
        name: 'Action Storyboard',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Pasha Potekhin',
            photo: pashaPotekhin,
        },
        classes: [
            {
                level: EClass.basic,
                href: 'action-storyboard-basic',
            },
        ],
    },
    'harmony-design': {
        cover: harmonyImage,
        name: 'Harmony Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Irina Golina',
            photo: irinaGolina,
        },
        classes: [
            {
                level: EClass.basic,
                href: 'harmony-design-basic',
            },
            {
                level: EClass.advanced,
                href: 'harmony-design-advanced',
            },
            {
                level: EClass.expert,
                href: 'harmony-design-expert',
            },
        ],
    },
    'harmony-rigging': {
        cover: harmonyImage,
        name: 'Harmony Rigging',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Svetlana Cherepanova',
            photo: svetlanaCherepanova,
        },
        classes: [
            {
                level: EClass.basic,
                href: 'harmony-rigging-basic',
            },
        ],
    },
    'harmony-compositing': {
        cover: harmonyImage,
        name: 'Harmony Compositing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Marina Ipatova',
            photo: marinaIpatova,
        },
        classes: [
            {
                level: EClass.basic,
                href: 'harmony-compositing-basic',
            },
        ],
    },
};
export const courses_ru: IList = {
    'harmony-animation': {
        cover: harmonyImage,
        name: '2.5D Toon Boom Harmony. Основы анимации',
        description:
            'Развивайтесь быстрее благодаря экспертным карьерным консультациям и наставничеству!\n\nУзнайте, что нужно, чтобы стать профессиональным 2D-аниматором! В этом комплексном курсе по 2.5D-анимации вы узнаете, как использовать Toon Boom Harmony для создания анимации персонажей в строгом стиле с нуля, и будете шаг за шагом получать руководство от профессионалов отрасли, которые работали над культовыми анимационными фильмами и телешоу.',
        mentor: {
            name: 'Ирина Голина',
            photo: irinaGolina,
        },
        classes: [
            {
                level: EClass_ru.basic,
                href: 'harmony-animation-basic',
            },
        ],
    },
    'ai-animation': {
        cover: harmonyImage,
        name: 'AI Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Татьяна Симонова',
            photo: tatianaSimonova,
        },
        classes: [
            {
                level: EClass_ru.basic,
                href: 'ai-animation-basic',
            },
        ],
    },
    'action-storyboard': {
        cover: harmonyImage,
        name: 'Action Storyboard',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Паша Потехин',
            photo: pashaPotekhin,
        },
        classes: [
            {
                level: EClass_ru.basic,
                href: 'action-storyboard-basic',
            },
        ],
    },
    'harmony-design': {
        cover: harmonyImage,
        name: 'Harmony Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Ирина Голина',
            photo: irinaGolina,
        },
        classes: [
            {
                level: EClass_ru.basic,
                href: 'harmony-design-basic',
            },
            {
                level: EClass_ru.advanced,
                href: 'harmony-design-advanced',
            },
            {
                level: EClass_ru.expert,
                href: 'harmony-design-expert',
            },
        ],
    },
    'harmony-rigging': {
        cover: harmonyImage,
        name: 'Harmony Rigging',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Светлана Черепанова',
            photo: svetlanaCherepanova,
        },
        classes: [
            {
                level: EClass_ru.basic,
                href: 'harmony-rigging-basic',
            },
        ],
    },
    'harmony-compositing': {
        cover: harmonyImage,
        name: 'Harmony Compositing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        mentor: {
            name: 'Марина Ипатова',
            photo: marinaIpatova,
        },
        classes: [
            {
                level: EClass_ru.basic,
                href: 'harmony-compositing-basic',
            },
        ],
    },
};

export const categories: ICategory[] = [
    {
        id: 1,
        category: 'Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses['harmony-animation']],
    },
    {
        id: 2,
        category: 'Story',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses['action-storyboard']],
    },
    {
        id: 3,
        category: 'Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses['harmony-design']],
    },
    {
        id: 4,
        category: 'Rigging',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses['harmony-rigging']],
    },
    {
        id: 5,
        category: 'Compositing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses['harmony-compositing']],
    },
    {
        id: 6,
        category: 'AI Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses['ai-animation']],
    },
];
export const categories_ru: ICategory[] = [
    {
        id: 1,
        category: 'Анимация',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses_ru['harmony-animation']],
    },
    {
        id: 2,
        category: 'Стори',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses_ru['action-storyboard']],
    },
    {
        id: 3,
        category: 'Дизайн',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses_ru['harmony-design']],
    },
    {
        id: 4,
        category: 'Риггинг',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses_ru['harmony-rigging']],
    },
    {
        id: 5,
        category: 'Композитинг',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses_ru['harmony-compositing']],
    },
    {
        id: 6,
        category: 'ИИ Анимация',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        courses: [courses_ru['ai-animation']],
    },
];
