function Header() {
    return (
        <header className="flex flex-col items-center md:items-start text-center md:text-left mb-8">
            <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mb-6 shadow-lg">
                Р
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 dark:text-white mb-2 uppercase tracking-wider">
                Ruslan Motriuk
            </h1>
            <p className="text-xl text-emerald-600 dark:text-emerald-400 font-medium mb-6">
                Student, Developer & IT Enthusiast
            </p>
            
            <div className="w-full h-px bg-slate-300 dark:bg-slate-600 mb-6"></div>

            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 w-full">
                <p className="flex items-center">
                    <span className="font-bold w-20 text-slate-800 dark:text-slate-400">Email:</span> 
                    ruslan24536@gmail.com
                </p>
                <p className="flex items-center">
                    <span className="font-bold w-20 text-slate-800 dark:text-slate-400">GitHub:</span> 
                    <a href="https://github.com/Ruslan347819" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors">
                        Ruslan347819
                    </a>
                </p>
                <p className="flex items-center">
                    <span className="font-bold w-20 text-slate-800 dark:text-slate-400">Location:</span> 
                    Snyatyn, Ukraine
                </p>
            </div>
        </header>
    );
}
export default Header;