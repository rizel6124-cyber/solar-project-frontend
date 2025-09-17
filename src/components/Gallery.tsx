import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import gallery1 from '../assets/gallery-1.jpg';
import gallery2 from '../assets/gallery-2.jpg';
import gallery3 from '../assets/gallery-3.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: gallery1,
      alt: "Large commercial solar farm installation",
      title: "Commercial Solar Farm",
      category: "Commercial"
    },
    {
      src: gallery2,
      alt: "Residential rooftop solar installation",
      title: "Residential Rooftop",
      category: "Residential"
    },
    {
      src: gallery3,
      alt: "Agricultural solar pumping system",
      title: "Agricultural Solar Pump",
      category: "Agricultural"
    },
    {
      src: gallery1,
      alt: "Industrial solar installation",
      title: "Industrial Installation",
      category: "Industrial"
    },
    {
      src: gallery2,
      alt: "PMSGY project installation",
      title: "PMSGY Project",
      category: "Government"
    },
    {
      src: gallery3,
      alt: "Solar maintenance work",
      title: "Maintenance Service",
      category: "Service"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Project Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our completed solar installations across residential, commercial, 
            and agricultural sectors throughout Rajasthan.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white">
                  <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                  <h3 className="font-semibold">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.category}</p>
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                {image.category}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh]">
              <img 
                src={selectedImage} 
                alt="Selected gallery image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4">
              Ready to Start Your Solar Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who have made the switch to clean, 
              affordable solar energy with Rizel Group.
            </p>
            <button 
              className="btn-primary"
              onClick={() => {
                const contact = document.getElementById('contact');
                if (contact) contact.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Your Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;