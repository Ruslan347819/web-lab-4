function Experience() {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white uppercase tracking-widest border-b-2 border-emerald-600 inline-block pb-1">
                Experience & Projects
            </h2>
            
            <div className="space-y-8">
                <div className="relative pl-6 border-l-2 border-emerald-200 dark:border-emerald-800">
                    <div className="absolute w-3 h-3 bg-emerald-600 rounded-full -left-[7px] top-1.5 shadow"></div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Academic Cybersecurity & System Administration Projects</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-3">Student Project | 2023 – Present</p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-sm space-y-1.5">
                        <li>Analyzed network traffic using Wireshark.</li>
                        <li>Performed port scanning and vulnerability research using Nmap.</li>
                        <li>Configured and administered Linux-based operating systems (Kali, Ubuntu).</li>
                    </ul>
                </div>

                <div className="relative pl-6 border-l-2 border-emerald-200 dark:border-emerald-800">
                    <div className="absolute w-3 h-3 bg-emerald-600 rounded-full -left-[7px] top-1.5 shadow"></div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">Game Server Development & Modding (GTA V)</h3>
                    <p className="text-emerald-600 dark:text-emerald-400 font-medium text-sm mb-3">Independent Projects | 2024 – Present</p>
                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-sm space-y-1.5">
                        <li>Edited game configuration files (carcols.meta, vehicles.meta) to adjust physics and object behaviors.</li>
                        <li>Created and integrated add-on vehicles into the game engine.</li>
                        <li>Developed custom textures and utilized Blender for 3D modeling to enhance the visual experience.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
export default Experience;