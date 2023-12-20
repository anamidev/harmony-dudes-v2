import { type IAdvice, advices as list } from './advices';

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
        advices: [list['harmony-rig'], list['harmony-paperless'], list['flash'], list['ai']],
    },
    {
        id: 2,
        category: 'Story',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a neque sed lacus auctor eleifend ac tincidunt orci. Aenean in felis vehicula, gravida tellus vitae, hendrerit leo. Nulla at aliquet felis. Maecenas consectetur vitae leo porttitor hendrerit. Nunc pretium augue quis viverra interdum. Mauris auctor pulvinar ligula.',
        advices: [list['action-storyboard'], list['feature-storyboard'], list['project-pitch']],
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
