import { advices_ru } from '@/lib/data/advices';
import Link from 'next/link';
import EmailToClipboard_ru from '@/components/EmailToClipboard_ru';

export async function generateStaticParams() {
    const paths: { advice: string }[] = [];
    for (let key in advices_ru) {
        paths.push({ advice: key });
    }

    return paths;
}

export default function Advice({ params }: { params: { advice: string } }) {
    const { advice: advicePath } = params;
    const currentAdvice = advices_ru[advicePath];

    return !currentAdvice ? (
        <section className="flex min-h-[calc(100vh-209px)] flex-col items-center justify-center gap-3">
            <p>Такой адвайс не найден :( </p>
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
                {currentAdvice.name}
            </h1>
            <h2 className={'page-header'}>Ментор: {currentAdvice.mentor.name}</h2>
            <p className="mx-auto max-w-5xl whitespace-pre-line">{currentAdvice.description}</p>

            {/* short info */}
            <div className="flex flex-col items-center gap-5 rounded-2xl bg-emerald-500/[0.2] p-10">
                {currentAdvice.isOpen ? (
                    <div className="rounded-2xl bg-emerald-500 px-4 py-2 uppercase">
                        Открыт набор
                    </div>
                ) : null}

                <div className="flex flex-col justify-center gap-10 md:flex-row">
                    <div>
                        <h2 className="text-lg">Длительность</h2>
                        <p className="">{currentAdvice.duration}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Цена</h2>
                        <p className="">{currentAdvice.price}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Способы оплаты</h2>
                        <p className="">{currentAdvice.paymentMethods.join(', ')}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Софт</h2>
                        <p className="">{currentAdvice.software}</p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="button-lg-orange">Подать заявку</button>
                </div>
            </div>

            {/* requirements */}
            <h2 className={'page-header'}>Требования</h2>
            {currentAdvice.requirements.description ? (
                <p className="mx-auto max-w-5xl whitespace-pre-line">
                    {currentAdvice.requirements.description}
                </p>
            ) : null}
            {currentAdvice.requirements.data.length !== 0 ? (
                <ul className="mx-auto w-full max-w-5xl list-inside list-disc">
                    {currentAdvice.requirements.data.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">К этому адвайсу нет требований. Можно сразу начинать!</p>
            )}

            {/* schedule */}
            <h2 className="page-header">Учебный план</h2>
            {currentAdvice.weeks.description ? (
                <p className="mx-auto max-w-5xl whitespace-pre-line">
                    {currentAdvice.weeks.description}
                </p>
            ) : null}
            {currentAdvice.weeks.data.length !== 0 ? (
                <ul className="mx-auto flex max-w-5xl flex-col gap-5 whitespace-pre-line">
                    {currentAdvice.weeks.data.map((week, index) => (
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
            <h2 className="page-header">Почему стоит пройти этот адвайс?</h2>
            {currentAdvice.result.description ? (
                <p className="mx-auto max-w-5xl whitespace-pre-line">
                    {currentAdvice.result.description}
                </p>
            ) : null}
            {currentAdvice.result.data.length !== 0 ? (
                <ul className="mx-auto w-full max-w-5xl list-inside list-disc">
                    {currentAdvice.result.data.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">
                    Вы получите глубокие знания и обретете уверенность в себе!
                </p>
            )}

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
