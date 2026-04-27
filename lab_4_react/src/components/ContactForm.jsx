import { useState, useEffect } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md relative">
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-slate-500 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-800 dark:text-white">Залишити повідомлення</h2>

        <form action="https://formspree.io/f/mbdzegdo" method="POST" className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-slate-300">Ім'я</label>
            <input type="text" name="name" required className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-slate-300">Email</label>
            <input type="email" name="email" required className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-slate-300">Номер телефону</label>
            <input type="tel" name="phone" className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-slate-300">Повідомлення</label>
            <textarea name="message" rows="4" className="w-full p-2 border rounded-lg dark:bg-slate-700 dark:border-slate-600 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none"></textarea>
          </div>
          <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-emerald-700 transition">
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;