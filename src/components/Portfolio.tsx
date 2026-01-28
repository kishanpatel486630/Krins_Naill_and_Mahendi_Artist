import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const portfolioItems = [
  {
    id: 1,
    category: "mehendi",
    image:
      "https://images.unsplash.com/photo-1730003727902-3643640a3d43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtZWhlbmRpJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY5NjIwMDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Bridal Mehendi",
  },
  {
    id: 2,
    category: "nails",
    image:
      "https://images.unsplash.com/photo-1667207229961-08f191f43543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWlsJTIwYXJ0JTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3Njk1MzU3NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Nail Art Design",
  },
  {
    id: 3,
    category: "mehendi",
    image:
      "https://images.unsplash.com/photo-1767607740740-25ef7ca4342b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtZWhlbmRpJTIwaGVubmElMjBoYW5kcyUyMGRldGFpbGVkfGVufDF8fHx8MTc2OTYxODExMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Mehendi Art",
  },
  {
    id: 4,
    category: "nails",
    image:
      "https://images.unsplash.com/photo-1706629503603-e47c37722776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5pY3VyZSUyMHNhbG9ufGVufDF8fHx8MTc2OTYyMDA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Luxury Nails",
  },
  {
    id: 5,
    category: "mehendi",
    image:
      "https://images.unsplash.com/photo-1766100465798-c323de2860c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBicmlkYWwlMjBoZW5uYSUyMGRlc2lnbnxlbnwxfHx8fDE3Njk2MTgxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Henna Design",
  },
  {
    id: 6,
    category: "nails",
    image:
      "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuYWlsJTIwYXJ0JTIwbWFuaWN1cmV8ZW58MXx8fHwxNzY5NjEzNzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Modern Manicure",
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState<"all" | "mehendi" | "nails">("all");
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 scroll-animate ${headerVisible ? "visible" : ""}`}
        >
          <h3 className="text-sm uppercase tracking-wider text-[#8B7355] mb-4">
            Portfolio
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900 mb-8">
            Our Beautiful Work
          </h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 transition-colors ${
                filter === "all"
                  ? "bg-[#8B7355] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("mehendi")}
              className={`px-6 py-2 transition-colors ${
                filter === "mehendi"
                  ? "bg-[#8B7355] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Mehendi
            </button>
            <button
              onClick={() => setFilter("nails")}
              className={`px-6 py-2 transition-colors ${
                filter === "nails"
                  ? "bg-[#8B7355] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              Nails
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden aspect-square scroll-animate-scale stagger-${(index % 6) + 1} ${gridVisible ? "visible" : ""}`}
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-serif">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
