import { mentors_ru } from '@/lib/data/mentors';
import { courses_ru } from '@/lib/data/courses';
import Link from 'next/link';
import Image from 'next/image';
import Course_ru from '@/components/Course_ru';
import MentorContact_ru from '@/components/MentorContact_ru';

export async function generateStaticParams() {
    const paths: { mentor: string }[] = [];
    for (let key in mentors_ru) {
        paths.push({ mentor: key });
    }

    return paths;
}

export default function Mentor({ params }: { params: { mentor: string } }) {
    const { mentor: mentorPath } = params;
    const currentMentor = mentors_ru[mentorPath];

    return !currentMentor ? (
        <section className="flex min-h-[calc(100vh-209px)] flex-col items-center justify-center gap-3">
            <p>Такой ментор не найден :( </p>
            <Link
                href={'/mentorship'}
                className="button-sm-orange"
            >
                На главную
            </Link>
        </section>
    ) : (
        <section className="page-layout">
            {/* name & job title */}
            <div className="mx-auto flex flex-col items-center gap-6 md:flex-row">
                <div>
                    {/* photo */}
                    <div className="mx-auto h-40 w-40 self-center md:h-48 md:w-48">
                        <Image
                            src={currentMentor.photo}
                            alt={currentMentor.name + ' photo'}
                            className="rounded-full"
                        />
                    </div>
                </div>
                <div>
                    <h1 className={'text-center font-["Rubik_Dirt"] text-2xl md:text-4xl'}>
                        {currentMentor.name}
                    </h1>
                    <h2 className={'text-center text-xl md:text-2xl'}>{currentMentor.jobTitle}</h2>
                    <div className="flex justify-center gap-2 pt-2">
                        {currentMentor.software.map((soft, index) => (
                            <Image
                                src={soft}
                                alt="Software"
                                aria-disabled
                                key={index}
                                width={32}
                                height={32}
                            />
                        ))}
                    </div>
                </div>
                {/* character image */}
                <div className="hidden h-48 w-48 rounded-full md:block"></div>
            </div>

            {/* short info */}
            <div className="mx-auto flex max-w-2xl flex-col gap-6">
                <div>
                    <p className="">{currentMentor.description}</p>
                </div>
                <div>
                    <h3 className="text-xl">Текущая студия</h3>
                    <p>{currentMentor.currentStudio}</p>
                </div>
                <div>
                    <h3 className="text-xl">Проекты</h3>
                    <p>{currentMentor.projectsWorkedOn}</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <h3 className="text-xl">Контакты:</h3>
                    <ul className="flex items-center gap-3">
                        {currentMentor.contacts.map((contact) => (
                            <li key={contact.id}>
                                <MentorContact_ru contact={contact} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* introduction video */}
            {/* <div className="mx-auto h-60 w-full max-w-[480px] bg-white/[0.1] md:h-96 md:w-full md:max-w-[720px]"></div> */}
            {currentMentor.introVideo ? (
                <div>
                    <div
                        style={{
                            position: 'relative',
                            paddingTop: '350px',
                            overflow: 'hidden',
                            maxWidth: '624px',
                            maxHeight: '360px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                    >
                        <iframe
                            src={currentMentor.introVideo}
                            allowFullScreen={true}
                            allow="autoplay; fullscreen; picture-in-picture"
                            width={'960'}
                            height={'569'}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </div>
                </div>
            ) : null}

            <h3 className="page-header">Курсы ментора</h3>
            {currentMentor.courses.length !== 0 ? (
                <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {currentMentor.courses.map((course) => (
                        <li key={course.name}>
                            <Course_ru course={courses_ru[course.propName]} />
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">
                    Скоро у ментора появятся курсы. Следите за обновлениями!
                </p>
            )}

            {/* <h3 className="page-header">Работы ментора</h3>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <li className="mx-auto h-52 w-full max-w-[312px] rounded-2xl bg-white/[0.1]"></li>
                <li className="mx-auto h-52 w-full max-w-[312px] rounded-2xl bg-white/[0.1]"></li>
                <li className="mx-auto h-52 w-full max-w-[312px] rounded-2xl bg-white/[0.1]"></li>
                <li className="mx-auto h-52 w-full max-w-[312px] rounded-2xl bg-white/[0.1]"></li>
                <li className="mx-auto h-52 w-full max-w-[312px] rounded-2xl bg-white/[0.1]"></li>
            </ul> */}

            {/* <h3 className="page-header">Работы студентов</h3>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <li className="mx-auto h-52 w-full max-w-[312px] rounded-2xl bg-white/[0.1]"></li>
                <li className="mx-auto h-52 w-full max-w-[312px] rounded-2xl bg-white/[0.1]"></li>
                <li className="mx-auto h-52 w-full max-w-[312px] rounded-2xl bg-white/[0.1]"></li>
            </ul> */}

            {/* <h3 className="page-header">Отзывы</h3>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <li className="mx-auto flex flex-col items-center gap-3">
                    <div className="h-32 w-32 rounded-full bg-white/[0.1]"></div>
                    <h3>Александра</h3>
                    <p className="mx-auto max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                </li>
                <li className="mx-auto flex flex-col items-center gap-3">
                    <div className="h-32 w-32 rounded-full bg-white/[0.1]"></div>
                    <h3>Петр</h3>
                    <p className="mx-auto max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                </li>
                <li className="mx-auto flex flex-col items-center gap-3">
                    <div className="h-32 w-32 rounded-full bg-white/[0.1]"></div>
                    <h3>Алексей</h3>
                    <p className="mx-auto max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                </li>
            </ul> */}
        </section>
    );
}
