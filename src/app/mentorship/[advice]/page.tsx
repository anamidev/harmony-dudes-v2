import { advices } from '@/lib/data/advices';
import Link from 'next/link';

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
                className="rounded-lg bg-orange-500/[0.5] px-4 py-2"
            >
                Back to list
            </Link>
        </section>
    ) : (
        <section className="page-layout">
            {/* cover */}
            <div className="max-h-lg mx-auto h-96 w-full max-w-5xl bg-white/[0.1]"></div>

            {/* name */}
            <h1 className="text-center text-3xl">{currentAdvice.name}</h1>
            <h2 className="text-center text-xl">Mentor: {currentAdvice.mentor.name}</h2>
            <p className="mx-auto max-w-5xl">{currentAdvice.description}</p>

            {/* short info */}
            <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-2xl bg-emerald-500/[0.2] p-10">
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
                        <h2 className="text-lg">Software</h2>
                        <p className="">{currentAdvice.software}</p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="rounded-lg bg-orange-500/[0.5] px-8 py-4">
                        Start mentorship
                    </button>
                </div>
            </div>

            {/* requirements */}
            <h2 className="page-header">Requirements</h2>
            {currentAdvice.requirements.length !== 0 ? (
                <ul className="mx-auto w-full max-w-5xl list-inside list-disc">
                    {currentAdvice.requirements.map((item) => (
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
            {currentAdvice.weeks.length !== 0 ? (
                <ul className="mx-auto flex max-w-5xl flex-col gap-5">
                    {currentAdvice.weeks.map((week, index) => (
                        <li key={week}>
                            <h3 className="text-xl">Week {index + 1}</h3>
                            <p>{week}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">The curriculum is to be announced soon!</p>
            )}

            {/* result */}
            <h2 className="page-header">What you will get</h2>
            {currentAdvice.result.length !== 0 ? (
                <ul className="mx-auto w-full max-w-5xl list-inside list-disc">
                    {currentAdvice.result.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">
                    You will get strong subject knowledge and gain confidence!
                </p>
            )}
        </section>
    );
}
