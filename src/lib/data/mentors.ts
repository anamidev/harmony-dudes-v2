import pashaPotekhin from '@/assets/images/mentors/Pasha_Potekhin.png';
import irinaGolina from '@/assets/images/mentors/Irina_Golina.jpg';
import marinaIpatova from '@/assets/images/mentors/Marina_Ipatova.jpg';
import svetlanaCherepanova from '@/assets/images/mentors/Svetlana_Cherepanova.jpg';
import tatianaSimonova from '@/assets/images/mentors/Tatiana_Simonova.jpg';
import { StaticImageData } from 'next/image';

export interface IMentor {
    id: number;
    href: string;
    photo: StaticImageData;
    name: string;
    jobTitle: string;
    description: string;
    currentStudio: string;
    projectsWorkedOn: string;
    contacts: { id: number; href: string }[];
    advices: {
        name: string;
        href: string;
    }[];
}

export const mentors: IMentor[] = [
    {
        id: 1,
        href: 'irina-golina',
        photo: irinaGolina,
        name: 'Irina Golina',
        jobTitle: 'Art-Director',
        description:
            'Experienced in paperless and Hybrid 2D PEG animation using Toon Boom Harmony. Award-winning Animation Specialist with accolades including Annie, Ammy, and Leo Awards for animation and design.',
        currentStudio: 'Wildbrain',
        projectsWorkedOn:
            'Rick and Morty, Carmen Sandiego, Dawn of the Croods, Snoopy in Space, My Little Pony',
        contacts: [{ id: 1, href: 'https://t.me/Igs40' }],
        advices: [
            { name: 'Animation foundations', href: 'harmony-foundations' },
        ],
    },
    {
        id: 2,
        href: 'svetlana-cherepanova',
        photo: svetlanaCherepanova,
        name: 'Svetlana Cherepanova',
        jobTitle: 'Senior Rigger',
        description:
            'Head of Riggers Department, 2D  Animator, Compositing Artist using Toon Boom Harmony',
        currentStudio: 'Toonbox, Riki, Melnitsa',
        projectsWorkedOn: 'Take My Muffin',
        contacts: [
            {
                id: 1,
                href: 'https://t.me/penguin_rig',
            },
            {
                id: 2,
                href: 'https://www.linkedin.com/in/svetlana-cherepanova-123965200/',
            },
        ],
        advices: [{ name: 'Harmony Rigging', href: 'harmony-rigging' }],
    },
    {
        id: 3,
        href: 'pasha-potekhin',
        photo: pashaPotekhin,
        name: 'Pasha Potekhin',
        jobTitle: 'Story Artist',
        description:
            'Certified Storyboard Pro specialist experienced in feature, TV, games, & music clip animation. Creator of Animon Fest - a brand-new festival and platform for indie projects.',
        currentStudio: 'Homerun Story',
        projectsWorkedOn: 'Animation Dance Party, Walking Battle Terem',
        contacts: [{ id: 1, href: 'https://t.me/Power_Up' }],
        advices: [{ name: 'Action Storyboard', href: 'action-storyboard' }],
    },
    {
        id: 4,
        href: 'merina-ipatova',
        photo: marinaIpatova,
        name: 'Marina Ipatova',
        jobTitle: 'Compositing Artist',
        description:
            'Senior animator, experienced in Hybrid 2D PEG animation using Toon Boom Harmony. Builds artist, majored in characters and props creation.',
        currentStudio: 'Toonbox',
        projectsWorkedOn: 'Take my muffin',
        contacts: [
            { id: 1, href: 'https://t.me/Mip888art' },
            { id: 2, href: 'mip888art@gmail.com' },
        ],
        advices: [{ name: 'Harmony Compositing', href: 'harmony-compositing' }],
    },
    {
        id: 5,
        href: 'tatiana-simonova',
        photo: tatianaSimonova,
        name: 'Tatiana Simonova',
        jobTitle: 'Rigger',
        description:
            'Rigger and layout specialist at Toon Boom Harmony. Animation creator with Stable diffusion.',
        currentStudio: 'Toonbox',
        projectsWorkedOn: 'Take my muffin',
        contacts: [{ id: 51, href: 'https://t.me/tane4kasim' }],
        advices: [{ name: 'AI Animation', href: 'ai' }],
    },
];
