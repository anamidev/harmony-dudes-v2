import { mentorsList_ru } from '@/lib/data/mentors';
import Mentor_ru from '@/components/Mentor_ru';
import EmailToClipboard_ru from '@/components/EmailToClipboard_ru';

export default function About() {
    return (
        <section className="page-layout">
            {/* about */}
            <h1 className="page-header">Кто мы?</h1>
            <p>
                Привет, ребятки! Мы - профи Toon Boom Harmony и настоящие фанаты анимации! Нас
                завораживает искусство оживления персонажей и создания историй, и мы можем научить
                этому вас. Наша неутомимая страсть к каждому пикселю анимационного процесса
                позволяет создавать захватывающие визуальные образы и вдохновлять новое поколение
                аниматоров. Присоединяйтесь к нам в исследовании увлекательного мира анимации, где
                каждый этап открывает безграничные творческие возможности и профессии!
            </p>

            {/* mentors */}
            <h2 className="page-header">Наши менторы</h2>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
                {mentorsList_ru.map((item) => (
                    <li key={item.id}>
                        <Mentor_ru mentor={item.info} />
                    </li>
                ))}
            </ul>

            {/* contacts */}
            <h2 className="page-header">Контакты</h2>
            <p>
                Если у вас есть какие-либо вопросы о наших воркшопах, расписании или любых других
                аспектах, не стесняйтесь обращаться к нам. Просто отправьте нам электронное письмо
                по адресу harmonydudes@gmail.com, и мы будем рады предоставить вам всю информацию,
                необходимую для того, чтобы отправиться в увлекательное путешествие по изучению
                анимации.
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
