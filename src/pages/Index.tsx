import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, Target, Award, Calendar, Users, ArrowRight } from "lucide-react";

const Index = () => {
  const boardMembers = [
    { name: "Rakesh Adhikari", position: "President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { name: "Nabin Thapa", position: "Vice President", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
    { name: "Deepak Shrestha", position: "Secretary", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { name: "Bishal", position: "Treasurer", image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=150&h=150&fit=crop&crop=face" },
  ];

  const currentEvents = [
    { title: "Current Issues", description: "Event requires discussion and we will discuss upon voluntary decision.", date: "Ongoing" },
    { title: "Introductory", description: "Event requires discussion and we will discuss upon voluntary decision.", date: "Monthly" },
    { title: "Press release", description: "Event requires discussion and we will discuss upon voluntary decision.", date: "As needed" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to R.E.S.T</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Supporting retired telecommunications professionals with community, resources, and ongoing connections.
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Community</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              R.E.S.T is a vibrant community dedicated to supporting retired telecommunications professionals. 
              We provide a platform for continued connection, shared experiences, and mutual support among our members. 
              Our organization has been serving the telecommunications community for years, fostering relationships 
              and creating opportunities for meaningful engagement in retirement.
            </p>
            <Link to="/about">
              <Button className="mt-8 text-lg px-8 py-3 bg-primary hover:bg-primary/90">
                Learn More About Us
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Vision, Mission and Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-10 h-10 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create a supportive and engaging community where retired telecommunications professionals 
                  can continue to thrive, share knowledge, and maintain meaningful connections throughout their golden years.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To provide comprehensive support, resources, and opportunities for social engagement 
                  to our retired members, fostering a sense of belonging and continued purpose in the community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Value</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We value respect, integrity, community support, and the wisdom that comes with experience. 
                  Our commitment is to honor the contributions of our members and create lasting relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Events Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {currentEvents.map((event, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-0">
                  <div className="flex items-start space-x-3 mb-4">
                    <Calendar className="w-6 h-6 text-primary mt-1" />
                    <span className="text-sm font-semibold text-primary">{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-lg text-gray-700">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Link to="/events">
              <Button className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
                View All Events
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Gallery</h2>
            <p className="text-xl text-gray-700 mb-8">Some images of ABC program</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop" 
                alt="Community gathering" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=600&h=400&fit=crop" 
                alt="Members meeting" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          <div className="text-center">
            <Link to="/gallery">
              <Button className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
                See More Images
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Board Members</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-lg text-gray-600">{member.position}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Message from President */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Message from Our President</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-2/3">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                <span className="font-semibold">Respected members, greetings and salutations!</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                It brings me immense joy to welcome you to our R.E.S.T community. As we navigate through 
                our golden years, it's important to remember that retirement is not an end, but a new beginning 
                filled with opportunities for growth, connection, and contribution.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our organization stands as a testament to the enduring bonds forged through years of dedicated 
                service in the telecommunications industry. Together, we continue to support one another, 
                share our experiences, and create meaningful moments that enrich our lives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I encourage each of you to actively participate in our events, share your stories, and 
                help us build an even stronger community for all our members.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Thank you.</span>
              </p>
            </div>
            <div className="lg:w-1/3">
              <Card className="p-6 text-center">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" 
                      alt="Rakesh Adhikari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Rakesh Adhikari</h3>
                  <p className="text-lg text-gray-600">President</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
