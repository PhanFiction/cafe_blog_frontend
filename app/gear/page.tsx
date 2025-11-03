import Image from "next/image";

export default function Gear() {
  const gear = [
    {
      id: 1,
      name: "Casabrew CM5418 Espresso Machine",
      description:
        "My daily driver espresso machine. Consistent, compact, and perfect for home brewing.",
      img: "https://images.unsplash.com/photo-1605368468949-6a906b3b2d56?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      name: "DF54 Grinder",
      description:
        "Delivers precise grind size control for dialing in espresso shots with great consistency.",
      img: "https://images.unsplash.com/photo-1606755962773-0e7ce7c7a6b9?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      name: "Fellow Stagg EKG Kettle",
      description:
        "Stylish variable temperature kettle — ideal for pour-overs and accurate brew temps.",
      img: "https://images.unsplash.com/photo-1599024761362-6a8c0c5f1d44?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      name: "Acaia Pearl Scale",
      description:
        "Precision scale that helps me monitor brew ratios and extraction times perfectly.",
      img: "https://images.unsplash.com/photo-1556909212-31e31c0b7e10?auto=format&fit=crop&w=900&q=80",
    },
  ];

  return (
    <section className="min-h-screen bg-[#f6f4f2] px-6 py-20 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#3F3E3E] mb-4">
            My Coffee Gear Setup
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Here’s a look at the tools that fuel my daily coffee ritual — each
            one plays a key role in crafting the perfect cup.
          </p>
        </div>

        {/* Gear Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {gear.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-[#3F3E3E] mb-2">
                  {item.name}
                </h2>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  View Details
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
