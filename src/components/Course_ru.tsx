import Badge_ru from '@/components/Badge_ru';
import { type ICourse } from '@/lib/data/courses';
import Image from 'next/image';
import Link from 'next/link';

export default function Course_ru({ course }: { course: ICourse }) {
    return (
        <div className="relative mx-auto flex h-full w-full max-w-[309px] flex-col rounded-2xl bg-emerald-500/[0.15]">
            {/* badge */}
            {/* <Badge_ru isVisible={course.isOpen ?? false} /> */}

            {/* image */}
            {/* <div className="relative h-52 w-full rounded-tl-2xl rounded-tr-2xl bg-white/[0.87]">
                <Image
                    src={course.cover}
                    alt={course.name + ' cover'}
                    fill
                    className="object-cover"
                />
            </div> */}

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
                <div className="flex flex-col rounded-tr-2xl bg-yellow-400 p-2 text-orange-700">
                    <h4 className="grow self-center text-center text-lg font-bold">
                        {course.name}
                    </h4>
                    <div>
                        {course.mentors.map((mentor) => (
                            <div
                                key={mentor.name}
                                className="flex flex-wrap items-center justify-center gap-2"
                            >
                                <Image
                                    alt={mentor.name + ' photo'}
                                    src={mentor.photo}
                                    className="h-8 w-8 rounded-full"
                                />
                                <h5 className="self-center">{mentor.name}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* body */}
            <div className="flex grow flex-col gap-3 p-3">
                {/* <h4 className="self-center text-center text-xl">{course.name}</h4>
                {course.mentors.map((mentor) => (
                    <div
                        key={mentor.name}
                        className="flex flex-wrap items-center justify-center gap-2"
                    >
                        <Image
                            alt={mentor.name + ' photo'}
                            src={mentor.photo}
                            className="h-8 w-8 rounded-full"
                        />
                        <h5 className="self-center text-xl">{mentor.name}</h5>
                    </div>
                ))} */}
                <p className="grow">{course.description}</p>
                <div className="justify-self-end">
                    {/* <div className="grid grid-cols-2 pb-4">
                        <div>
                            <h5 className="text-lg">Длительность</h5>
                            <p>{course.duration}</p>
                        </div>
                        <div>
                            <h5 className="text-lg">Цена</h5>
                            <p>{course.price}</p>
                        </div>
                    </div>
                    <Link href={'/course/' + course.href}>
                        <div className="button-lg-orange text-center">Узнать больше</div>
                    </Link> */}
                    <ul className="flex flex-col gap-2">
                        {course.classes.map((courseClass) => (
                            <li key={courseClass.href}>
                                <Link
                                    className="block cursor-pointer rounded-lg bg-[#ca8a04]/[0.7] px-2 py-2 text-center transition hover:bg-[#ca8a04]/[1]"
                                    href={'/course/' + courseClass.href}
                                >
                                    {courseClass.level}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
