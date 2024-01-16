import { ECategory, ECategory_ru } from '@/lib/data/courses';
import Link from 'next/link';

export default function RunningText({
    openCourses,
    isAnimated = false,
}: {
    openCourses: {
        name: string;
        category: ECategory | ECategory_ru;
    }[];
    isAnimated?: boolean;
}) {
    return (
        <div
            className={`flex items-center gap-2 whitespace-nowrap py-2 ${
                isAnimated ? 'text-animation flex-nowrap' : 'flex-wrap'
            }`}
        >
            <span className="uppercase">Open courses: </span>
            {openCourses.length !== 0 ? (
                openCourses.map((course) => (
                    <Link
                        key={course.name}
                        href={'/#' + course.category}
                        className="button-sm-orange"
                    >
                        {course.name}
                    </Link>
                ))
            ) : (
                <span>to be announed!</span>
            )}
        </div>
    );
}
