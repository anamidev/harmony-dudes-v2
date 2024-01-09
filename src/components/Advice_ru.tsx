import Badge_ru from '@/components/Badge_ru';
import { type IAdvice } from '@/lib/data/advices';
import Image from 'next/image';
import Link from 'next/link';

export default function Advice({ advice }: { advice: IAdvice }) {
    return (
        <div className="relative mx-auto flex h-full w-full max-w-[309px] flex-col rounded-2xl bg-emerald-500/[0.15]">
            {/* badge */}
            <Badge_ru isVisible={advice.isOpen ?? false} />

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
                            <h5 className="text-lg">Длительность</h5>
                            <p>{advice.duration}</p>
                        </div>
                        <div>
                            <h5 className="text-lg">Цена</h5>
                            <p>{advice.price}</p>
                        </div>
                    </div>
                    <Link href={'/ru/mentorship/' + advice.href}>
                        <div className="button-lg-orange text-center">Узнать больше</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
