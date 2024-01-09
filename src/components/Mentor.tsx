import Link from 'next/link';
import Image from 'next/image';
import { type IMentor } from '@/lib/data/mentors';

export default function Mentor({ mentor }: { mentor: IMentor }) {
    return (
        <div className="mx-auto h-full max-w-md rounded-2xl bg-emerald-500/[0.15] p-6">
            <div className="mx-auto flex h-full max-w-lg flex-col gap-1">
                <div className="h-40 w-40 self-center md:h-48 md:w-48">
                    <Image
                        src={mentor.photo}
                        alt={mentor.name + ' photo'}
                        className="rounded-full"
                    />
                </div>
                <h3 className="self-center text-2xl">{mentor.name}</h3>
                <h4 className="self-center text-[#cfcfcf]">{mentor.jobTitle}</h4>
                <p className="self-center">{mentor.description}</p>
                <h5 className="pt-2 text-xl">Current studio</h5>
                <p>{mentor.currentStudio}</p>
                <h5 className="pt-2 text-xl">Projects worked on</h5>
                <p>{mentor.projectsWorkedOn}</p>
                <h5 className="pt-2 text-xl">Mentor's Advices</h5>
                <ul className="flex flex-wrap gap-2">
                    {mentor.advices.map((advice) => (
                        <li
                            key={advice.href}
                            className="button-sm-purple"
                        >
                            <Link
                                href={'/mentorship/' + advice.href}
                                className="block"
                            >
                                {advice.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex grow items-end justify-center pt-2">
                    <Link href={'/mentor/' + mentor.href}>
                        <button className="button-lg-orange">Read more</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
