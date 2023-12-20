import Link from 'next/link';
import Image from 'next/image';
import { mentors, type IMentor } from '@/lib/data/mentors';

export default function About() {
    return (
        <section className="page-layout">
            {/* about */}
            <h1 className="page-header">Who are we?</h1>
            <p className="mx-auto max-w-4xl">
                Hi Dudes! We are Toon Boom Harmony pros and true fans of animation! The art of
                bringing characters to life and crafting stories profoundly inspires us. Our
                relentless passion for every pixel of the animation process empowers us to create
                captivating visual experiences and inspire the next generation of animators. Join us
                in exploring the captivating world of animation, where each stage unveils boundless
                creative opportunities!
            </p>

            {/* mentors */}
            <h2 className="page-header">Our mentors</h2>
            <ul className="mx-auto grid h-full max-w-5xl grid-cols-2 gap-12">
                {mentors.map((mentor: IMentor) => (
                    <li key={mentor.id}>
                        <div className="block h-full rounded-2xl bg-emerald-500/[0.1] p-4 hover:bg-emerald-500/[0.2]">
                            <div className="mx-auto flex h-full max-w-lg flex-col gap-1">
                                <div className="h-48 w-48 self-center">
                                    <Image
                                        src={mentor.photo}
                                        alt={mentor.name + ' photo'}
                                        className="rounded-full"
                                    />
                                </div>
                                <h3 className="self-center text-2xl">{mentor.name}</h3>
                                <h4 className="text-md self-center text-white/[0.7]">
                                    {mentor.jobTitle}
                                </h4>
                                <p className="self-center pt-2">{mentor.description}</p>
                                <h5 className="pt-2 text-xl">Current studio</h5>
                                <p>{mentor.currentStudio}</p>
                                <h5 className="pt-2 text-xl">Projects worked on</h5>
                                <p>{mentor.projectsWorkedOn}</p>
                                <h5 className="pt-2 text-xl">Mentor's Advices</h5>
                                <ul className="flex flex-wrap gap-2">
                                    {mentor.advices.map((advice) => (
                                        <li
                                            key={advice.href}
                                            className="rounded-lg bg-orange-500/[0.6] px-4 py-2"
                                        >
                                            <Link
                                                href={'/mentorship/' + advice.href}
                                                className="block"
                                            >
                                                {advice.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <div className="flex grow items-end justify-center pt-2">
                                    <Link href={mentor.href}>
                                        <button className="rounded-lg bg-orange-500/[0.6] px-8 py-4" disabled={true}>
                                            Read more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

            {/* contacts */}
            <h2 className="page-header">Contacts</h2>
            <p className="mx-auto max-w-5xl">
                If you have any questions about our workshops, schedules, or any other aspects,
                don't hesitate to reach out. Simply drop us an email with your questions and we will
                be delighted to provide you with all the information you need to embark on your
                exciting animation learning journey.
            </p>
            <p className="text-center">harmonydudes@gmail.com</p>
        </section>
    );
}
