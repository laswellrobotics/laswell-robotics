import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload } from "lucide-react";

export const FileUploadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    serviceType: "",
    projectDetails: "",
  });
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.contactName || !formData.contactEmail || !formData.serviceType) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    try {
      toast.success("Service request submitted successfully!");
      setFormData({
        contactName: "",
        contactEmail: "",
        serviceType: "",
        projectDetails: "",
      });
      setFile(null);
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-8 bg-card rounded-lg border shadow-md">
      <div className="space-y-2">
        <h3 className="text-2xl font-heading font-bold">Request a Quote</h3>
        <p className="text-muted-foreground">Fill out the form below to get started with your project</p>
      </div>

      <div className="space-y-4">
        <div>
          <Label htmlFor="contactName">Contact Name *</Label>
          <Input
            id="contactName"
            value={formData.contactName}
            onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <Label htmlFor="contactEmail">Email *</Label>
          <Input
            id="contactEmail"
            type="email"
            value={formData.contactEmail}
            onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
            placeholder="your.email@example.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="serviceType">Service Type *</Label>
          <Select value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3d-printing">3D Printing</SelectItem>
              <SelectItem value="design-modeling">Designing & Modeling</SelectItem>
              <SelectItem value="machining">Machining Services</SelectItem>
              <SelectItem value="laser-cutting">Laser Cutting & Engraving</SelectItem>
              <SelectItem value="pcb-design">Custom PCB Design</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="projectDetails">Project Details</Label>
          <Textarea
            id="projectDetails"
            value={formData.projectDetails}
            onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
            placeholder="Describe your project requirements..."
            rows={5}
          />
        </div>

        <div>
          <Label htmlFor="file">Upload CAD File (Optional)</Label>
          <Input
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            accept=".stl,.step,.stp,.iges,.igs,.obj,.dxf,.dwg"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Accepted formats: STL, STEP, IGES, OBJ, DXF, DWG
          </p>
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        <Upload className="mr-2 h-4 w-4" />
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
};