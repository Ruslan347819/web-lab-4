import { useState, useEffect } from 'react';

function Footer() {
  const [sysInfo, setSysInfo] = useState({ os: '', browser: '' });

  useEffect(() => {
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;
    
    localStorage.setItem('userPlatform', platform);
    localStorage.setItem('userAgent', userAgent);

    setSysInfo({
      os: localStorage.getItem('userPlatform'),
      browser: localStorage.getItem('userAgent')
    });
  }, []);

  return (
    <footer className="mt-8 text-center text-slate-500 dark:text-slate-400 text-sm pb-8">
      <p>&copy; 2026 Ruslan Motriuk. Всі права захищено.</p>
      <div className="mt-2">
        <p className="text-xs opacity-60">
          Система: {sysInfo.os} | Браузер: {sysInfo.browser.substring(0, 30)}...
        </p>
      </div>
    </footer>
  );
}

export default Footer;