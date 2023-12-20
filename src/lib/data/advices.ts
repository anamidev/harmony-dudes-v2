import harmonyImage from '@/assets/svg/harmony.svg';
import { StaticImageData } from 'next/image';

// export type TAdviceId =
//     | 'harmony-rig'
//     | 'harmony-paperless'
//     | 'flash'
//     | 'ai'
//     | 'action-storyboard'
//     | 'feature-storyboard'
//     | 'project-pitch'
//     | 'harmony-design'
//     | 'harmony-rigging'
//     | 'harmony-compositing'

type IList = {
    [key: string]: IAdvice;
};

export interface IAdvice {
    name: string;
    href: string;
    description: string;
    duration: string;
    price: string;
    isOpen: boolean;
    cover: StaticImageData;
    mentor: {
        name: string;
        href: string;
    };
    software: string;
    weeks: string[] | never[];
    requirements: string[] | never[];
    result: string[] | never[];
}

export const advices: IList = {
    'harmony-rig': {
        cover: harmonyImage,
        href: 'harmony-rig',
        name: 'Harmony Animation: Rig',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            name: 'Lorem Ipsum',
            href: 'lorem-ipsum',
        },
        weeks: [],
        software: 'Toon Boom Harmony 20 or above',
        requirements: [],
        result: [],
    },
    'harmony-paperless': {
        cover: harmonyImage,
        href: 'harmony-paperless',
        name: 'Harmony Animation: Paperless',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            name: 'Lorem Ipsum',
            href: 'lorem-ipsum',
        },
        weeks: [],
        software: 'Toon Boom Harmony 20 or above',
        requirements: [],
        result: [],
    },
    flash: {
        cover: harmonyImage,
        href: 'flash',
        name: 'Flash Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            name: 'Lorem Ipsum',
            href: 'lorem-ipsum',
        },
        weeks: [],
        software: 'Adobe Animate 20.0 or above',
        requirements: [],
        result: [],
    },
    ai: {
        cover: harmonyImage,
        href: 'ai',
        name: 'AI Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            name: 'Lorem Ipsum',
            href: 'lorem-ipsum',
        },
        weeks: [],
        software: 'Toon Boom Harmony 20 or above',
        requirements: [],
        result: [],
    },
    'action-storyboard': {
        cover: harmonyImage,
        href: 'action-storyboard',
        name: 'Action Storyboard',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: true,
        mentor: {
            name: 'Pasha Potekhin',
            href: 'pasha-potekhin',
        },
        weeks: [],
        software: 'Toon Boom Storyboard 20 or above',
        requirements: [],
        result: [],
    },
    'feature-storyboard': {
        cover: harmonyImage,
        href: 'feature-storyboard',
        name: 'Feature Storyboard',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '12 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            name: 'Pasha Potekhin',
            href: 'pasha-potekhin',
        },
        weeks: [],
        software: 'Toon Boom Storyboard 20 or above',
        requirements: [],
        result: [],
    },
    'project-pitch': {
        cover: harmonyImage,
        href: 'project-pitch',
        name: 'Project Pitch',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        duration: '8 weeks',
        price: '$70/week',
        isOpen: true,
        mentor: {
            name: 'Pasha Potekhin',
            href: 'pasha-potekhin',
        },
        weeks: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        ],
        software: 'Toon Boom Storyboard 20 or above',
        requirements: [
            'No prior experience is required',
            'PC with the stable Internet connection',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        result: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
    'harmony-design': {
        cover: harmonyImage,
        href: 'harmony-design',
        name: 'Harmony Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            name: 'Lorem Ipsum',
            href: 'lorem-ipsum',
        },
        weeks: [],
        software: 'Toon Boom Harmony 20 or above',
        requirements: [],
        result: [],
    },
    'harmony-rigging': {
        cover: harmonyImage,
        href: 'harmony-rigging',
        name: 'Harmony Rigging',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            name: 'Lorem Ipsum',
            href: 'lorem-ipsum',
        },
        weeks: [],
        software: 'Toon Boom Harmony 20 or above',
        requirements: [],
        result: [],
    },
    'harmony-compositing': {
        cover: harmonyImage,
        href: 'harmony-compositing',
        name: 'Harmony Compositing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo.',
        duration: '8 weeks',
        price: '$50/week',
        isOpen: false,
        mentor: {
            name: 'Lorem Ipsum',
            href: 'lorem-ipsum',
        },
        weeks: [],
        software: 'Toon Boom Harmony 20 or above',
        requirements: [],
        result: [],
    },
};
