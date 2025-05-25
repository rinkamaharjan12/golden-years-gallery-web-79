import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
const CurrentDiscussion = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const issueId = searchParams.get('issueId');
  const allIssues = [{
    id: 1,
    title: "Healthcare Benefits Discussion",
    description: "Discussion regarding enhanced healthcare benefits for retired members. We are exploring partnerships with local hospitals for better medical care coverage.",
    priority: "High",
    status: "Ongoing",
    fullContent: "Our organization is actively working to improve healthcare benefits for all retired members. We are currently in negotiations with three major hospitals in Kathmandu valley to establish partnerships that would provide our members with preferential rates and priority appointments. The proposed benefits include: 1) 20% discount on all medical services, 2) Priority booking for specialist consultations, 3) Annual health checkups at reduced rates, 4) Emergency medical assistance hotline. We encourage all members to participate in this discussion and share their healthcare needs and concerns.",
    participants: 45,
    lastActivity: "2 hours ago"
  }, {
    id: 2,
    title: "Pension Fund Updates",
    description: "Updates on pension fund management and distribution policies. Members will be informed about recent changes and future planning.",
    priority: "Medium",
    status: "Under Review",
    fullContent: "The pension fund committee has been reviewing our current distribution policies to ensure they meet the evolving needs of our members. Recent market performance has been positive, with a 7.2% growth in the fund value over the past year. Key updates include: 1) Monthly pension payments will increase by 5% starting next quarter, 2) New investment strategies focusing on stable, long-term growth, 3) Introduction of emergency withdrawal options for medical emergencies, 4) Digital payment options for easier access to funds.",
    participants: 32,
    lastActivity: "1 day ago"
  }, {
    id: 3,
    title: "Community Center Renovation",
    description: "Plans for renovating our community center to make it more accessible and comfortable for all members, especially elderly participants.",
    priority: "Medium",
    status: "Planning Phase",
    fullContent: "The community center renovation project aims to create a more accessible and comfortable space for all our members. The proposed renovations include: 1) Installation of wheelchair ramps and elevators, 2) Modernization of meeting rooms with audio-visual equipment, 3) Creation of a dedicated health and wellness area, 4) Improved parking facilities, 5) Energy-efficient lighting and climate control systems. The estimated budget is NPR 2.5 million, and we are seeking input from members on priorities and funding options.",
    participants: 28,
    lastActivity: "3 days ago"
  }, {
    id: 4,
    title: "Digital Literacy Program",
    description: "Initiative to help members become more comfortable with digital technology and online communication platforms.",
    priority: "Low",
    status: "Proposed",
    fullContent: "The digital literacy program is designed to help our members navigate the increasingly digital world with confidence. The program will cover: 1) Basic smartphone and tablet usage, 2) Online banking and digital payments, 3) Video calling and social media basics, 4) Online shopping and e-commerce safety, 5) Digital health applications. Classes will be held twice a week, with small groups of 8-10 participants to ensure personalized attention. Volunteer instructors from local tech companies have offered to help with the program.",
    participants: 15,
    lastActivity: "1 week ago"
  }];
  const currentIssue = issueId ? allIssues.find(issue => issue.id === parseInt(issueId)) : allIssues[0];
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
  const handleDiscussionClick = (discussionId: number) => {
    setSearchParams({
      issueId: discussionId.toString()
    });
  };
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/events" className="text-white hover:underline mb-4 inline-block">
            ← Back to Events
          </Link>
          <h1 className="text-4xl font-bold mb-4">Current Discussions</h1>
          <p className="text-xl">Join the conversation and share your thoughts on important community matters</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Discussion List */}
          <div className="lg:col-span-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">All Discussions</h2>
              <Link to="/joint-discussion">
                <Button variant="outline" size="sm">
                  Joint Discussions
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {allIssues.map(issue => <Card key={issue.id} className={`cursor-pointer transition-shadow hover:shadow-md ${currentIssue?.id === issue.id ? 'ring-2 ring-primary' : ''}`} onClick={() => handleDiscussionClick(issue.id)}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-sm">{issue.title}</h3>
                      
                    </div>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{issue.description}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Users className="w-3 h-3" />
                        <span>{issue.participants}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{issue.lastActivity}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>

          {/* Main Discussion */}
          <div className="lg:col-span-2">
            {currentIssue && <Card>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{currentIssue.title}</h1>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <Badge className={getPriorityColor(currentIssue.priority)}>
                          {currentIssue.priority} Priority
                        </Badge>
                        <span className="text-sm">Status: {currentIssue.status}</span>
                      </div>
                    </div>
                  </div>

                  <div className="prose max-w-none mb-8">
                    <p className="text-lg leading-relaxed text-gray-700">
                      {currentIssue.fullContent}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t pt-6">
                    <div className="flex items-center space-x-6 text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5" />
                        <span>{currentIssue.participants} participants</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <span>Last activity: {currentIssue.lastActivity}</span>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Link to="/submit-feedback">
                        <Button>Share Your Thoughts</Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>}
          </div>
        </div>
      </div>
    </div>;
};
export default CurrentDiscussion;