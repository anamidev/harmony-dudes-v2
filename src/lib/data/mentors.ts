import { StaticImageData } from 'next/image';
import pashaPotekhin from '@/assets/images/mentors/Pasha_Potekhin.png';
import irinaGolina from '@/assets/images/mentors/Irina_Golina.jpg';
import marinaIpatova from '@/assets/images/mentors/Marina_Ipatova.jpg';
import svetlanaCherepanova from '@/assets/images/mentors/Svetlana_Cherepanova.jpg';
import tatianaSimonova from '@/assets/images/mentors/Tatiana_Simonova.jpg';
import { ECategory, ECategory_ru } from './courses';

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
    categories: string[];
    photo: StaticImageData;
    href: string;
    name: string;
    introVideo: string | null;
    jobTitle: string;
    description: string;
    currentStudio: string;
    projectsWorkedOn: string;
    contacts: IContact[];
    courses: {
        name: string;
        propName: string;
        category: ECategory | ECategory_ru;
    }[];
}
export interface IMentorsList {
    id: number;
    info: IMentor;
}

export const mentors: IList = {
    'irina-golina': {
        categories: ['Animation', 'Design'],
        photo: irinaGolina,
        href: 'irina-golina',
        name: 'Irina Golina',
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
                propName: 'harmony-animation',
                category: ECategory.animation,
            },
        ],
    },
    'svetlana-cherepanova': {
        categories: ['Rigging'],
        photo: svetlanaCherepanova,
        href: 'svetlana-cherepanova',
        name: 'Svetlana Cherepanova',
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
        courses: [
            { name: 'Harmony Rigging', propName: 'harmony-rigging', category: ECategory.rigging },
        ],
    },
    'pasha-potekhin': {
        categories: ['Story'],
        photo: pashaPotekhin,
        href: 'pasha-potekhin',
        name: 'Pasha Potekhin',
        jobTitle: 'Story Artist',
        introVideo: null,
        description:
            'Certified Storyboard Pro specialist experienced in feature, TV, games, & music clip animation. Creator of Animon Fest - a brand-new festival and platform for indie projects.',
        currentStudio: 'Homerun Story',
        projectsWorkedOn: 'Animation Dance Party, Walking Battle Terem',
        contacts: [{ id: 1, href: 'https://t.me/Power_Up', type: ContactType.telegram }],
        courses: [
            { name: 'Action Storyboard', propName: 'action-storyboard', category: ECategory.story },
        ],
    },
    'marina-ipatova': {
        categories: ['Compositing'],
        photo: marinaIpatova,
        href: 'marina-ipatova',
        name: 'Marina Ipatova',
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
        courses: [
            {
                name: 'Harmony Compositing',
                propName: 'harmony-compositing',
                category: ECategory.compositing,
            },
        ],
    },
    'tatiana-simonova': {
        categories: ['AI Animation'],
        photo: tatianaSimonova,
        href: 'tatiana-simonova',
        name: 'Tatiana Simonova',
        jobTitle: 'Rigger',
        introVideo: null,
        description:
            'Rigger and layout specialist at Toon Boom Harmony. Animation creator with Stable diffusion.',
        currentStudio: 'Toonbox',
        projectsWorkedOn: 'Take my muffin',
        contacts: [{ id: 51, href: 'https://t.me/tane4kasim', type: ContactType.telegram }],
        courses: [
            { name: 'AI Animation', propName: 'ai-animation', category: ECategory.aiAnimation },
        ],
    },
};
export const mentors_ru: IList = {
    'irina-golina': {
        categories: ['Анимация', 'Дизайн'],
        photo: irinaGolina,
        href: 'irina-golina',
        name: 'Ирина Голина',
        jobTitle: 'Арт-Директор',
        introVideo: null,
        description:
            'Профессионал с огромным опытом в создании paperless и гибридной 2Д анимации в Toon Boom Harmony. Обладатель премий за достижения в области анимации и дизайна фонов, в том числе Annie, Ammy, и Leo Awards',
        currentStudio: 'Wildbrain',
        projectsWorkedOn:
            'Rick and Morty, Carmen Sandiego, Dawn of the Croods, Snoopy in Space, My Little Pony',
        contacts: [{ id: 1, href: 'https://t.me/Igs40', type: ContactType.telegram }],
        courses: [
            {
                name: 'Основы анимации',
                propName: 'harmony-animation',
                category: ECategory_ru.animation,
            },
        ],
    },
    'svetlana-cherepanova': {
        categories: ['Риггинг'],
        photo: svetlanaCherepanova,
        href: 'svetlana-cherepanova',
        name: 'Светлана Черепанова',
        jobTitle: 'Синьор Риггер',
        introVideo: null,
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
        courses: [
            {
                name: 'Риггинг в Harmony',
                propName: 'harmony-rigging',
                category: ECategory_ru.rigging,
            },
        ],
    },
    'pasha-potekhin': {
        categories: ['Стори'],
        photo: pashaPotekhin,
        href: 'pasha-potekhin',
        name: 'Паша Потехин',
        jobTitle: 'Стори Артист',
        introVideo: null,
        description:
            'Сертифицированный специалист по сторибордам в Storyboard Pro, имеющий опыт работы с полнометражными фильмами, телевидением, играми и анимацией музыкальных клипов. Создатель Animon Fest - фестиваля и платформы для инди-проектов',
        currentStudio: 'Homerun Story',
        projectsWorkedOn: 'Animation Dance Party, Ходячий Боевой Терем',
        contacts: [{ id: 1, href: 'https://t.me/Power_Up', type: ContactType.telegram }],
        courses: [
            { name: 'Экшн Сториборд', propName: 'action-storyboard', category: ECategory_ru.story },
        ],
    },
    'marina-ipatova': {
        categories: ['Композитинг'],
        photo: marinaIpatova,
        href: 'marina-ipatova',
        name: 'Марина Ипатова',
        jobTitle: 'Композитинг Артист',
        introVideo: null,
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
                name: 'Композитинг в Harmony',
                propName: 'harmony-compositing',
                category: ECategory_ru.compositing,
            },
        ],
    },
    'tatiana-simonova': {
        categories: ['ИИ Анимация'],
        photo: tatianaSimonova,
        href: 'tatiana-simonova',
        name: 'Татьяна Симонова',
        jobTitle: 'Риггер',
        introVideo: null,
        description:
            'Риггер и лэйаут-специалист Toon Boom Harmony. Создатель анимации с помощью Stable Diffusion',
        currentStudio: 'Toonbox',
        projectsWorkedOn: 'Take my muffin',
        contacts: [{ id: 51, href: 'https://t.me/tane4kasim', type: ContactType.telegram }],
        courses: [
            { name: 'ИИ анимация', propName: 'ai-animation', category: ECategory_ru.aiAnimation },
        ],
    },
};

export const mentorsList: IMentorsList[] = [
    { id: 1, info: mentors['irina-golina'] },
    { id: 2, info: mentors['svetlana-cherepanova'] },
    { id: 3, info: mentors['pasha-potekhin'] },
    { id: 4, info: mentors['marina-ipatova'] },
    { id: 5, info: mentors['tatiana-simonova'] },
];
export const mentorsList_ru: IMentorsList[] = [
    { id: 1, info: mentors_ru['irina-golina'] },
    { id: 2, info: mentors_ru['svetlana-cherepanova'] },
    { id: 3, info: mentors_ru['pasha-potekhin'] },
    { id: 4, info: mentors_ru['marina-ipatova'] },
    { id: 5, info: mentors_ru['tatiana-simonova'] },
];
