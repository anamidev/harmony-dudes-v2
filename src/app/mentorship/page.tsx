import Badge from '@/components/Badge';
import { mentorship, type IMentorship } from '@/lib/data/mentorship';
import { type IAdvice } from '@/lib/data/advices';
import Image from 'next/image';
import Link from 'next/link';

export default function Mentorship() {
    return (
        <section className="page-layout snap-y scroll-mt-10">
            {/* intro */}
            <h1 className="page-header">Our mentorship</h1>
            <p className="mx-auto max-w-4xl">
                Choose your personalized pathway to mastering animation! Our experienced mentors
                will provide tailored guidance, helping you master animation techniques,
                storyboarding, character rigging and AI assistance in today's industry. Join us to
                receive invaluable insights and propel your creativity to new heights in the world
                of animation!
            </p>

            {/* categories */}
            <h2 className="page-header">Categories</h2>
            <ul className="flex flex-wrap justify-center gap-5">
                {mentorship.map((mtshp) => (
                    <li
                        key={mtshp.id}
                        className="rounded-lg bg-orange-500/[0.6] px-4 py-2"
                    >
                        <Link href={'#' + mtshp.category}>{mtshp.category}</Link>
                    </li>
                ))}
            </ul>
            {mentorship.map((mtshp: IMentorship) => (
                <div key={mtshp.id} className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6">
                    <h3
                        className="text-2xl"
                        id={mtshp.category}
                    >
                        {mtshp.category}
                    </h3>
                    <p>{mtshp.description}</p>
                    <ul className="grid grid-cols-3 gap-6">
                        {mtshp.advices.map((advice: IAdvice) => (
                            <li
                                key={advice.name}
                                className="relative flex flex-col rounded-2xl bg-emerald-500/[0.1] hover:bg-emerald-500/[0.2]"
                            >
                                {/* badge */}
                                <Badge isVisible={advice.isOpen} />

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
                                <div className="flex grow flex-col gap-4 p-4">
                                    <h4 className="self-center text-lg">{advice.name}</h4>
                                    <p className="grow">{advice.description}</p>
                                    <div className="justify-self-end">
                                        <div className="grid grid-cols-2 pb-4">
                                            <div>
                                                <h5>Duration</h5>
                                                <p>{advice.duration}</p>
                                            </div>
                                            <div>
                                                <h5>Price</h5>
                                                <p>{advice.price}</p>
                                            </div>
                                        </div>
                                        <Link href={'/mentorship/' + advice.href}>
                                            <div className="rounded-lg bg-orange-500/[0.6] px-2 py-4 text-center">
                                                Learn more
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
