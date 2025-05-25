
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Camera, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const RecentEvents = () => {
  const recentEvents = [
    {
      id: 1,
      title: "Financial Planning Seminar",
      description: "Educational seminar on retirement financial planning and investment strategies. Topics covered included portfolio management, risk assessment, and long-term financial security planning.",
      date: "May 20, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "R.E.S.T Central Office, Kathmandu",
      attendees: 45,
      status: "completed",
      highlights: [
        "Expert speakers from leading financial institutions",
        "Interactive Q&A sessions",
        "Personalized financial advice consultations",
        "Resource materials and planning tools provided"
      ],
      photos: 24,
      documents: 3
    },
    {
      id: 2,
      title: "Cultural Program",
      description: "Traditional music and dance performances celebrating Nepali culture and heritage. Featured local artists and cultural groups showcasing various regional traditions.",
      date: "May 10, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Community Cultural Center, Bhaktapur",
      attendees: 60,
      status: "completed",
      highlights: [
        "Traditional Nepali folk dances",
        "Live music performances",
        "Cultural storytelling sessions",
        "Traditional food and refreshments"
      ],
      photos: 48,
      documents: 2
    },
    {
      id: 3,
      title: "Technology Workshop",
      description: "Introduction to smartphones and digital communication for senior citizens. Hands-on training sessions to help members navigate modern technology confidently.",
      date: "April 28, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "Digital Learning Center, Lalitpur",
      attendees: 30,
      status: "completed",
      highlights: [
        "Basic smartphone operation training",
        "Social media and communication apps",
        "Online banking and digital payments",
        "Safety tips for internet usage"
      ],
      photos: 18,
      documents: 5
    },
    {
      id: 4,
      title: "Health and Wellness Fair",
      description: "Comprehensive health checkups and wellness consultations with medical professionals. Free health screenings and wellness advice for all members.",
      date: "April 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "R.E.S.T Medical Center, Kathmandu",
      attendees: 75,
      status: "completed",
      highlights: [
        "Free health screenings and checkups",
        "Nutrition and diet consultations",
        "Exercise and fitness demonstrations",
        "Mental health awareness sessions"
      ],
      photos: 32,
      documents: 4
    },
    {
      id: 5,
      title: "Annual General Meeting",
      description: "Annual meeting to discuss organizational matters, financial reports, and future planning. Important decisions were made regarding upcoming initiatives.",
      date: "March 25, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "R.E.S.T Central Office, Kathmandu",
      attendees: 85,
      status: "completed",
      highlights: [
        "Annual financial report presentation",
        "New board member elections",
        "Future project planning discussions",
        "Member feedback and suggestions"
      ],
      photos: 15,
      documents: 8
    },
    {
      id: 6,
      title: "Spring Picnic",
      description: "Annual spring picnic and recreational activities for members and their families. A day of fun, food, and fellowship in a beautiful natural setting.",
      date: "March 10, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Shivapuri National Park",
      attendees: 95,
      status: "completed",
      highlights: [
        "Outdoor games and recreational activities",
        "Traditional picnic lunch",
        "Nature walks and sightseeing",
        "Group photos and socializing"
      ],
      photos: 67,
      documents: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/events" className="text-white hover:underline mb-4 inline-block">
            ← Back to Events
          </Link>
          <h1 className="text-4xl font-bold mb-4">Recent Events</h1>
          <p className="text-xl">Explore our past events and see what we've accomplished together as a community</p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                    <Badge className="bg-green-100 text-green-800">
                      Completed
                    </Badge>
                  </div>
                  
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-gray-700 font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{event.attendees} attendees</span>
                    </div>
                  </div>

                  {/* Event Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Event Highlights:</h4>
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Resources */}
                  <div className="flex justify-between items-center border-t pt-4 mt-auto">
                    <div className="flex space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Camera className="w-4 h-4" />
                        <span>{event.photos} photos</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{event.documents} documents</span>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">
                        View Photos
                      </Button>
                      <Button size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to See More?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our photo gallery or check out upcoming events to join our community activities.
          </p>
          <div className="space-x-4">
            <Link to="/gallery">
              <Button size="lg" variant="outline">
                Visit Gallery
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg">
                Upcoming Events
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecentEvents;
