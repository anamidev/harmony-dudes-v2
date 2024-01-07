import Badge from '@/components/Badge';
import { type IAdvice } from '@/lib/data/advices';
import Image from 'next/image';
import Link from 'next/link';

export default function Advice({ advice }: { advice: IAdvice }) {
    return (
        <div className="relative flex h-full flex-col rounded-2xl bg-emerald-500/[0.15]">
            {/* badge */}
            <Badge isVisible={advice.isOpen ?? false} />

            {/* image */}
            <div className="relative h-52 w-full rounded-tl-2xl rounded-tr-2xl bg-white/[0.1]">
                <Image
                    src={advice.cover}
                    alt={advice.name + ' cover'}
                    fill
                    className="object-contain"
                />
            </div>

            {/* body */}
            <div className="flex grow flex-col gap-3 p-3">
                <h4 className="self-center text-center text-xl">{advice.name}</h4>
                <p className="grow">{advice.description}</p>
                <div className="justify-self-end">
                    <div className="grid grid-cols-2 pb-4">
                        <div>
                            <h5 className='text-lg'>Duration</h5>
                            <p>{advice.duration}</p>
                        </div>
                        <div>
                            <h5 className='text-lg'>Price</h5>
                            <p>{advice.price}</p>
                        </div>
                    </div>
                    <Link href={'/mentorship/' + advice.href}>
                        <div className="button-lg-orange text-center">
                            Learn more
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
