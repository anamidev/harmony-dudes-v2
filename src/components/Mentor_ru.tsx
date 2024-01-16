import Link from 'next/link';
import Image from 'next/image';
import { type IMentor } from '@/lib/data/mentors';

export default function Mentor({ mentor }: { mentor: IMentor }) {
    return (
        <div className="mx-auto h-full max-w-md rounded-2xl bg-emerald-500/[0.15] p-6">
            <div className="mx-auto flex h-full max-w-lg flex-col gap-1">
                <div className="h-40 w-40 self-center md:h-40 md:w-40">
                    <Link href={'/ru/mentor/' + mentor.href}>
                        <Image
                            src={mentor.photo}
                            alt={mentor.name + ' photo'}
                            className="rounded-full transition-all hover:outline hover:outline-[#ca8a04]"
                        />
                    </Link>
                </div>
                <h3 className="self-center text-2xl">{mentor.name}</h3>
                <h4 className="self-center text-[#cfcfcf]">{mentor.jobTitle}</h4>
                <p className="self-center">{mentor.description}</p>
                <h5 className="pt-2 text-xl">Текущая студия</h5>
                <p>{mentor.currentStudio}</p>
                <h5 className="pt-2 text-xl">Проекты</h5>
                <p>{mentor.projectsWorkedOn}</p>
                <div className="flex flex-wrap items-center gap-2 pt-2">
                    <h5 className="text-xl">Направления:</h5>
                    {mentor.categories.map((cat) => (
                        <p
                            key={cat}
                            className="rounded-lg bg-[#ac46b6]/[0.7] px-4 py-2"
                        >
                            {cat}
                        </p>
                    ))}
                </div>
                <h5 className="pt-2 text-xl">Курсы ментора</h5>
                <ul className="flex flex-wrap gap-2">
                    {mentor.courses.map((course) => (
                        <li
                            key={course.name}
                            className="button-sm-orange"
                        >
                            <Link
                                href={'/ru#' + course.category}
                                className="block"
                            >
                                {course.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* <div className="flex grow items-end justify-center pt-2">
                    <Link href={'/ru/mentor/' + mentor.href}>
                        <button className="button-lg-orange">Узнать больше</button>
                    </Link>
                </div> */}
            </div>
        </div>
    );
}
