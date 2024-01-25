import Badge from '@/components/Badge';
import { type ICourse } from '@/lib/data/courses';
import Image from 'next/image';
import Link from 'next/link';

export default function Course({ course }: { course: ICourse }) {
    return (
        <div className="relative mx-auto flex h-full w-full max-w-[309px] flex-col rounded-2xl bg-emerald-500/[0.15]">
            {/* badge */}
            {/* <Badge isVisible={course.isOpen ?? false} /> */}

            {/* image */}
            <div className="relative h-52 w-full rounded-tl-2xl rounded-tr-2xl bg-white/[0.1]">
                <Image
                    src={course.cover}
                    alt={course.name + ' cover'}
                    fill
                    className="object-contain"
                />
            </div>

            {/* body */}
            <div className="flex grow flex-col gap-3 p-3">
                <h4 className="self-center text-center text-xl">{course.name}</h4>
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
                ))}
                <p className="grow">{course.description}</p>
                <div className="justify-self-end">
                    {/* <div className="grid grid-cols-2 pb-4">
                        <div>
                            <h5 className="text-lg">Duration</h5>
                            <p>{course.duration}</p>
                        </div>
                        <div>
                            <h5 className="text-lg">Price</h5>
                            <p>{course.price}</p>
                        </div>
                    </div> */}
                    {/* <Link href={'/en/course/' + course.href}>
                        <div className="button-lg-orange text-center">Learn more</div>
                    </Link> */}
                    <ul className="grid grid-cols-3 gap-1">
                        {course.classes.map((courseClass) => (
                            <li key={courseClass.href}>
                                <Link
                                    className="block cursor-pointer rounded-lg bg-[#ca8a04]/[0.7] px-2 py-2 text-center hover:bg-[#ca8a04]/[1]"
                                    href={'/en/course/' + courseClass.href}
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
