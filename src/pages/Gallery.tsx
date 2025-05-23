
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, X, Calendar } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      title: "Annual General Meeting 2024",
      category: "meetings",
      date: "March 2024",
      description: "Our annual general meeting with all board members and community participants."
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=800&h=600&fit=crop",
      title: "Community Gathering",
      category: "social",
      date: "February 2024", 
      description: "Monthly community gathering with cultural activities and fellowship."
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
      title: "Board Members Meeting",
      category: "meetings",
      date: "January 2024",
      description: "Strategic planning session with board members discussing future initiatives."
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      title: "Cultural Program",
      category: "cultural",
      date: "December 2023",
      description: "Traditional dance and music performances celebrating our cultural heritage."
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop",
      title: "Health Workshop",
      category: "workshops",
      date: "November 2023",
      description: "Health and wellness workshop for senior community members."
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
      title: "Technology Training",
      category: "workshops", 
      date: "October 2023",
      description: "Digital literacy program helping members with modern technology."
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
      title: "Community Picnic",
      category: "social",
      date: "September 2023",
      description: "Annual community picnic with families and recreational activities."
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
      title: "Award Ceremony",
      category: "ceremonies",
      date: "August 2023",
      description: "Recognition ceremony honoring outstanding community contributors."
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
      title: "Financial Planning Seminar",
      category: "workshops",
      date: "July 2023",
      description: "Educational seminar on retirement financial planning and investments."
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop",
      title: "Volunteer Appreciation",
      category: "ceremonies",
      date: "June 2023",
      description: "Special event appreciating our dedicated volunteers and their contributions."
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1544531586-fbd96ceaeb78?w=800&h=600&fit=crop",
      title: "Yoga and Meditation",
      category: "workshops",
      date: "May 2023",
      description: "Wellness session focusing on yoga and meditation for healthy aging."
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
      title: "New Year Celebration",
      category: "cultural",
      date: "April 2023",
      description: "Nepali New Year celebration with traditional festivities and community bonding."
    }
  ];

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "meetings", name: "Meetings" },
    { id: "social", name: "Social Events" },
    { id: "cultural", name: "Cultural Programs" },
    { id: "workshops", name: "Workshops" },
    { id: "ceremonies", name: "Ceremonies" }
  ];

  const filteredImages = selectedCategory === "all" 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Capturing moments of our vibrant community life and activities
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`text-lg px-6 py-2 ${
                  selectedCategory === category.id 
                    ? "bg-primary text-white" 
                    : "text-primary border-primary hover:bg-primary hover:text-white"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <Card 
                key={image.id} 
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="relative">
                  <img 
                    src={image.src} 
                    alt={image.title}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300">
                      View Full Size
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{image.title}</h3>
                  <div className="flex items-center space-x-2 mb-3">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-gray-600">{image.date}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{image.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-600">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X size={32} />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ArrowLeft size={32} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <ArrowRight size={32} />
            </button>

            {/* Image */}
            <img
              src={filteredImages[selectedImage]?.src}
              alt={filteredImages[selectedImage]?.title}
              className="max-w-full max-h-full object-contain"
            />

            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-6">
              <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage]?.title}</h3>
              <p className="text-lg mb-2">{filteredImages[selectedImage]?.date}</p>
              <p className="text-gray-300">{filteredImages[selectedImage]?.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Share Your Memories</h2>
          <p className="text-xl leading-relaxed mb-8">
            Do you have photos from our events that you'd like to share? We'd love to add them to our gallery!
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Submit Photos
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
