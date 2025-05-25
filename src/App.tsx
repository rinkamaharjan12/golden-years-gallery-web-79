
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import MembershipPage from "./pages/MembershipPage";
import SubmitPhotos from "./pages/SubmitPhotos";
import EventRegistration from "./pages/EventRegistration";
import CurrentDiscussion from "./pages/CurrentDiscussion";
import SubmitFeedback from "./pages/SubmitFeedback";
import RecentEvents from "./pages/RecentEvents";
import JointDiscussion from "./pages/JointDiscussion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/event-registration" element={<EventRegistration />} />
              <Route path="/current-discussion" element={<CurrentDiscussion />} />
              <Route path="/joint-discussion" element={<JointDiscussion />} />
              <Route path="/submit-feedback" element={<SubmitFeedback />} />
              <Route path="/recent-events" element={<RecentEvents />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/membership" element={<MembershipPage />} />
              <Route path="/submit-photos" element={<SubmitPhotos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
