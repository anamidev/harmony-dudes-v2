import { mentors, type IMentor } from '@/lib/data/mentors';
import Mentor from '@/components/Mentor';
import EmailToClipboard from '@/components/EmailToClipboard';

export default function About() {
    return (
        <section className="page-layout">
            {/* about */}
            <h1 className="page-header">Who are we?</h1>
            <p>
                Hi Dudes! We are Toon Boom Harmony pros and true fans of animation! The art of
                bringing characters to life and crafting stories profoundly inspires us. Our
                relentless passion for every pixel of the animation process empowers us to create
                captivating visual experiences and inspire the next generation of animators. Join us
                in exploring the captivating world of animation, where each stage unveils boundless
                creative opportunities!
            </p>

            {/* mentors */}
            <h2 className="page-header">Our mentors</h2>
            <ul className="grid grid-cols-2 gap-12">
                {mentors.map((mentor: IMentor) => (
                    <li key={mentor.id}>
                        <Mentor mentor={mentor} />
                    </li>
                ))}
            </ul>

            {/* contacts */}
            <h2 className="page-header">Contacts</h2>
            <p>
                If you have any questions about our workshops, schedules, or any other aspects,
                don't hesitate to reach out. Simply drop us an email with your questions and we will
                be delighted to provide you with all the information you need to embark on your
                exciting animation learning journey.
            </p>
            <div className="text-center text-lg">
                {/* harmonydudes@gmail.com */}
                <EmailToClipboard email='harmonydudes@gmail.com'/>
            </div>
        </section>
    );
}
