import { useState, useEffect } from "react";
import { X, ZoomIn, Eye, ArrowRight } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: "/1.jpg",
      alt: "Residential rooftop solar installation",
      title: "Residential Rooftop",
      category: "Residential",
    },
    {
      src: "/2.jpg",
      alt: "Industrial solar installation",
       title: "Industrial Installation",
       category: "Industrial",
    },
     {
      src: "/3.jpg",
      alt: "Residential rooftop solar installation",
       title: "Residential Rooftop",
       category: "Residential",
    },
    {
      src: "/7.jpg",
      alt: "Agricultural solar system",
      title: "Farm Solar System",
       category: "Agricultural",
    },
    {
      src: "/6.jpg",
      alt: "PMSGY project installation",
      title: "PMSGY Project",
      category: "Government",
    },
    // {
    //   src: "/8.jpg",
    //   alt: "Solar maintenance work",
    //   title: "Maintenance Service",
    //   category: "Service",
    // },
    {
      src: "/5.jpg",
        alt: "Modern solar installation",
       title: "Modern Home Solar",
       category: "Residential",
    },
    {
      src: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Rooftop solar panels",
      title: "Urban Installation",
      category: "Residential",
    },
    {
      src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Modern solar installation",
      title: "Modern Home Solar",
      category: "Residential",
    },
    // {
    //   src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    //   alt: "Agricultural solar system",
    //   title: "Farm Solar System",
    //   category: "Agricultural",
    // },
  ];

  const categoryColors = {
    Commercial: "from-blue-500 to-blue-600",
    Residential: "from-green-500 to-green-600",
    Agricultural: "from-yellow-500 to-yellow-600",
    Industrial: "from-purple-500 to-purple-600",
    Government: "from-orange-500 to-orange-600",
    Service: "from-red-500 to-red-600",
  };

  // Split images into two rows
  const row1Images = galleryImages.filter((_, index) => index % 2 === 0);
  const row2Images = galleryImages.filter((_, index) => index % 2 === 1);

  useEffect(() => {
    // Auto-scroll for first row (left to right)
    const row1Container = document.querySelector("#scroll-row-1");
    // Auto-scroll for second row (right to left)
    const row2Container = document.querySelector("#scroll-row-2");

    let row1ScrollPos = 0;
    let row2ScrollPos = 0;

    const autoScroll = () => {
      if (row1Container) {
        row1ScrollPos += 0.5;
        if (row1ScrollPos >= row1Container.scrollWidth - row1Container.clientWidth) {
          row1ScrollPos = 0;
        }
        row1Container.scrollTo({
          left: row1ScrollPos,
          behavior: "auto",
        });
      }

      if (row2Container) {
        row2ScrollPos -= 0.5;
        if (row2ScrollPos <= 0) {
          row2ScrollPos = row2Container.scrollWidth - row2Container.clientWidth;
        }
        row2Container.scrollTo({
          left: row2ScrollPos,
          behavior: "auto",
        });
      }
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, []);

  const ImageCard = ({ image, index }) => (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer flex-shrink-0 w-80 h-64 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
      onClick={() => setSelectedImage(image.src)}
    >
      {/* Image */}
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

      {/* Category Badge */}
      {/* <div className="absolute top-4 left-4">
        <span
          className={`bg-gradient-to-r ${
            categoryColors[image.category]
          } text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}
        >
          {image.category}
        </span>
      </div> */}

      {/* Zoom Icon - Center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30 hover:scale-110">
        <ZoomIn className="w-8 h-8 text-white" />
      </div>

      {/* Title and Description */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="font-bold text-lg mb-1 leading-tight">{image.title}</h3>
        <p className="text-sm opacity-90">Click to view full size</p>
      </div>

      {/* Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
    </div>
  );

  return (
    <section id="gallery" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-500/10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-orange-400/5 rounded-full blur-2xl"></div>

      <div className="max-w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16 px-6">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Eye className="w-4 h-4" />
            Project Showcase
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Our Solar
            <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our completed solar installations across residential,
            commercial, and agricultural sectors throughout Rajasthan.
          </p>
        </div>

        {/* Row 1 - Scrolling Left to Right */}
        <div className="mb-8">
          <div
            id="scroll-row-1"
            className="overflow-x-auto scrollbar-hide"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" }
            }}
            onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.target.style.animationPlayState = 'running'}
          >
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {/* Duplicate images for seamless loop */}
              {[...row1Images, ...row1Images].map((image, index) => (
                <ImageCard 
                  key={`row1-${index}`} 
                  image={image} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Scrolling Right to Left */}
        <div className="mb-16">
          <div
            id="scroll-row-2"
            className="overflow-x-auto scrollbar-hide"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" }
            }}
            onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'}
            onMouseLeave={(e) => e.target.style.animationPlayState = 'running'}
          >
            <div className="flex gap-6 pb-4" style={{ width: "max-content" }}>
              {/* Duplicate images for seamless loop */}
              {[...row2Images, ...row2Images].map((image, index) => (
                <ImageCard 
                  key={`row2-${index}`} 
                  image={image} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <img
                src={selectedImage}
                alt="Selected gallery image"
                className="max-w-full max-h-full object-contain rounded-2xl mx-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors duration-200 border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* Enhanced CTA Section */}
        <div className="px-6">
          <div className="max-w-6xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 rounded-3xl"></div>

            <div className="relative p-12 text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Start Your Solar Journey?
              </h3>
              <p className="text-white/90 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Join thousands of satisfied customers who have made the switch to
                clean, affordable solar energy with Rizel Group.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  className="bg-white text-orange-600 font-semibold py-4 px-8 rounded-xl hover:bg-orange-50 transition-colors duration-300 flex items-center gap-2 group"
                  onClick={() => {
                    const calculator = document.getElementById("calculator");
                    if (calculator)
                      calculator.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get Your Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style> */}
    </section>
  );
};

export default Gallery;