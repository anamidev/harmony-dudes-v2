import { type IAdvice, advices as list, advices_ru as list_ru } from './advices';

export interface IMentorship {
    id: number;
    category: string;
    description: string;
    advices: IAdvice[];
}

export const mentorship: IMentorship[] = [
    {
        id: 1,
        category: 'Animation',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list['harmony-foundations'], list['ai']],
    },
    {
        id: 2,
        category: 'Story',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list['action-storyboard']],
    },
    {
        id: 3,
        category: 'Design',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list['harmony-design']],
    },
    {
        id: 4,
        category: 'Rigging',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list['harmony-rigging']],
    },
    {
        id: 5,
        category: 'Compositing',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list['harmony-compositing']],
    },
];

export const mentorship_ru: IMentorship[] = [
    {
        id: 1,
        category: 'Анимация',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list_ru['harmony-foundations'], list_ru['ai']],
    },
    {
        id: 2,
        category: 'Стори',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list_ru['action-storyboard']],
    },
    {
        id: 3,
        category: 'Дизайн',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list_ru['harmony-design']],
    },
    {
        id: 4,
        category: 'Риггинг',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list_ru['harmony-rigging']],
    },
    {
        id: 5,
        category: 'Композитинг',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list_ru['harmony-compositing']],
    },
];
