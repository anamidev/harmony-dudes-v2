import { classes_ru } from '@/lib/data/courses';
import Link from 'next/link';
import EmailToClipboard_ru from '@/components/EmailToClipboard_ru';

export async function generateStaticParams() {
    const paths: { course: string }[] = [];
    for (let key in classes_ru) {
        paths.push({ course: key });
    }

    return paths;
}

export default function Course_ru({ params }: { params: { course: string } }) {
    const { course: coursePath } = params;
    const currentClass = classes_ru[coursePath];

    return !currentClass ? (
        <section className="flex min-h-[calc(100vh-209px)] flex-col items-center justify-center gap-3">
            <p>Такой курс не найден :( </p>
            <Link
                href={'/mentorship'}
                className="button-sm-orange"
            >
                К списку
            </Link>
        </section>
    ) : (
        <section className="page-layout">
            {/* cover */}
            <div className="mx-auto h-60 w-full max-w-[480px] bg-white/[0.1] md:h-96 md:max-w-full"></div>

            {/* name */}
            <h1 className={"text-center font-['Rubik_Dirt'] text-2xl md:text-4xl"}>
                {currentClass.name}
            </h1>
            <h2 className={'page-header'}>Ментор: {currentClass.mentor.name}</h2>
            <p className="mx-auto max-w-5xl whitespace-pre-line">{currentClass.description}</p>

            {/* short info */}
            <div className="flex flex-col items-center gap-5 rounded-2xl bg-emerald-500/[0.2] p-10">
                {currentClass.isOpen ? (
                    <div className="rounded-2xl bg-emerald-500 px-4 py-2 uppercase">
                        Открыт набор
                    </div>
                ) : null}

                <div className="flex flex-col justify-center gap-10 md:flex-row">
                    <div>
                        <h2 className="text-lg">Длительность</h2>
                        <p className="">{currentClass.duration}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Цена</h2>
                        <p className="">{currentClass.price}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Способы оплаты</h2>
                        <p className="">{currentClass.paymentMethods.join(', ')}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Софт</h2>
                        <p className="">{currentClass.software}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 md:w-full md:flex-row md:justify-around">
                    <button className="button-lg-orange">Частный курс</button>
                    <button className="button-lg-orange">Групповой курс</button>
                </div>
            </div>

            {/* requirements */}
            <h2 className={'page-header'}>Требования</h2>
            {currentClass.requirements.description ? (
                <p className="mx-auto max-w-5xl whitespace-pre-line">
                    {currentClass.requirements.description}
                </p>
            ) : null}
            {currentClass.requirements.data.length !== 0 ? (
                <ul className="mx-auto w-full max-w-5xl list-inside list-disc">
                    {currentClass.requirements.data.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">К этому курсу нет требований. Можно сразу начинать!</p>
            )}

            {/* schedule */}
            <h2 className="page-header">Учебный план</h2>
            {currentClass.weeks.description ? (
                <p className="mx-auto max-w-5xl whitespace-pre-line">
                    {currentClass.weeks.description}
                </p>
            ) : null}
            {currentClass.weeks.data.length !== 0 ? (
                <ul className="mx-auto flex max-w-5xl flex-col gap-5 whitespace-pre-line">
                    {currentClass.weeks.data.map((week, index) => (
                        <li key={week}>
                            <h3 className="text-lg underline decoration-dotted">
                                Неделя {index + 1}
                            </h3>
                            <p>{week}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">Программа обучения будет объявлена в ближайшее время!</p>
            )}

            {/* result */}
            <h2 className="page-header">Почему стоит пройти этот курс?</h2>
            {currentClass.result.description ? (
                <p className="mx-auto max-w-5xl whitespace-pre-line">
                    {currentClass.result.description}
                </p>
            ) : null}
            {currentClass.result.data.length !== 0 ? (
                <ul className="mx-auto w-full max-w-5xl list-inside list-disc">
                    {currentClass.result.data.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">
                    Вы получите глубокие знания и обретете уверенность в себе!
                </p>
            )}

            <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-2xl bg-emerald-500/[0.2] p-10">
                {currentClass.isOpen ? (
                    <div className="rounded-2xl bg-emerald-500 px-4 py-2 uppercase">
                        Открыт набор
                    </div>
                ) : null}

                <p className='text-xl'>Отправьте заявку и начните курс</p>

                <div className="flex flex-col gap-5 md:w-full md:flex-row md:justify-around">
                    <button className="button-lg-orange">Частный курс</button>
                    <button className="button-lg-orange">Групповой курс</button>
                </div>
            </div>

            {/* help section */}
            <h2 className="page-header">Нужна помощь?</h2>
            <p className="mx-auto max-w-xl text-center">
                Если у вас есть какие-либо вопросы или вам нужна помощь с оплатой, пожалуйста,
                обратитесь в нашу службу поддержки. Мы здесь, чтобы помочь.
            </p>
            <div className="text-center text-lg">
                {/* harmonydudes@gmail.com */}
                <EmailToClipboard_ru
                    email="harmonydudes@gmail.com"
                    classStyle="link-purple"
                />
            </div>
        </section>
    );
}
