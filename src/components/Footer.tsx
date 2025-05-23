
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a192f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/8b09d9e1-7de8-4b1d-85cf-6ac72229eb95.png" 
                alt="R.E.S.T Logo" 
                className="w-12 h-12 object-contain"
              />
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
              <li><Link to="/about" className="text-gray-300 hover:text-white text-lg transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white text-lg transition-colors">Events</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white text-lg transition-colors">Gallery</Link></li>
              <li><Link to="/submit-photos" className="text-gray-300 hover:text-white text-lg transition-colors">Submit Photos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white text-lg transition-colors">Contact</Link></li>
              <li>
                <Link 
                  to="/membership"
                  className="text-gray-300 hover:text-white text-lg transition-colors"
                >
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-white" />
                <span className="text-gray-300 text-lg">+977-1-4271711</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-white" />
                <span className="text-gray-300 text-lg">info@rest.org.np</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-white mt-1" />
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
