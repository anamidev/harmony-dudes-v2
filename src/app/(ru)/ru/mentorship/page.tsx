import { mentorship_ru, type IMentorship } from '@/lib/data/mentorship';
import { type IAdvice } from '@/lib/data/advices';
import Link from 'next/link';
import Advice_ru from '@/components/Advice_ru';

export default function Mentorship() {
    return (
        <section className="page-layout snap-y snap-y scroll-mt-10">
            {/* intro */}
            <h1 className="page-header">Наше менторство</h1>
            <p>
                Выберите свой собственный путь в мире анимации! Наши опытные наставники окажут вам
                индивидуальное руководство, помогут вам сориентироваться и улучшить техники
                анимации, раскадровки, риггов персонажей и помощи ИИ в современной индустрии.
                Присоединяйтесь к нам, чтобы получить ценные знания и поднять ваш творческий
                потенциал на новый уровень в мире анимации.
            </p>

            {/* categories */}
            <h2 className="page-header">Категории</h2>
            <ul className="flex flex-wrap justify-center gap-5">
                {mentorship_ru.map((mtshp) => (
                    <li
                        key={mtshp.id}
                        className="button-sm-orange"
                    >
                        <Link href={'#' + mtshp.category}>{mtshp.category}</Link>
                    </li>
                ))}
            </ul>
            {mentorship_ru.map((mtshp: IMentorship) => (
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
                    <p>{mtshp.description}</p>
                    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {mtshp.advices.map((advice: IAdvice) => (
                            <li key={advice.name}>
                                <Advice_ru advice={advice} />
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}
