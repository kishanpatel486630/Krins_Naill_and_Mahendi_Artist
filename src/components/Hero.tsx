import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Hero() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758188753373-5b01a0fc6d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc2OTYyMDA4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Spa Salon"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto scroll-animate ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white mb-6">
          Nails & Mehendi Artistry
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Premium doorstep beauty services for your special moments
        </p>
        <button
          onClick={scrollToContact}
          className="bg-[#8B7355] text-white px-8 py-4 text-lg hover:bg-[#6d5a43] transition-colors"
        >
          Book Your Session
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
