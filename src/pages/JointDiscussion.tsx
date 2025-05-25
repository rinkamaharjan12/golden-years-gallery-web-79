import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const JointDiscussion = () => {
  const jointDiscussions = [
    {
      id: 1,
      title: "Healthcare & Community Center Joint Initiative",
      description: "Combined discussion on healthcare benefits and community center renovation to maximize resources and member benefits.",
      participants: 78,
      lastActivity: "30 minutes ago",
      priority: "High",
      status: "Active",
      relatedTopics: ["Healthcare Benefits", "Community Center Renovation"]
    },
    {
      id: 2,
      title: "Digital Literacy & Pension Fund Integration",
      description: "Exploring how digital literacy can help members better manage their pension funds and access online services.",
      participants: 42,
      lastActivity: "2 hours ago",
      priority: "Medium",
      status: "Active",
      relatedTopics: ["Digital Literacy", "Pension Fund Updates"]
    },
    {
      id: 3,
      title: "Technology Workshop Planning Committee",
      description: "Joint planning for upcoming technology workshops and their integration with community programs.",
      participants: 25,
      lastActivity: "1 day ago",
      priority: "Medium",
      status: "Planning",
      relatedTopics: ["Technology Workshop", "Community Programs"]
    },
    {
      id: 4,
      title: "Annual Budget Discussion Forum",
      description: "Comprehensive discussion involving all major initiatives for the upcoming annual budget allocation.",
      participants: 95,
      lastActivity: "3 days ago",
      priority: "High",
      status: "Under Review",
      relatedTopics: ["Budget Planning", "All Initiatives"]
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Planning":
        return "bg-blue-100 text-blue-800";
      case "Under Review":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/current-discussion" className="text-white hover:underline mb-4 inline-flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Current Discussions
          </Link>
          <h1 className="text-4xl font-bold mb-4">Joint Discussions</h1>
          <p className="text-xl">Collaborative discussions where multiple topics and initiatives come together</p>
        </div>
      </section>

      {/* Joint Discussions List */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jointDiscussions.map((discussion) => (
              <Card key={discussion.id} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{discussion.title}</h3>
                    <div className="flex gap-2">
                      <Badge className={`text-xs ${getPriorityColor(discussion.priority)}`}>
                        {discussion.priority}
                      </Badge>
                      <Badge className={`text-xs ${getStatusColor(discussion.status)}`}>
                        {discussion.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">{discussion.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Related Topics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {discussion.relatedTopics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-gray-600 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{discussion.participants} participants</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{discussion.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Link to="/submit-feedback" className="w-full">
                      <Button variant="outline" className="w-full">
                        Share Thoughts
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Start a New Joint Discussion</h2>
          <p className="text-lg mb-8">
            Have an idea that combines multiple topics? Start a collaborative discussion to bring the community together.
          </p>
          <Link to="/submit-feedback">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Propose Joint Discussion
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default JointDiscussion;
