import ShowCaseCard from '@/components/Card';
import Image from 'next/image';

const posts = [
  {
    id: 1,
    title: "The Secret to a Perfect Espresso Shot",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "5 Brewing Methods Every Coffee Lover Should Try",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Latte Art Basics: Tips from Baristas",
    img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80",
  },
];

export default function Home() {
  return (
    <main className="">
      {/* ===== Hero Section ===== */}
      <section className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-[#f8f6f3] px-6 md:px-16 lg:px-24 py-16 md:py-0">
        {/* Left side — text content */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins leading-tight text-gray-900 mt-24 md:mt-0">
            Welcome to My Cafe Blog
          </h1>
          <p className="text-lg text-gray-700 max-w-md mx-auto md:mx-0">
            Dive into the world of coffee — from brewing tips to cafe culture.
            Discover what makes every cup special.
          </p>
          <button className="mt-4 px-8 py-3 bg-[#6b4e37] text-white rounded-full text-lg font-medium hover:bg-[#5a3f2c] transition">
            Explore Articles
          </button>
        </div>

        {/* Right side — image */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3]">
            <Image
              src="https://cornercoffeestore.com/wp-content/uploads/2020/07/coffee-banner-element.webp"
              alt="Cafe"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== Popular Posts Section ===== */}
      <section className="bg-white py-20 px-6 md:px-16 lg:px-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
          Popular Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <ShowCaseCard key={post.id} item={post} />
          ))}
        </div>
      </section>

      {/* ===== Example Article Section ===== */}
      <section className="py-20 px-6 md:px-16 lg:px-24 bg-[#fafafa] flex justify-center">
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
                <span className="text-sm text-slate-500 truncate">
                  @alexgreen
                </span>
                <span className="text-sm text-slate-400">· 2h</span>
              </div>
              <p className="mt-1 text-sm text-slate-700">
                Loved exploring the new trails today — crisp air and great
                views. Here’s a snapshot from the best lookout point.
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
                This lookout gave a 360° view — you can see the river bend on
                the left and the old oak grove to the right. The trail was
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
                <button className="flex items-center gap-2 hover:text-sky-500 transition">
                  💬 <span>8</span>
                </button>
                <button className="flex items-center gap-2 hover:text-emerald-500 transition">
                  🔁 <span>12</span>
                </button>
                <button className="flex items-center gap-2 hover:text-rose-500 transition">
                  ❤️ <span>134</span>
                </button>
                <button className="ml-auto text-slate-400 hover:text-slate-700 transition">
                  ↗️
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
