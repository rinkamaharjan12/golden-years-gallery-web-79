
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Image, Upload, PenLine, Info } from "lucide-react";

const SubmitPhotos = () => {
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!files || files.length === 0) {
      toast.error("Please select at least one photo");
      return;
    }

    if (!title.trim()) {
      toast.error("Please provide a title");
      return;
    }

    // Simulate upload
    setUploading(true);
    
    // In a real implementation, you would upload the files to a server
    setTimeout(() => {
      toast.success("Photos submitted successfully!");
      setUploading(false);
      setFiles(null);
      setTitle("");
      setDescription("");
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white">
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Submit Photos</h1>
          <p className="text-xl md:text-2xl leading-relaxed">
            Share your memories with the R.E.S.T community
          </p>
        </div>
      </section>

      {/* Submit Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Photo Guidelines</h2>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start space-x-3">
                      <Image className="w-5 h-5 text-primary mt-1" />
                      <p className="text-gray-700">Photos should be in JPG or PNG format</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Image className="w-5 h-5 text-primary mt-1" />
                      <p className="text-gray-700">Maximum file size: 5MB per image</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <PenLine className="w-5 h-5 text-primary mt-1" />
                      <p className="text-gray-700">Provide a descriptive title for your submission</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Info className="w-5 h-5 text-primary mt-1" />
                      <p className="text-gray-700">Photos will be reviewed before being published</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Upload Your Photos</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-base">Title</Label>
                  <Input 
                    id="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a title for your photos" 
                    className="text-base"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base">Description (Optional)</Label>
                  <textarea 
                    id="description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell us about these photos..." 
                    className="flex h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="photos" className="text-base">Photos</Label>
                  <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-700 mb-4">Drag and drop your photos here, or click to browse</p>
                    <Input 
                      id="photos" 
                      type="file" 
                      multiple
                      accept="image/*"
                      onChange={(e) => setFiles(e.target.files)}
                      className="hidden" 
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => document.getElementById('photos')?.click()}
                    >
                      Select Files
                    </Button>
                    {files && files.length > 0 && (
                      <p className="mt-4 text-green-600">
                        {files.length} {files.length === 1 ? 'file' : 'files'} selected
                      </p>
                    )}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto text-lg bg-primary hover:bg-primary/90"
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Submit Photos"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SubmitPhotos;
