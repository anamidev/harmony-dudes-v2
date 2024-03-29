import { mentorsList_ru } from '@/lib/data/mentors';
import Mentor_ru from '@/components/Mentor_ru';

export default function About() {
    return (
        <section className="page-layout">
            {/* about */}
            <h1 className="page-header">Наши менторы</h1>
            <p className="text-justify">
                Выберите свой собственный путь в мире анимации! Наши опытные наставники окажут вам
                индивидуальное руководство, помогут вам сориентироваться и улучшить техники
                анимации, раскадровки, риггов персонажей и помощи ИИ в современной индустрии.
                Присоединяйтесь к нам, чтобы получить ценные знания и поднять ваш творческий
                потенциал на новый уровень в мире анимации.
            </p>

            {/* mentors */}
            <h2 className="page-header">Наши менторы</h2>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-2">
                {mentorsList_ru.map((item) => (
                    <li key={item.id}>
                        <Mentor_ru mentor={item.info} />
                    </li>
                ))}
            </ul>

            {/* contacts */}
            <h2 className="page-header">Контакты</h2>
            <p className="text-justify">
                Если у вас есть какие-либо вопросы о наших воркшопах, расписании или любых других
                аспектах, не стесняйтесь обращаться к нам. Просто отправьте нам электронное письмо,
                и мы будем рады предоставить вам всю информацию, необходимую для того, чтобы
                отправиться в увлекательное путешествие по изучению анимации.
            </p>
        </section>
    );
}
