export default function Workshops() {
    return (
        <section className="page-layout">
            <h1 className="page-header">Мастер классы</h1>
            <div className="mx-auto h-60 w-full max-w-[480px] bg-white/[0.1] md:h-96 md:max-w-3xl"></div>
            <p className="mx-auto max-w-5xl">
                We help train your team. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2 className="page-header">Что мы можем предложить</h2>
            <ul className="mx-auto flex max-w-5xl list-inside list-disc flex-col gap-5">
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
            </ul>

            <h2 className="page-header">Отзывы</h2>
            <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                <li className="mx-auto flex flex-col items-center gap-3">
                    <div className="h-32 w-32 rounded-full bg-white/[0.1]"></div>
                    <h3>Александра</h3>
                    <p className="mx-auto max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                </li>
                <li className="mx-auto flex flex-col items-center gap-3">
                    <div className="h-32 w-32 rounded-full bg-white/[0.1]"></div>
                    <h3>Петр</h3>
                    <p className="mx-auto max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                </li>
                <li className="mx-auto flex flex-col items-center gap-3">
                    <div className="h-32 w-32 rounded-full bg-white/[0.1]"></div>
                    <h3>Алексей</h3>
                    <p className="mx-auto max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua!
                    </p>
                </li>
            </ul>

            <div className="text-center">
                <button className="button-lg-orange">Подать заявку</button>
            </div>
        </section>
    );
}