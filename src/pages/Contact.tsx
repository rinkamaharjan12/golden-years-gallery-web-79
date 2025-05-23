
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, Users, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+977-1-4271711", "+977-1-4271712"],
      description: "Call us during office hours for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@rest.org.np", "support@rest.org.np"],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Deoneshwar Bhawan", "Shashtwati Pada, Kathmandu", "Nepal"],
      description: "Visit our central office for in-person assistance"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 3:00 PM", "Sunday: Closed"],
      description: "We're here to help during these hours"
    }
  ];

  const departments = [
    {
      name: "General Information",
      description: "For general inquiries about our organization and services",
      contact: "info@rest.org.np",
      phone: "+977-1-4271711"
    },
    {
      name: "Membership Services", 
      description: "For membership-related questions and support",
      contact: "membership@rest.org.np",
      phone: "+977-1-4271712"
    },
    {
      name: "Events & Activities",
      description: "For information about upcoming events and programs",
      contact: "events@rest.org.np", 
      phone: "+977-1-4271713"
    },
    {
      name: "Technical Support",
      description: "For website and digital service assistance",
      contact: "tech@rest.org.np",
      phone: "+977-1-4271714"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            We're here to help and answer any questions you may have
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-lg text-gray-700 font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="text-lg p-3"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="text-lg p-3"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-lg font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="text-lg p-3"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="text-lg p-3"
                      placeholder="Subject of your message"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="text-lg p-3"
                    placeholder="Please describe how we can help you..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg py-3 bg-primary hover:bg-primary/90">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
              <div className="bg-gray-200 rounded-lg h-96 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-600">Interactive Map</p>
                  <p className="text-gray-500">Deoneshwar Bhawan, Shashtwati Pada</p>
                  <p className="text-gray-500">Kathmandu, Nepal</p>
                </div>
              </div>
              <Card className="p-6">
                <CardContent className="pt-0">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Directions</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Our office is conveniently located in the heart of Kathmandu, easily accessible by public transportation.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 5 minutes walk from Ratna Park Bus Station</li>
                    <li>• 10 minutes from New Road</li>
                    <li>• Parking available on-site</li>
                    <li>• Wheelchair accessible entrance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Department Contacts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                      <p className="text-gray-700 mb-4">{dept.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-primary" />
                          <span className="text-gray-700">{dept.contact}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-primary" />
                          <span className="text-gray-700">{dept.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-l-4 border-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
          <p className="text-xl text-gray-700 mb-6">
            For urgent matters outside office hours, please contact our emergency line:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow">
              <Phone className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold text-gray-900">+977-9851234567</span>
            </div>
            <p className="text-gray-600">Available 24/7 for emergencies</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
