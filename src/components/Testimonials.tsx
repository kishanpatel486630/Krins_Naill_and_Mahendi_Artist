import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    text: "Krins made my wedding day extra special! Her bridal mehendi was absolutely stunning and lasted beautifully. The nail art was elegant and complemented my outfit perfectly. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Anjali Reddy",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    text: "Professional, punctual, and incredibly talented! The doorstep service was so convenient. My mehendi design was intricate and gorgeous. Thank you Krins!",
    rating: 5,
  },
  {
    id: 3,
    name: "Meera Patel",
    role: "Client",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    text: "Best nail artist I've ever worked with! The attention to detail is incredible. My nails looked perfect for weeks. Will definitely book again for my next event.",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: sliderRef, isVisible: sliderVisible } = useScrollAnimation({
    threshold: 0.2,
  });

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? "visible" : ""}`}
        >
          <h3 className="text-sm uppercase tracking-wider text-[#8B7355] mb-4">
            Testimonials
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div
          ref={sliderRef}
          className={`relative max-w-4xl mx-auto scroll-animate-scale ${sliderVisible ? "visible" : ""}`}
        >
          <div className="bg-[#FAF8F5] p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#8B7355]">
                  <ImageWithFallback
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#8B7355] text-[#8B7355]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{testimonials[current].text}"
                </p>

                {/* Name */}
                <div>
                  <p className="font-serif text-xl text-gray-900">
                    {testimonials[current].name}
                  </p>
                  <p className="text-[#8B7355] text-sm">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center bg-[#8B7355] text-white hover:bg-[#6d5a43] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center bg-[#8B7355] text-white hover:bg-[#6d5a43] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? "bg-[#8B7355]" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageWithFallback({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  return <img src={src} alt={alt} className={className} />;
}
