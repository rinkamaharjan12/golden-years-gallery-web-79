
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const EventRegistration = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const eventId = searchParams.get("eventId");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    emergencyContact: "",
    emergencyPhone: "",
    dietaryRestrictions: "",
    specialNeeds: "",
    agreeToTerms: false,
  });

  // Event data - in a real app, this would come from an API
  const events = {
    "1": {
      title: "Monthly General Meeting",
      description: "Our regular monthly meeting to discuss community matters, share updates, and plan upcoming activities. All members are encouraged to attend.",
      date: "June 15, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "R.E.S.T Central Office, Kathmandu",
      attendees: "All Members",
    },
    "2": {
      title: "Health and Wellness Workshop",
      description: "A comprehensive workshop focusing on health management during retirement years. Topics include nutrition, exercise, and mental wellness.",
      date: "June 22, 2024", 
      time: "2:00 PM - 4:00 PM",
      location: "Community Center, Bhaktapur",
      attendees: "Open to All",
    },
    "3": {
      title: "Annual Picnic and Recreation Day",
      description: "Join us for a day of fun, food, and fellowship at our annual picnic. Bring your families and enjoy recreational activities.",
      date: "July 5, 2024",
      time: "9:00 AM - 5:00 PM", 
      location: "Shivapuri National Park",
      attendees: "Members & Families",
    }
  };

  const event = eventId ? events[eventId as keyof typeof events] : null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreeToTerms: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to the terms and conditions to proceed.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would submit to an API
    console.log("Registration submitted:", { eventId, ...formData });
    
    toast({
      title: "Registration Successful!",
      description: "Thank you for registering. You will receive a confirmation email shortly.",
    });

    // Redirect back to events page after a short delay
    setTimeout(() => {
      navigate("/events");
    }, 2000);
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Event Not Found</h2>
            <p className="text-gray-600 mb-4">The event you're trying to register for could not be found.</p>
            <Button onClick={() => navigate("/events")}>
              Back to Events
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Event Details */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-2xl">Event Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{event.title}</h3>
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
              
              <div className="space-y-3">
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
            </CardContent>
          </Card>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Registration Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                    <Input
                      id="emergencyContact"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                    <Input
                      id="emergencyPhone"
                      name="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dietaryRestrictions">Dietary Restrictions</Label>
                  <Textarea
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    value={formData.dietaryRestrictions}
                    onChange={handleInputChange}
                    placeholder="Please list any dietary restrictions or allergies"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="specialNeeds">Special Needs or Accessibility Requirements</Label>
                  <Textarea
                    id="specialNeeds"
                    name="specialNeeds"
                    value={formData.specialNeeds}
                    onChange={handleInputChange}
                    placeholder="Please describe any special accommodations needed"
                    rows={3}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="agreeToTerms" className="text-sm">
                    I agree to the terms and conditions and understand that this registration is subject to event capacity and approval *
                  </Label>
                </div>

                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => navigate("/events")}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    Register Now
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EventRegistration;
