import React from "react";
import { FiHeart, FiUsers, FiAward } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FiHeart className="h-8 w-8 text-orange-500" />,
      title: "Ethical",
      description: "Fair trade practices",
    },
    {
      icon: <FaLeaf className="h-8 w-8 text-green-500" />,
      title: "Sustainable",
      description: "Eco-friendly materials",
    },
    {
      icon: <FiUsers className="h-8 w-8 text-indigo-500" />,
      title: "Inclusive",
      description: "For everyone",
    },
    {
      icon: <FiAward className="h-8 w-8 text-yellow-500" />,
      title: "Quality",
      description: "Premium craftsmanship",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero / Intro Section */}
      <section className="bg-gradient-to-b from-gray-100 to-white text-black py-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            About <span className="text-orange-500">AradaBuy</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're more than just a clothing brand. We're a movement towards
            sustainable, inclusive fashion that celebrates diversity and
            craftsmanship.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission Content */}
            <div>
              <h2 className="text-4xl font-bold text-black mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At AradaBuy, we believe fashion should be accessible,
                sustainable, and culturally rich. We bridge the gap between
                traditional Ethiopian craftsmanship and modern minimalist
                design, creating pieces that tell stories while respecting our
                planet.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every piece in our collection is thoughtfully designed to be
                timeless, versatile, and ethically produced. We work directly
                with artisans and sustainable manufacturers to ensure fair wages
                and environmental responsibility.
              </p>
              <a href="/shop">
                <button className="inline-flex items-center justify-center gap-2 text-base font-medium bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:scale-105 h-12 rounded-lg px-8 transition-all duration-300">
                  Explore Our Collection
                </button>
              </a>
            </div>

            {/* Features Grid */}
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
              <div className="grid grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:bg-gray-100 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-black mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="text-center py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-black">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Founded with a vision to celebrate Ethiopian heritage while
            embracing global fashion trends, AradaBuy was born from a desire to
            create clothing that transcends borders and brings cultures
            together.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Our name <span className="font-semibold">"Arada"</span> comes from
            the Amharic word meaning "plaza" or "gathering place" — reflecting
            our belief that fashion should bring people together, regardless of
            background, age, or style preference.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Today, we're proud to offer a curated collection that includes
            traditional Ethiopian garments alongside contemporary minimalist
            pieces, all designed with the same attention to quality,
            sustainability, and cultural respect.
          </p>
        </div>
      </section>

      {/* Join Our Community */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl mb-8">
            Be part of a movement that values quality, sustainability, and
            cultural celebration. Discover your new favorite pieces today.
          </p>
          <div className="flex justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-2 text-base font-medium bg-white text-black hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105 h-12 rounded-lg px-6 transition-all duration-300">
              Shop Now
            </button>
            <button className="inline-flex items-center justify-center gap-2 text-base font-medium bg-black text-white hover:bg-gray-900 shadow-lg hover:shadow-xl transform hover:scale-105 h-12 rounded-lg px-6 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
