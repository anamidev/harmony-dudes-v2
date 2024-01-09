import { mentorship, type IMentorship } from '@/lib/data/mentorship';
import { type IAdvice } from '@/lib/data/advices';
import Link from 'next/link';
import Advice from '@/components/Advice';

export default function Mentorship() {
    return (
        <section className="page-layout snap-y snap-y scroll-mt-10">
            {/* intro */}
            <h1 className="page-header">Our mentorship</h1>
            <p>
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
                        className="button-sm-orange"
                    >
                        <Link href={'#' + mtshp.category}>{mtshp.category}</Link>
                    </li>
                ))}
            </ul>
            {mentorship.map((mtshp: IMentorship) => (
                <div
                    key={mtshp.id}
                    className="grid grid-cols-1 gap-6"
                >
                    <h3
                        className="snap-start scroll-mt-24 font-['Rubik_Dirt'] text-2xl"
                        id={mtshp.category}
                    >
                        {mtshp.category}
                    </h3>
                    <p>{mtshp.description}</p>
                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {mtshp.advices.map((advice: IAdvice) => (
                            <li key={advice.name}>
                                <Advice advice={advice} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
