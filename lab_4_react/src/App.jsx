import { useState, useEffect } from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import Reviews from './components/Reviews';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours >= 7 && hours < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`${theme === 'dark' ? 'dark bg-slate-900 text-white' : 'bg-slate-100 text-slate-800'} min-h-screen font-sans transition-colors duration-300 py-8`}>
      <div className="max-w-5xl mx-auto p-4 md:p-8">

        <div className="flex justify-end mb-4">
          <button onClick={toggleTheme} className="px-4 py-2 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition font-medium">
            {theme === 'light' ? 'Увімкнути нічний режим' : 'Увімкнути денний режим'}
          </button>
        </div>

        <div className="bg-white dark:bg-slate-800 shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-emerald-50 dark:bg-slate-700 p-8 border-r border-slate-200 dark:border-slate-600">
             <Header />
             <Skills />
          </div>
          <div className="w-full md:w-2/3 p-8">
            <Objective />
            <Experience />
            <div className="my-8 border-t border-slate-200 dark:border-slate-600"></div>
            <Education />
            <div className="my-8 border-t border-slate-200 dark:border-slate-600"></div>
            <Reviews />
          </div>
        </div>
        <Footer />
      </div>
      <ContactForm />
    </div>
  );
}

export default App;