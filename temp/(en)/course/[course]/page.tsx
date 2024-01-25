import { classes } from '@/lib/data/courses';
import Link from 'next/link';
import EmailToClipboard from '@/components/EmailToClipboard';

export async function generateStaticParams() {
    const paths: { course: string }[] = [];
    for (let key in classes) {
        paths.push({ course: key });
    }

    return paths;
}

export default function Course({ params }: { params: { course: string } }) {
    const { course: coursePath } = params;
    const currentClass = classes[coursePath];

    return !currentClass ? (
        <section className="flex min-h-[calc(100vh-209px)] flex-col items-center justify-center gap-3">
            <p>Sorry, there is no such course :( </p>
            <Link
                href={'/'}
                className="button-sm-orange"
            >
                Back to list
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
            <h2 className={'page-header'}>
                {currentClass.mentors.length > 1 ? <>Mentors: </> : <>Mentor: </>}
                {currentClass.mentors.map((mentor) => mentor.name).join(', ')}
            </h2>
            <p className="mx-auto max-w-5xl whitespace-pre-line">{currentClass.description}</p>

            {/* short info */}
            <div className="flex flex-col items-center gap-5 rounded-2xl bg-emerald-500/[0.2] p-10">
                {currentClass.isOpen ? (
                    <div className="rounded-2xl bg-emerald-500 px-4 py-2 uppercase">
                        Open to start
                    </div>
                ) : null}

                <div className="flex flex-col justify-center gap-10 md:flex-row">
                    <div>
                        <h2 className="text-lg">Duration</h2>
                        <p className="">{currentClass.duration}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Price</h2>
                        <p className="">{currentClass.price}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Payment methods</h2>
                        <p className="">{currentClass.paymentMethods.join(', ')}</p>
                    </div>
                    <div>
                        <h2 className="text-lg">Software</h2>
                        <p className="">{currentClass.software}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 md:w-full md:flex-row md:justify-around">
                    <button className="button-lg-orange">Private course</button>
                    <button className="button-lg-orange">Group course</button>
                </div>
            </div>

            {/* requirements */}
            <h2 className={'page-header'}>Requirements</h2>
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
                <p className="text-center">
                    No requirements are needed. You are ready to go as it is!
                </p>
            )}

            {/* schedule */}
            <h2 className="page-header">Curriculum</h2>
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
            <h2 className="page-header">Why to take this course?</h2>
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
                    You will get strong subject knowledge and gain confidence!
                </p>
            )}

            <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-5 rounded-2xl bg-emerald-500/[0.2] p-10">
                {currentClass.isOpen ? (
                    <div className="rounded-2xl bg-emerald-500 px-4 py-2 uppercase">
                        Open to start
                    </div>
                ) : null}

                <p className="text-xl">Send your application and start this course</p>

                <div className="flex flex-col gap-5 md:w-full md:flex-row md:justify-around">
                    <button className="button-lg-orange">Private course</button>
                    <button className="button-lg-orange">Group course</button>
                </div>
            </div>

            {/* help section */}
            <h2 className="page-header">Need help?</h2>
            <p className="mx-auto max-w-xl text-center">
                If you have any questions or need assistance with payments, please feel free to
                reach out to our support team. We are here to assist you.
            </p>
            <div className="text-center text-lg">
                {/* harmonydudes@gmail.com */}
                <EmailToClipboard
                    email="harmonydudes@gmail.com"
                    classStyle="link-purple"
                />
            </div>
        </section>
    );
}
