import { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/posts/18/comments')
      .then(response => response.json())
      .then(data => {

        setReviews(data);
      })
      .catch(error => console.error('Помилка завантаження відгуків:', error));
  }, []);

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white uppercase tracking-widest border-b-2 border-emerald-600 inline-block pb-1">
        Reviews
      </h2>
      
      <div className="grid grid-cols-1 gap-5 mt-2">
        {reviews.map((review) => (
          <div key={review.id} className="p-5 bg-slate-50 dark:bg-slate-700/50 rounded-xl border border-slate-200 dark:border-slate-600 relative overflow-hidden transition-all hover:shadow-md">

             <span className="absolute -top-2 right-4 text-7xl text-emerald-100 dark:text-slate-600/30 font-serif leading-none select-none">
               "
             </span>

             <p className="italic text-slate-600 dark:text-slate-300 text-sm mb-4 relative z-10 text-justify">
              {review.body}
             </p>
             
             <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-emerald-200 dark:bg-slate-800 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-bold text-lg shadow-sm border border-white dark:border-slate-600 uppercase">
                  {review.name.charAt(0)}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-800 dark:text-white text-sm truncate">
                    {review.name}
                  </h3>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 truncate">
                    {review.email}
                  </p>
                </div>
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;