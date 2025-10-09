
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center sm:items-start">
        <section className="h-screen">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mt-24 text-center sm:text-left text-white">Welcome to my Cafe Blog</h1>
          </div>
        </section>
        <section className="h-screen">
          <article className="max-w-2xl w-full bg-white rounded-2xl shadow-sm border border-slate-200 p-4 md:p-5 transition hover:shadow-md">
            {/* Header */}
            <header className="flex items-start gap-3">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=60&auto=format&fit=crop"
                alt="User avatar"
              />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                  <h3 className="text-sm font-semibold text-slate-900 truncate">
                    Alex Green
                  </h3>
                  <span className="text-sm text-slate-500 truncate">@alexgreen</span>
                  <span className="text-sm text-slate-400">· 2h</span>
                </div>
                <p className="mt-1 text-sm text-slate-700">
                  Loved exploring the new trails today — crisp air and great views.
                  Here’s a snapshot from the best lookout point.
                </p>
              </div>

              <button
                className="ml-2 text-slate-400 hover:text-slate-600 p-1 rounded-full"
                aria-label="more"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
            </header>

            {/* Body: image + text */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-start gap-4">
              {/* Image */}
              <figure className="sm:w-1/3 w-full">
                <img
                  src="https://tomscoffeecorner.com/wp-content/uploads/2025/07/Mazzer-Mini-Hero-Photo-600x338.jpeg"
                  alt="Coffee Machine"
                  className="w-full h-56 sm:h-40 object-cover rounded-xl border border-slate-100 shadow-sm"
                />
              </figure>

              {/* Text */}
              <div className="sm:w-2/3 w-full flex flex-col justify-between">
                <p className="text-sm text-slate-700 leading-relaxed">
                  This lookout gave a 360° view — you can see the river bend on the
                  left and the old oak grove to the right. The trail was
                  well-maintained and quiet on weekday mornings.
                </p>

                <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                  <li className="px-2 py-1 rounded-md bg-slate-100 text-slate-600">
                    #hiking
                  </li>
                  <li className="px-2 py-1 rounded-md bg-slate-100 text-slate-600">
                    #nature
                  </li>
                  <li className="px-2 py-1 rounded-md bg-slate-100 text-slate-600">
                    #weekend
                  </li>
                </ul>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-6 text-sm text-slate-500">
                  <button
                    className="flex items-center gap-2 hover:text-sky-500 transition"
                    aria-label="comment"
                  >
                    💬 <span>8</span>
                  </button>
                  <button
                    className="flex items-center gap-2 hover:text-emerald-500 transition"
                    aria-label="retweet"
                  >
                    🔁 <span>12</span>
                  </button>
                  <button
                    className="flex items-center gap-2 hover:text-rose-500 transition"
                    aria-label="like"
                  >
                    ❤️ <span>134</span>
                  </button>
                  <button
                    className="ml-auto text-slate-400 hover:text-slate-700 transition"
                    aria-label="share"
                  >
                    ↗️
                  </button>
                </div>
              </div>
            </div>
          </article>
          
        </section>
      </main>
    </div>
  );
}
