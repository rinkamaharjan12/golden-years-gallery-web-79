
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Award, Users, Building, Heart } from "lucide-react";

const About = () => {
  const boardMembers = [
    { name: "Rakesh Adhikari", position: "President", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
    { name: "Nabin Thapa", position: "Vice President", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
    { name: "Deepak Shrestha", position: "Secretary", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
    { name: "Sumitra Pokharel", position: "Treasurer", image: "https://images.unsplash.com/photo-1494790108755-2616c9d0b3b3?w=150&h=150&fit=crop&crop=face" },
    { name: "Rajesh Gurung", position: "Member", image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face" },
    { name: "Kabita Adhikari", position: "Member", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face" },
    { name: "Bishal Magar", position: "Member", image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face" },
    { name: "Rajesh Gurung", position: "Member", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About R.E.S.T</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Learn about our mission, vision, and the dedicated team that makes it all possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to R.E.S.T</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                R.E.S.T (Retired Employees Support Trust) is a vibrant community organization dedicated to 
                supporting retired telecommunications professionals throughout their golden years. Since our 
                establishment, we have been committed to fostering connections, providing support, and 
                creating meaningful opportunities for our members.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our organization was born from the recognition that retirement should not mean isolation 
                or disconnection from the professional community that shaped our careers. Instead, it 
                should be a time of continued growth, friendship, and mutual support.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that the knowledge, experience, and wisdom of our retired members are invaluable 
                assets that should be celebrated and shared. Through our various programs and initiatives, 
                we create platforms for meaningful engagement and lasting relationships.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <Users className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-bold text-gray-900">Strong Community</h3>
                  </div>
                  <p className="text-lg text-gray-700">
                    Over 500+ active retired members from various telecommunications backgrounds
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <Building className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-bold text-gray-900">Established Presence</h3>
                  </div>
                  <p className="text-lg text-gray-700">
                    Headquartered in Kathmandu with outreach programs across Nepal
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="pt-0">
                  <div className="flex items-center space-x-4 mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                    <h3 className="text-2xl font-bold text-gray-900">Support Network</h3>
                  </div>
                  <p className="text-lg text-gray-700">
                    Comprehensive support system including healthcare, social activities, and financial guidance
                  </p>
                </CardContent>
              </Card>
            </div>
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
                  We envision a future where retirement is not an end, but a new beginning filled with purpose, 
                  friendship, and continued contribution to society.
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
                  We are committed to organizing regular events, providing assistance during times of need, 
                  and creating platforms for knowledge sharing and mentorship.
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
                  Our commitment is to honor the contributions of our members, promote inclusivity and diversity, 
                  maintain transparency in all our operations, and create lasting relationships built on trust and mutual respect.
                </p>
              </CardContent>
            </Card>
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
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
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
                It brings me immense joy to welcome you to our R.E.S.T community website. As we navigate through 
                our golden years, it's important to remember that retirement is not an end, but a new beginning 
                filled with opportunities for growth, connection, and contribution to our society.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our organization stands as a testament to the enduring bonds forged through years of dedicated 
                service in the telecommunications industry. The knowledge and experience we have accumulated 
                over decades of service are invaluable assets that we must continue to share and celebrate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Through R.E.S.T, we have created a platform where retired professionals can continue to engage 
                meaningfully with their peers, participate in community development activities, and maintain 
                the professional relationships that have enriched our lives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I encourage each of you to actively participate in our events, share your stories and experiences, 
                and help us build an even stronger community for current and future retirees. Together, we can 
                ensure that our retirement years are not just comfortable, but truly fulfilling.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Thank you for being part of this wonderful journey.</span>
              </p>
              <p className="text-lg text-gray-700 mt-4">
                <span className="font-semibold">Rakesh Adhikari</span><br />
                <span className="text-gray-600">President, R.E.S.T</span>
              </p>
            </div>
            <div className="lg:w-1/3">
              <Card className="p-6 text-center">
                <CardContent className="pt-6">
                  <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=250&h=250&fit=crop&crop=face" 
                      alt="Rakesh Adhikari"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Rakesh Adhikari</h3>
                  <p className="text-lg text-gray-600 mb-2">President</p>
                  <p className="text-sm text-gray-500">
                    Leading R.E.S.T with dedication and vision for community excellence
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
