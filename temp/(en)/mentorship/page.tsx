import { mentorsList } from '@/lib/data/mentors';
import Mentor from '@/components/Mentor';
import EmailToClipboard from '@/components/EmailToClipboard';

export default function Mentorship() {
    return (
        <section className="page-layout">
            {/* about */}
            <h1 className="page-header">Our mentorship</h1>
            <p>
                Choose your personalized pathway to mastering animation! Our experienced mentors
                will provide tailored guidance, helping you master animation techniques,
                storyboarding, character rigging and AI assistance in today's industry. Join us to
                receive invaluable insights and propel your creativity to new heights in the world
                of animation!
            </p>

            {/* mentors */}
            <h2 className="page-header">Our mentors</h2>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                {mentorsList.map((item) => (
                    <li key={item.id}>
                        <Mentor mentor={item.info} />
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
                <EmailToClipboard
                    email="harmonydudes@gmail.com"
                    classStyle="link-purple"
                />
            </div>
        </section>
    );
}
