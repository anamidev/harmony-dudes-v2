import { type ICourse } from '@/lib/data/courses';
import Image from 'next/image';
import Link from 'next/link';

export default function Course_ru({ course }: { course: ICourse }) {
    return (
        <div className="relative mx-auto flex h-full w-full max-w-[309px] flex-col rounded-2xl bg-emerald-500/[0.15]">
            {/* image */}
            <div className="relative grid grid-cols-2">
                <div className="relative h-full min-h-[208px] w-full rounded-tl-2xl bg-white/[0.87]">
                    <Image
                        src={course.cover}
                        alt={course.name + ' cover'}
                        fill
                        className="object-cover"
                    />
                    <Image
                        src={course.softwareLogo}
                        alt={course.name + ' software'}
                        width={40}
                        height={40}
                        className="absolute right-0"
                    />
                </div>
                <div className="flex flex-col rounded-tr-2xl bg-yellow-400 pt-2 text-orange-700">
                    <h4 className="grow self-center text-center text-lg font-bold uppercase">
                        {course.name}
                    </h4>
                    <div className="flex flex-col">
                        {course.mentors.map((mentor) => (
                            <Link
                                href={'/mentor/' + mentor.href}
                                key={mentor.name}
                                className="flex flex-col flex-wrap items-center justify-center p-1 transition hover:bg-orange-600/[0.25]"
                            >
                                <Image
                                    alt={mentor.name + ' photo'}
                                    src={mentor.photo}
                                    className="h-8 w-8 rounded-full"
                                />
                                <h5 className="self-center text-center text-sm font-bold">
                                    {mentor.name}
                                </h5>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* body */}
            <div className="flex grow flex-col gap-3 p-3">
                <h4 className="text-center text-lg font-bold">{course.title}</h4>
                <p className="grow text-justify">{course.description}</p>
                <div className="justify-self-end">
                    <ul className="grid grid-rows-4 gap-2">
                        {course.classes.map((courseClass) =>
                            courseClass.href ? (
                                <li key={courseClass.href}>
                                    <Link
                                        className="block cursor-pointer rounded-lg bg-[#ca8a04]/[0.7] px-2 py-2 font-bold uppercase transition hover:bg-[#ca8a04]/[1]"
                                        href={'/course/' + courseClass.href}
                                    >
                                        {courseClass.level}
                                    </Link>
                                </li>
                            ) : (
                                <div
                                    key={courseClass.href}
                                    className="h-10"
                                ></div>
                            ),
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
