import { mentors } from '@/lib/data/mentors';
import { advices } from '@/lib/data/advices';
import Link from 'next/link';
import Image from 'next/image';
import EmailToClipboard from '@/components/EmailToClipboard';
import Advice from '@/components/Advice';
import MentorContact from '@/components/MentorContact';

export async function generateStaticParams() {
    const paths: { mentor: string }[] = [];
    for (let key in mentors) {
        paths.push({ mentor: key });
    }

    return paths;
}

export default function Mentor({ params }: { params: { mentor: string } }) {
    const { mentor: mentorPath } = params;
    const currentMentor = mentors[mentorPath];

    return !currentMentor ? (
        <section className="flex min-h-[calc(100vh-209px)] flex-col items-center justify-center gap-3">
            <p>Sorry, there is no such mentor :( </p>
            <Link
                href={'/'}
                className="button-sm-orange"
            >
                Back to main
            </Link>
        </section>
    ) : (
        <section className="page-layout">
            {/* name & job title */}
            <div className="mx-auto flex items-center gap-6">
                <div>
                    {/* photo */}
                    <div className="mx-auto h-48 w-48 self-center">
                        <Image
                            src={currentMentor.photo}
                            alt={currentMentor.name + ' photo'}
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <h1 className={'text-center font-["Rubik_Dirt"] text-4xl'}>
                        {currentMentor.name}
                    </h1>
                    <h2 className={'text-center text-2xl'}>{currentMentor.jobTitle}</h2>
                </div>
                {/* character image */}
                <div className="h-48 w-48 rounded-full bg-white/[0.1]"></div>
            </div>

            {/* short info */}
            <div className="mx-auto flex max-w-2xl flex-col gap-6">
                <div>
                    <p className="">{currentMentor.description}</p>
                </div>
                <div>
                    <h3 className="text-xl">Current Studio</h3>
                    <p>{currentMentor.currentStudio}</p>
                </div>
                <div>
                    <h3 className="text-xl">Projects worked on</h3>
                    <p>{currentMentor.projectsWorkedOn}</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <h3 className="text-xl">Contacts:</h3>
                    <ul className="flex items-center gap-3">
                        {currentMentor.contacts.map((contact) => (
                            <li key={contact.id}>
                                <MentorContact contact={contact}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* introduction video */}
            <div className="max-h-lg mx-auto h-96 w-[720px] bg-white/[0.1]"></div>

            <h3 className="page-header">Mentor's advices</h3>
            <ul className="grid grid-cols-3 gap-6">
                {currentMentor.advices.map((advice) => (
                    <li key={advice.name}>
                        <Advice advice={advices[advice.href]} />
                    </li>
                ))}
            </ul>

            <h3 className="page-header">Mentor's work</h3>
            <ul className="grid grid-cols-3 gap-5">
                <li className="h-52 w-full rounded-2xl bg-white/[0.1]"></li>
                <li className="h-52 w-full rounded-2xl bg-white/[0.1]"></li>
                <li className="h-52 w-full rounded-2xl bg-white/[0.1]"></li>
                <li className="h-52 w-full rounded-2xl bg-white/[0.1]"></li>
                <li className="h-52 w-full rounded-2xl bg-white/[0.1]"></li>
            </ul>

            <h3 className="page-header">Students' work</h3>
            <ul className="grid grid-cols-3 gap-5">
                <li className="h-52 w-full rounded-2xl bg-white/[0.1]"></li>
                <li className="h-52 w-full rounded-2xl bg-white/[0.1]"></li>
                <li className="h-52 w-full rounded-2xl bg-white/[0.1]"></li>
            </ul>

            <h3 className="page-header">Testimonials</h3>
            <ul className="grid grid-cols-3 gap-5">
                <li className="mx-auto flex flex-col items-center gap-3">
                    <div className="h-32 w-32 rounded-full bg-white/[0.1]"></div>
                    <h3>Aleksandra</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                </li>
                <li className="mx-auto flex flex-col items-center gap-3">
                    <div className="h-32 w-32 rounded-full bg-white/[0.1]"></div>
                    <h3>Petr</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                </li>
                <li className="mx-auto flex flex-col items-center gap-3">
                    <div className="h-32 w-32 rounded-full bg-white/[0.1]"></div>
                    <h3>Aleksei</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                </li>
            </ul>
        </section>
    );
}
