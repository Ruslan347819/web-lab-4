function Education() {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white uppercase tracking-widest border-b-2 border-emerald-600 inline-block pb-1">
                Education
            </h2>
            
            <div className="relative pl-6 border-l-2 border-emerald-200 dark:border-emerald-800">
                <div className="absolute w-3 h-3 bg-emerald-600 rounded-full -left-[7px] top-1.5 shadow"></div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Computer Engineering / Cybersecurity</h3>
                <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-3">Lviv Polytechnic National University | 2023 – Present</p>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Participating in practical laboratory work focused on network security, programming, and computer architecture.
                </p>
            </div>
        </section>
    );
}
export default Education;