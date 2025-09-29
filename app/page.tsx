
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
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mt-12 text-center sm:text-left text-white">Latest Posts</h2>
          </div>
        </section>
      </main>
    </div>
  );
}
