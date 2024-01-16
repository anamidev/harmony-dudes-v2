import { categories, type ICategory, type ICourse } from '@/lib/data/courses';
import Link from 'next/link';
import Course from '@/components/Course';

export default function About() {
    return (
        <section className="page-layout snap-y snap-y scroll-mt-10">
            {/* intro */}
            <h1 className="page-header">About</h1>
            <p>
                Hi Dudes! We are Toon Boom Harmony pros and true fans of animation! The art of
                bringing characters to life and crafting stories profoundly inspires us. Our
                relentless passion for every pixel of the animation process empowers us to create
                captivating visual experiences and inspire the next generation of animators. Join us
                in exploring the captivating world of animation, where each stage unveils boundless
                creative opportunities!
            </p>

            {/* categories */}
            <h2 className="page-header">Categories</h2>
            <ul className="flex flex-wrap justify-center gap-5">
                {categories.map((mtshp) => (
                    <li
                        key={mtshp.id}
                        className="button-sm-orange"
                    >
                        <Link href={'#' + mtshp.category}>{mtshp.category}</Link>
                    </li>
                ))}
            </ul>
            {categories.map((mtshp: ICategory) => (
                <div
                    key={mtshp.id}
                    className="grid grid-cols-1 gap-6"
                >
                    <h3
                        className="snap-start scroll-mt-32 font-['Rubik_Dirt'] text-2xl"
                        id={mtshp.category}
                    >
                        {mtshp.category}
                    </h3>
                    <p>{mtshp.description}</p>
                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {mtshp.courses.map((course: ICourse) => (
                            <li key={course.name}>
                                <Course course={course} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
