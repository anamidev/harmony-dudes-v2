import Link from 'next/link';
import Image from 'next/image';
import { type IMentor } from '@/lib/data/mentors';

export default function Mentor({ mentor }: { mentor: IMentor }) {
    return (
        <div className="mx-auto h-full max-w-md rounded-2xl bg-emerald-500/[0.15] p-6">
            <div className="mx-auto flex h-full max-w-lg flex-col gap-1">
                <div className="h-40 w-40 self-center md:h-40 md:w-40">
                    <Link href={'/mentor/' + mentor.href}>
                        <Image
                            src={mentor.photo}
                            alt={mentor.name + ' photo'}
                            className="rounded-full transition-all hover:outline hover:outline-[#ca8a04]"
                        />
                    </Link>
                </div>
                <h3 className="self-center text-2xl">{mentor.name}</h3>
                <h4 className="self-center text-[#cfcfcf]">{mentor.jobTitle}</h4>
                <p className="self-center text-justify">{mentor.description}</p>
                <h5 className="pt-2 text-xl">Текущая студия</h5>
                <p>{mentor.currentStudio}</p>
                <h5 className="pt-2 text-xl">Проекты</h5>
                <p>{mentor.projectsWorkedOn}</p>

                {mentor.categories.length !== 0 ? (
                    <>
                        <h5 className="pt-2 text-xl">Направления</h5>
                        <div className="flex flex-wrap items-center gap-2">
                            {/* {mentor.categories.map((cat) => (
                                <p
                                    key={cat}
                                    className="text-[#ffad00]"
                                >
                                    {cat}
                                </p>
                            ))} */}
                            <p className="text-lg text-[#ffad00]">{mentor.categories.join(', ')}</p>
                        </div>
                    </>
                ) : null}

                <h5 className="pt-2 text-xl">Курсы ментора</h5>
                {mentor.courses.length !== 0 ? (
                    <ul className="flex flex-col gap-2">
                        {mentor.courses.map((course) => (
                            <li
                                key={course.name}
                                className="relative flex items-center gap-2"
                            >
                                <Image
                                    src={course.softwareLogo}
                                    alt={course.name}
                                    width={32}
                                    height={32}
                                />
                                <Link
                                    href={'/#' + course.category}
                                    className="button-sm-orange inline-block"
                                >
                                    {course.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-[#ffad00]">Скоро откроются</p>
                )}

                {/* <div className="flex grow items-end justify-center pt-2">
                    <Link href={'/mentor/' + mentor.href}>
                        <button className="button-lg-orange">Узнать больше</button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
}
