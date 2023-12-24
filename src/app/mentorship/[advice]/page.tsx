import { advices } from '@/lib/data/advices';
import Link from 'next/link';
import EmailToClipboard from '@/components/EmailToClipboard';

export async function generateStaticParams() {
    const paths: { advice: string }[] = [];
    for (let key in advices) {
        paths.push({ advice: key });
    }

    return paths;
}

export default function Advice({ params }: { params: { advice: string } }) {
    const { advice: advicePath } = params;
    const currentAdvice = advices[advicePath];

    return !currentAdvice ? (
        <section className="flex min-h-[calc(100vh-209px)] flex-col items-center justify-center">
            <p>Sorry, there is no such mentorship :( </p>
            <Link
                href={'/mentorship'}
                className="button-sm-orange"
            >
                Back to list
            </Link>
        </section>
    ) : (
        <section className="page-layout">
            {/* cover */}
            <div className="max-h-lg h-96 w-full bg-white/[0.1]"></div>

            {/* name */}
            <h1 className={"text-center font-['Rubik_Dirt'] text-4xl"}>{currentAdvice.name}</h1>
            <h2 className={'page-header'}>Mentor: {currentAdvice.mentor.name}</h2>
            <p className="mx-auto max-w-5xl">{currentAdvice.description}</p>

            {/* short info */}
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-5 rounded-2xl bg-emerald-500/[0.2] p-10">
                {currentAdvice.isOpen ? (
                    <div className="rounded-2xl bg-emerald-500 px-4 py-2 uppercase">
                        Open to start
                    </div>
                ) : null}

                <div className="flex justify-center gap-x-10">
                    <div>
                        <h2 className="text-lg">Duration</h2>
                        <p className="">{currentAdvice.duration}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Price</h2>
                        <p className="">{currentAdvice.price}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Payment methods</h2>
                        <p className="">{currentAdvice.paymentMethods.join(', ')}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Software</h2>
                        <p className="">{currentAdvice.software}</p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="button-lg-orange">
                        Start mentorship
                    </button>
                </div>
            </div>

            {/* requirements */}
            <h2 className={'page-header'}>Requirements</h2>
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
                <p className="text-center">
                    No requirements are needed. You are ready to go as it is!
                </p>
            )}

            {/* schedule */}
            <h2 className="page-header">Curriculum</h2>
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
                                Week {index + 1}
                            </h3>
                            <p>{week}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">The curriculum is to be announced soon!</p>
            )}

            {/* result */}
            <h2 className="page-header">What you will get</h2>
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
                    You will get strong subject knowledge and gain confidence!
                </p>
            )}

            {/* help section */}
            <h2 className="page-header">Need help?</h2>
            <p className="mx-auto max-w-xl text-center">
                If you have any questions or need assistance with payments, please feel free to
                reach out to our support team. We are here to assist you.
            </p>
            <div className="text-center text-lg">
                {/* harmonydudes@gmail.com */}
                <EmailToClipboard email="harmonydudes@gmail.com" />
            </div>
        </section>
    );
}
