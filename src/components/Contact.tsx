import { useState } from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { toast } from "sonner@2.0.3";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({
    threshold: 0.3,
  });
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({
    threshold: 0.1,
  });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 scroll-animate ${headerVisible ? "visible" : ""}`}
        >
          <h3 className="text-sm uppercase tracking-wider text-[#8B7355] mb-4">
            Contact Us
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-gray-900 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to experience premium beauty services at your doorstep? Get in
            touch with us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`bg-white p-8 md:p-10 shadow-lg scroll-animate-left ${formVisible ? "visible" : ""}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#8B7355] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#8B7355] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#8B7355] transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-gray-700 mb-2">
                    Service *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#8B7355] transition-colors"
                  >
                    <option value="">Select Service</option>
                    <option value="bridal-mehendi">Bridal Mehendi</option>
                    <option value="function-mehendi">Function Mehendi</option>
                    <option value="nail-art">Luxury Nail Art</option>
                    <option value="bridal-package">Bridal Package</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#8B7355] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#8B7355] transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#8B7355] text-white py-4 hover:bg-[#6d5a43] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`space-y-8 scroll-animate-right ${infoVisible ? "visible" : ""}`}
          >
            <div>
              <h3 className="text-2xl font-serif text-gray-900 mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                We're here to make your special day even more beautiful. Reach
                out to us for bookings, inquiries, or to learn more about our
                services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">
                    Service Areas
                  </p>
                  <p className="text-gray-600">
                    Mumbai, Navi Mumbai, Thane
                    <br />
                    (Home service available)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-gray-600 hover:text-[#8B7355] transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Email</p>
                  <a
                    href="mailto:krins@example.com"
                    className="text-gray-600 hover:text-[#8B7355] transition-colors"
                  >
                    krins@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Instagram className="w-6 h-6 text-[#8B7355] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-900 mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/krins_artistry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#8B7355] transition-colors"
                  >
                    @krins_artistry
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 mt-8">
              <h4 className="font-serif text-xl text-gray-900 mb-4">
                Working Hours
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
