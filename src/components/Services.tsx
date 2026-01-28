import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Sparkles, Hand, Heart } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const services = [
  {
    icon: Hand,
    title: "Bridal Mehendi",
    description:
      "Intricate and traditional bridal mehendi designs that tell your unique love story.",
    price: "Starting from ₹3,500",
    image:
      "https://images.unsplash.com/photo-1730003727902-3643640a3d43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtZWhlbmRpJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY5NjIwMDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Sparkles,
    title: "Luxury Nail Art",
    description:
      "Stunning nail designs with premium products for a flawless, long-lasting finish.",
    price: "Starting from ₹1,200",
    image:
      "https://images.unsplash.com/photo-1706629503603-e47c37722776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYW5pY3VyZSUyMHNhbG9ufGVufDF8fHx8MTc2OTYyMDA4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    icon: Heart,
    title: "Bridal Package",
    description:
      "Complete bridal beauty package including mehendi, nail art, and special styling.",
    price: "Starting from ₹6,500",
    image:
      "https://images.unsplash.com/photo-1712641970791-ea9a566c93bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwc2Fsb258ZW58MXx8fHwxNzY5NjIwMDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Services() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? "visible" : ""}`}
        >
          <h3 className="text-sm uppercase tracking-wider text-[#8B7355] mb-4">
            Our Services
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900 mb-4">
            Premium Beauty Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience professional beauty services in the comfort of your home
          </p>
        </div>

        {/* Services Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group scroll-animate-scale stagger-${index + 1} ${gridVisible ? "visible" : ""}`}
            >
              <div className="relative overflow-hidden mb-6 aspect-[4/5]">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <service.icon className="w-8 h-8 text-white mb-3" />
                  <h3 className="text-2xl font-serif text-white mb-2">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-[#8B7355] font-medium">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
