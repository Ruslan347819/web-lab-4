function Skills() {
    return (
        <section className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-slate-800 dark:text-white uppercase tracking-widest border-b-2 border-emerald-600 inline-block pb-1">
                Skills
            </h2>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <div>
                    <strong className="block text-slate-800 dark:text-slate-200 mb-1">Programming Languages:</strong>
                    <span>C, C#, PHP, Python</span>
                </div>
                <div>
                    <strong className="block text-slate-800 dark:text-slate-200 mb-1">Operating Systems:</strong>
                    <span>Linux (Kali, Ubuntu), Windows</span>
                </div>
                <div>
                    <strong className="block text-slate-800 dark:text-slate-200 mb-1">Networking & Cybersecurity:</strong>
                    <span>Nmap, Wireshark, SSH, encryption principles</span>
                </div>
                <div>
                    <strong className="block text-slate-800 dark:text-slate-200 mb-1">Tools & Design:</strong>
                    <span>Git, Blender (3D modeling), XML/Meta configuration files</span>
                </div>
            </div>
        </section>
    );
}
export default Skills;