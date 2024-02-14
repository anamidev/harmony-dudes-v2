import { StaticImageData } from 'next/image';
import pashaPotekhin from '@/assets/images/mentors/Pasha_Potekhin.png';
import irinaGolina from '@/assets/images/mentors/Irina_Golina.jpg';
import marinaIpatova from '@/assets/images/mentors/Marina_Ipatova.jpg';
import svetlanaCherepanova from '@/assets/images/mentors/Svetlana_Cherepanova.jpg';
import tatianaSimonova from '@/assets/images/mentors/Tatiana_Simonova.jpg';
import { ECategory, ECategory_ru } from './courses';

import harmony from '@/assets/harmony.png';
import harmony_blue from '@/assets/harmony_blue.png';
import storyboardPro from '@/assets/svg/storyboardPro.svg';
import storyboardPro_clean from '@/assets/svg/storyboardPro_clean.svg';
import adobeAnimate from '@/assets/svg/adobeAnimate.svg';
import adobePhotoshop from '@/assets/svg/adobePhotoshop.svg';

type IList = {
    [key: string]: IMentor;
};

export enum ContactType {
    telegram = 'Telegram',
    linkedin = 'LinkedIn',
    email = 'Email',
}
export interface IContact {
    id: number;
    href: string;
    type: ContactType;
}
export interface IMentor {
    categories: string[] | never[];
    photo: StaticImageData;
    href: string;
    name: string;
    software: StaticImageData[] | never[];
    introVideo: string | null;
    jobTitle: string;
    description: string;
    currentStudio: string;
    projectsWorkedOn: string;
    contacts: IContact[];
    courses:
        | {
              name: string;
              propName: string;
              category: ECategory | ECategory_ru;
              softwareLogo: StaticImageData;
          }[]
        | never[];
}
export interface IMentorsList {
    id: number;
    info: IMentor;
}

export const mentors: IList = {
    'irina-golina': {
        categories: ['Animation'],
        photo: irinaGolina,
        href: 'irina-golina',
        name: 'Irina Golina',
        software: [],
        jobTitle: 'Art-Director',
        introVideo: null,
        description:
            'Experienced in paperless and Hybrid 2D PEG animation using Toon Boom Harmony. Award-winning Animation Specialist with accolades including Annie, Ammy, and Leo Awards for animation and design.',
        currentStudio: 'Wildbrain',
        projectsWorkedOn:
            'Rick and Morty, Carmen Sandiego, Dawn of the Croods, Snoopy in Space, My Little Pony',
        contacts: [{ id: 1, href: 'https://t.me/Igs40', type: ContactType.telegram }],
        courses: [
            {
                name: '2.5D Toon Boom Harmony. Animation foundations',
                propName: 'rigged-animation',
                category: ECategory.animation,
                softwareLogo: harmony,
            },
        ],
    },
    'svetlana-cherepanova': {
        categories: [],
        photo: svetlanaCherepanova,
        href: 'svetlana-cherepanova',
        name: 'Svetlana Cherepanova',
        software: [],
        jobTitle: 'Senior Rigger',
        introVideo: null,
        description:
            'Head of Riggers Department, 2D  Animator, Compositing Artist using Toon Boom Harmony.',
        currentStudio: 'Toonbox, Riki, Melnitsa',
        projectsWorkedOn: 'Take My Muffin',
        contacts: [
            {
                id: 1,
                href: 'https://t.me/penguin_rig',
                type: ContactType.telegram,
            },
            {
                id: 2,
                href: 'https://www.linkedin.com/in/svetlana-cherepanova-123965200/',
                type: ContactType.linkedin,
            },
        ],
        courses: [],
    },
    'pasha-potekhin': {
        categories: ['Story'],
        photo: pashaPotekhin,
        href: 'pasha-potekhin',
        name: 'Pasha Potekhin',
        software: [],
        jobTitle: 'Story Artist',
        introVideo: null,
        description:
            'Certified Storyboard Pro specialist experienced in feature, TV, games, & music clip animation. Creator of Animon Fest - a brand-new festival and platform for indie projects.',
        currentStudio: 'Homerun Story',
        projectsWorkedOn: 'Animation Dance Party, Walking Battle Terem',
        contacts: [{ id: 1, href: 'https://t.me/Power_Up', type: ContactType.telegram }],
        courses: [],
    },
    'marina-ipatova': {
        categories: [],
        photo: marinaIpatova,
        href: 'marina-ipatova',
        name: 'Marina Ipatova',
        software: [],
        jobTitle: 'Compositing Artist',
        introVideo: null,
        description:
            'Senior animator, experienced in Hybrid 2D PEG animation using Toon Boom Harmony. Builds artist, majored in characters and props creation.',
        currentStudio: 'Toonbox',
        projectsWorkedOn: 'Take my muffin',
        contacts: [
            { id: 1, href: 'https://t.me/Mip888art', type: ContactType.telegram },
            { id: 2, href: 'mip888art@gmail.com', type: ContactType.email },
        ],
        courses: [],
    },
    'tatiana-simonova': {
        categories: ['AI Animation'],
        photo: tatianaSimonova,
        href: 'tatiana-simonova',
        name: 'Tatiana Simonova',
        software: [],
        jobTitle: 'Rigger',
        introVideo: null,
        description:
            'Rigger and layout specialist at Toon Boom Harmony. Animation creator with Stable diffusion.',
        currentStudio: 'Toonbox',
        projectsWorkedOn: 'Take my muffin',
        contacts: [{ id: 51, href: 'https://t.me/tane4kasim', type: ContactType.telegram }],
        courses: [],
    },
};
export const mentors_ru: IList = {
    'irina-golina': {
        categories: ['Анимация', 'Дизайн'],
        photo: irinaGolina,
        href: 'irina-golina',
        name: 'Ирина Голина',
        software: [harmony, adobeAnimate, adobePhotoshop],
        jobTitle: 'Арт-Директор',
        introVideo: 'https://player.vimeo.com/video/912968508?h=0b058c3699',
        description:
            'Профессионал с огромным опытом в создании paperless и гибридной 2Д анимации в Toon Boom Harmony. Обладатель премий за достижения в области анимации и дизайна фонов, в том числе Annie, Ammy, и Leo Awards',
        currentStudio: 'Wildbrain',
        projectsWorkedOn:
            'Rick and Morty, Carmen Sandiego, Dawn of the Croods, Snoopy in Space, My Little Pony',
        contacts: [{ id: 1, href: 'https://t.me/Igs40', type: ContactType.telegram }],
        courses: [
            {
                name: 'Rigged animation',
                propName: 'rigged-animation',
                category: ECategory_ru.animation,
                softwareLogo: harmony,
            },
            {
                name: 'Paperless Animation',
                propName: 'paperless-animation',
                category: ECategory_ru.animation,
                softwareLogo: harmony,
            },
            {
                name: 'Сartoon animation',
                propName: 'cartoon-animation',
                category: ECategory_ru.animation,
                softwareLogo: adobeAnimate,
            },
            {
                name: 'Дизайн фонов',
                propName: 'background-design',
                category: ECategory_ru.design,
                softwareLogo: adobePhotoshop,
            },
        ],
    },
    'svetlana-cherepanova': {
        categories: [],
        photo: svetlanaCherepanova,
        href: 'svetlana-cherepanova',
        name: 'Светлана Черепанова',
        software: [],
        jobTitle: 'Синьор Риггер',
        introVideo: 'https://player.vimeo.com/video/913029039?h=7207b85726',
        description:
            'Супервайзер отдела риггинга, специалист по композу в Toon Boom Harmony, 2D аниматор',
        currentStudio: 'Toonbox, Riki, Melnitsa',
        projectsWorkedOn: 'Take My Muffin',
        contacts: [
            {
                id: 1,
                href: 'https://t.me/penguin_rig',
                type: ContactType.telegram,
            },
            {
                id: 2,
                href: 'https://www.linkedin.com/in/svetlana-cherepanova-123965200/',
                type: ContactType.linkedin,
            },
        ],
        courses: [],
    },
    'pasha-potekhin': {
        categories: ['Стори'],
        photo: pashaPotekhin,
        href: 'pasha-potekhin',
        name: 'Паша Потехин',
        software: [storyboardPro_clean],
        jobTitle: 'Стори Артист',
        introVideo: null,
        description:
            'Сертифицированный специалист по сторибордам в Storyboard Pro, имеющий опыт работы с полнометражными фильмами, телевидением, играми и анимацией музыкальных клипов. Создатель Animon Fest - фестиваля и платформы для инди-проектов',
        currentStudio: 'Homerun Story',
        projectsWorkedOn: 'Animation Dance Party, Ходячий Боевой Терем',
        contacts: [{ id: 1, href: 'https://t.me/Power_Up', type: ContactType.telegram }],
        courses: [],
    },
    'marina-ipatova': {
        categories: ['Анимация'],
        photo: marinaIpatova,
        href: 'marina-ipatova',
        name: 'Марина Ипатова',
        software: [harmony],
        jobTitle: 'Композитинг Артист',
        introVideo: 'https://player.vimeo.com/video/912968732?h=bfc78f2f37',
        description:
            'Синьор аниматор гибридной 2Д анимации в Toon Boom Harmony. Риггер по персонажам и пропсам',
        currentStudio: 'Toonbox',
        projectsWorkedOn: 'Take my muffin',
        contacts: [
            { id: 1, href: 'https://t.me/Mip888art', type: ContactType.telegram },
            { id: 2, href: 'mip888art@gmail.com', type: ContactType.email },
        ],
        courses: [
            {
                name: 'Rigged animation',
                propName: 'rigged-animation',
                category: ECategory_ru.animation,
                softwareLogo: harmony,
            },
            {
                name: 'Курс по анимации для подростков',
                propName: 'for-teens-animation',
                category: ECategory_ru.animation,
                softwareLogo: harmony,
            },
        ],
    },
    'tatiana-simonova': {
        categories: ['ИИ Анимация'],
        photo: tatianaSimonova,
        href: 'tatiana-simonova',
        name: 'Татьяна Симонова',
        software: [],
        jobTitle: 'Риггер',
        introVideo: null,
        description:
            'Риггер и лэйаут-специалист Toon Boom Harmony. Создатель анимации с помощью Stable Diffusion',
        currentStudio: 'Toonbox',
        projectsWorkedOn: 'Take my muffin',
        contacts: [{ id: 51, href: 'https://t.me/tane4kasim', type: ContactType.telegram }],
        courses: [],
    },
};

export const mentorsList: IMentorsList[] = [
    { id: 1, info: mentors['irina-golina'] },
    { id: 2, info: mentors['svetlana-cherepanova'] },
    { id: 3, info: mentors['pasha-potekhin'] },
    { id: 4, info: mentors['marina-ipatova'] },
    // { id: 5, info: mentors['tatiana-simonova'] },
];
export const mentorsList_ru: IMentorsList[] = [
    { id: 1, info: mentors_ru['irina-golina'] },
    { id: 2, info: mentors_ru['svetlana-cherepanova'] },
    { id: 3, info: mentors_ru['pasha-potekhin'] },
    { id: 4, info: mentors_ru['marina-ipatova'] },
    // { id: 5, info: mentors_ru['tatiana-simonova'] },
];
