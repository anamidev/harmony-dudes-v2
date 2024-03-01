import { StaticImageData } from 'next/image';
import irinaGolinaSagatelian from '@/assets/images/mentors/Irina_Golina.jpg';
import marinaIpatova from '@/assets/images/mentors/Marina_Ipatova.jpg';
import svetlanaCherepanova from '@/assets/images/mentors/Svetlana_Cherepanova.jpg';
import { ECategory_ru } from './courses';

import harmony from '@/assets/harmony.png';
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
              category: ECategory_ru;
              softwareLogo: StaticImageData;
          }[]
        | never[];
}
export interface IMentorsList {
    id: number;
    info: IMentor;
}

export const mentors_ru: IList = {
    'irina-golina-sagatelian': {
        categories: ['Design', 'Animation'],
        photo: irinaGolinaSagatelian,
        href: 'irina-golina-sagatelian',
        name: 'Irina Golina-Sagatelian',
        software: [harmony, adobeAnimate, adobePhotoshop],
        jobTitle: 'Art-Director',
        introVideo: 'https://player.vimeo.com/video/912968508?h=0b058c3699',
        description:
            'Профессионал с огромным опытом в создании paperless и гибридной 2Д анимации в Toon Boom Harmony. Обладатель премий за достижения в области анимации и дизайна фонов, в том числе Annie, Ammy, и Leo Awards',
        currentStudio: 'Wildbrain',
        projectsWorkedOn:
            'Rick and Morty, Carmen Sandiego, Dawn of the Croods, Snoopy in Space, My Little Pony',
        contacts: [{ id: 1, href: 'https://t.me/Igs40', type: ContactType.telegram }],
        courses: [
            {
                name: 'Environmental Design',
                propName: 'environmental-design',
                category: ECategory_ru.design,
                softwareLogo: adobePhotoshop,
            },
            {
                name: 'Rigged Animation',
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
                name: 'Сartoon Animation',
                propName: 'cartoon-animation',
                category: ECategory_ru.animation,
                softwareLogo: adobeAnimate,
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
    'marina-ipatova': {
        categories: ['Animation'],
        photo: marinaIpatova,
        href: 'marina-ipatova',
        name: 'Marina Ipatova',
        software: [harmony],
        jobTitle: 'Compositing Artist',
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
        ],
    },
};

export const mentorsList_ru: IMentorsList[] = [
    { id: 1, info: mentors_ru['irina-golina-sagatelian'] },
    { id: 3, info: mentors_ru['marina-ipatova'] },
    { id: 2, info: mentors_ru['svetlana-cherepanova'] },
];
