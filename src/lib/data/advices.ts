import harmonyImage from '@/assets/svg/harmony.svg';
import { StaticImageData } from 'next/image';

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
    paymentMethods: string[],
}

export const advices: IList = {
    'harmony-foundations': {
        cover: harmonyImage,
        href: 'harmony-foundations',
        name: '2.5D Toon Boom Harmony. Animation foundations',
        description:
            "Progress faster with expert career advisory and mentorship!\nDiscover what it takes to become a professional 2D animator! In this comprehensive 2.5D animation course, you'll learn how to use Toon Boom Harmony to create rigged style character animations from scratch, and be guided step by step by industry professionals who have worked on iconic animated films and TV shows.",
        duration: '12 weeks',
        price: '19,500 ₽ per month',
        isOpen: false,
        mentor: {
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
