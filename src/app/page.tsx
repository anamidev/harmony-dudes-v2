import { categories_ru, type ICategory, type ICourse } from '@/lib/data/courses';
import Link from 'next/link';
import Course_ru from '@/components/Course_ru';

export default function About() {
    return (
        <section className="page-layout snap-y snap-y scroll-mt-10">
            {/* intro */}
            <h1 className="page-header">Кто мы?</h1>
            <p className="text-justify">
                Привет, ребятки! Мы - профи Toon Boom Harmony и настоящие фанаты анимации! Нас
                завораживает искусство оживления персонажей и создания историй, и мы можем научить
                этому вас. Наша неутомимая страсть к каждому пикселю анимационного процесса
                позволяет создавать захватывающие визуальные образы и вдохновлять новое поколение
                аниматоров. Присоединяйтесь к нам в исследовании увлекательного мира анимации, где
                каждый этап открывает безграничные творческие возможности и профессии!
            </p>

            {/* categories */}
            <h2 className="page-header">Категории</h2>
            <ul className="flex flex-wrap justify-center gap-5">
                {categories_ru.map((mtshp) => (
                    <li
                        key={mtshp.id}
                        className="button-sm-orange"
                    >
                        <Link href={'#' + mtshp.category}>{mtshp.category}</Link>
                    </li>
                ))}
            </ul>
            {categories_ru.map((mtshp: ICategory) => (
                <div
                    key={mtshp.id}
                    className="grid grid-cols-1 gap-6"
                >
                    <h3
                        className="snap-start scroll-mt-24 font-['Rubik_Dirt'] text-2xl"
                        id={mtshp.category}
                    >
                        {mtshp.category}
                    </h3>
                    {mtshp.description ? <p>{mtshp.description}</p> : null}

                    {mtshp.courses.length !== 0 ? (
                        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {mtshp.courses.map((course: ICourse) => (
                                <li key={course.name}>
                                    <Course_ru course={course} />
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Скоро здесь появятся новые курсы. Следите за обновлениями!</p>
                    )}
                </div>
            ))}
        </section>
    );
}
