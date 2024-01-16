import { ECategory, ECategory_ru } from '@/lib/data/courses';
import Link from 'next/link';

export default function RunningText_ru({
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
            <span className="uppercase">Идет набор: </span>
            {openCourses.length !== 0 ? (
                openCourses.map((course) => (
                    <Link
                        key={course.name}
                        href={'/ru#' + course.category}
                        className="button-sm-orange"
                    >
                        {course.name}
                    </Link>
                ))
            ) : (
                <span>скоро будет объявлено!</span>
            )}
        </div>
    );
}
