import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Heart, Users } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function About() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation({
    threshold: 0.2,
  });
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div
            ref={leftRef}
            className={`relative scroll-animate-left ${leftVisible ? "visible" : ""}`}
          >
            <div className="aspect-[4/5] overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730003727902-3643640a3d43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkYWwlMjBtZWhlbmRpJTIwY2VyZW1vbnl8ZW58MXx8fHwxNzY5NjIwMDg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bridal Mehendi Ceremony"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-[#8B7355] text-white p-8 max-w-xs hidden md:block">
              <p className="text-3xl font-serif mb-2">5+</p>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>

          {/* Content Side */}
          <div
            ref={rightRef}
            className={`scroll-animate-right ${rightVisible ? "visible" : ""}`}
          >
            <h3 className="text-sm uppercase tracking-wider text-[#8B7355] mb-4">
              About Krins
            </h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900 mb-6">
              Your Beauty, Our Passion
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Krins specializes in bringing professional beauty services
              directly to your doorstep. With over 5 years of experience in
              bridal artistry, we create stunning mehendi designs and luxurious
              nail art that perfectly complements your special occasions.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From intricate bridal mehendi patterns to elegant nail extensions,
              every detail is crafted with precision and care. We use premium,
              skin-safe products and stay updated with the latest trends to give
              you a flawless look that lasts.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <Award className="w-8 h-8 text-[#8B7355] mx-auto mb-2" />
                <p className="text-2xl font-serif text-gray-900 mb-1">500+</p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-[#8B7355] mx-auto mb-2" />
                <p className="text-2xl font-serif text-gray-900 mb-1">100%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-[#8B7355] mx-auto mb-2" />
                <p className="text-2xl font-serif text-gray-900 mb-1">5+</p>
                <p className="text-sm text-gray-600">Years Expert</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
