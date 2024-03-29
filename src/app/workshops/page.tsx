import diki from '@/assets/images/clients/Diki.png';
import diki2 from '@/assets/images/clients/Diki_2.png';
import ctb from '@/assets/images/clients/Logo_CTB.png';
import melnitsa from '@/assets/images/clients/Melnitsa.png';
import papaton from '@/assets/images/clients/papaton.svg';
import phoenix from '@/assets/images/clients/Phoenix.png';
import propellers from '@/assets/images/clients/propellers.png';
import riki from '@/assets/images/clients/riki_logo_20_main.png';
import rymanco from '@/assets/images/clients/Rymanco.png';
import soyuz from '@/assets/images/clients/Soyuzmultfilm.png';
import toonbox from '@/assets/images/clients/toonbox.png';
import wildbrain from '@/assets/images/clients/Wildbrain.png';
import Image from 'next/image';

export default function Workshops() {
    return (
        <section className="page-layout text-justify">
            <h1 className="page-header">Мастер классы</h1>
            {/* <div className="mx-auto h-60 w-full max-w-[480px] bg-white/[0.1] md:h-96 md:max-w-3xl"></div> */}
            <h2 className="text-center text-lg font-bold">
                Animating Success: Empower Your Team with ToonBoom Harmony Training!{' '}
            </h2>
            <p className="mx-auto max-w-5xl">
                Вы анимационная студия, стремящаяся обеспечить своих сотрудников необходимыми
                навыками для успешной работы в динамичном мире производства анимации? Не ищите
                дальше! В Harmony Dudes мы специализируемся на предоставлении первоклассного
                обучения, разработанного специально для профессионалов анимации, с акцентом на
                освоении Toon Boom Harmony, отраслевого стандарта в области 2D-анимации.{' '}
            </p>

            <h2 className="page-header">Почему выбрать нас?</h2>
            <ul className="mx-auto flex max-w-5xl list-inside list-disc flex-col gap-5">
                <li>
                    Наша экспертиза в индустрии анимации и глубокое понимание Toon Boom Harmony, в
                    сочетании с опытными профессионалами в качестве инструкторов, обеспечивает
                    непревзойденное качество обучения.
                </li>
                <li>
                    Путем настройки образовательных программ под индивидуальные потребности студии
                    мы предлагаем индивидуальные учебные планы для успешного введения новых
                    сотрудников или повышения квалификации текущего персонала.
                </li>
                <li>
                    Через методы практического обучения и интерактивные методики участники получают
                    теоретическое понимание и практический опыт, охватывая принципы анимации до
                    продвинутых техник.
                </li>
                <li>
                    Наши учебные программы регулярно обновляются для соответствия последним
                    тенденциям и технологиям отрасли, оснащая команды актуальными навыками для
                    успеха.
                </li>
                <li>
                    Помимо обучения, мы предлагаем постоянную поддержку клиентам, помогая решать
                    задачи и предоставляя руководство по применению навыков в реальных проектах.{' '}
                </li>
                <li>
                    Повысьте уровень вашей анимационной студии с помощью всестороннего обучения Toon
                    Boom Harmony от Harmony Dudes, и обратитесь к нам сегодня, чтобы обсудить ваши
                    образовательные потребности и начать ваш путь к успеху!
                </li>
            </ul>

            <div className="text-center">
                <button
                    className="button-lg-orange"
                    disabled={true}
                >
                    Подать заявку
                </button>
            </div>

            <h2 className="page-header">Наши счастливые клиенты</h2>
            <div className="grid grid-cols-1 gap-y-5 bg-white p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Diki studio"
                    src={diki2}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="CTB studio"
                    src={ctb}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Melnitsa studio"
                    src={melnitsa}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Papaton studio"
                    src={papaton}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Phoenix studio"
                    src={phoenix}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Propellers studio"
                    src={propellers}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Riki studio"
                    src={riki}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Rymanco studio"
                    src={rymanco}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Soyuzmultfilm studio"
                    src={soyuz}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Toonbox studio"
                    src={toonbox}
                />
                <Image
                    className="object-fit mx-auto my-auto"
                    width={128}
                    height={128}
                    alt="Wildbrain studio"
                    src={wildbrain}
                />
            </div>
        </section>
    );
}
