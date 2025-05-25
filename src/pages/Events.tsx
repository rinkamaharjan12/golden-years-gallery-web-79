import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Monthly General Meeting",
      description: "Our regular monthly meeting to discuss community matters, share updates, and plan upcoming activities. All members are encouraged to attend.",
      date: "June 15, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "R.E.S.T Central Office, Kathmandu",
      attendees: "All Members",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Health and Wellness Workshop",
      description: "A comprehensive workshop focusing on health management during retirement years. Topics include nutrition, exercise, and mental wellness.",
      date: "June 22, 2024", 
      time: "2:00 PM - 4:00 PM",
      location: "Community Center, Bhaktapur",
      attendees: "Open to All",
      status: "upcoming"
    },
    {
      id: 3,
      title: "Annual Picnic and Recreation Day",
      description: "Join us for a day of fun, food, and fellowship at our annual picnic. Bring your families and enjoy recreational activities.",
      date: "July 5, 2024",
      time: "9:00 AM - 5:00 PM", 
      location: "Shivapuri National Park",
      attendees: "Members & Families",
      status: "upcoming"
    }
  ];

  const currentIssues = [
    {
      title: "Healthcare Benefits Discussion",
      description: "Discussion regarding enhanced healthcare benefits for retired members. We are exploring partnerships with local hospitals for better medical care coverage.",
      priority: "High",
      status: "Ongoing"
    },
    {
      title: "Pension Fund Updates",
      description: "Updates on pension fund management and distribution policies. Members will be informed about recent changes and future planning.",
      priority: "Medium", 
      status: "Under Review"
    },
    {
      title: "Community Center Renovation",
      description: "Plans for renovating our community center to make it more accessible and comfortable for all members, especially elderly participants.",
      priority: "Medium",
      status: "Planning Phase"
    },
    {
      title: "Digital Literacy Program",
      description: "Initiative to help members become more comfortable with digital technology and online communication platforms.",
      priority: "Low",
      status: "Proposed"
    }
  ];

  const recentEvents = [
    {
      title: "Financial Planning Seminar",
      description: "Educational seminar on retirement financial planning and investment strategies.",
      date: "May 20, 2024",
      attendees: "45 members"
    },
    {
      title: "Cultural Program", 
      description: "Traditional music and dance performances celebrating Nepali culture and heritage.",
      date: "May 10, 2024",
      attendees: "60 members"
    },
    {
      title: "Technology Workshop",
      description: "Introduction to smartphones and digital communication for senior citizens.",
      date: "April 28, 2024", 
      attendees: "30 members"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-red-100 text-red-800";
      case "Medium": return "bg-yellow-100 text-yellow-800"; 
      case "Low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Events & Activities</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Stay connected with our community through regular events and activities
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{event.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6 flex-grow">{event.description}</p>
                  
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
                      <span className="text-gray-700">{event.attendees}</span>
                    </div>
                  </div>
                  
                  <Link to={`/event-registration?eventId=${event.id}`} className="mt-auto">
                    <Button className="w-full text-lg bg-primary hover:bg-primary/90">
                      Register Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Current Issues & Discussions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentIssues.map((issue, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{issue.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(issue.priority)}`}>
                      {issue.priority}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">{issue.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-medium">Status: {issue.status}</span>
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 mb-6">
              Have suggestions or concerns? We value your input!
            </p>
            <Button className="text-lg px-8 py-3 bg-primary hover:bg-primary/90">
              Submit Feedback
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Recent Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">{event.description}</p>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span className="font-medium">{event.date}</span>
                    <span>{event.attendees}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Modified */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Stay Connected</h2>
          <p className="text-xl leading-relaxed mb-8">
            Don't miss out on any of our events and activities. Join our community and stay informed about all upcoming programs.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Join Our Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Events;
