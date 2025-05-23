
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <img 
                  src="/lovable-uploads/262f59f7-1be5-473f-a93b-d8236ff474b9.png" 
                  alt="R.E.S.T Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">R.E.S.T</h3>
                <p className="text-gray-400">Central Office</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Doorsanchar Bhawan, Bhadrakali Plaza, Kathmandu, Nepal
            </p>
            <p className="text-gray-400">
              © 2024 Nepal Telecom. All Rights Reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-white text-lg transition-colors">About Us</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-white text-lg transition-colors">Events</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-white text-lg transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white text-lg transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary" />
                <span className="text-gray-300 text-lg">+977-1-4271711</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-primary" />
                <span className="text-gray-300 text-lg">info@rest.org.np</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary mt-1" />
                <span className="text-gray-300 text-lg">Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
