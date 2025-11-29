import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Upload, Mail, Phone, User, FileText } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface QuoteFormProps {
    trigger?: React.ReactNode;
}

export const QuoteForm = ({ trigger }: QuoteFormProps) => {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        contactName: "",
        contactEmail: "",
        phone: "",
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

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.contactEmail)) {
            toast.error("Please enter a valid email address");
            return;
        }

        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("contactName", formData.contactName);
            formDataToSend.append("contactEmail", formData.contactEmail);
            formDataToSend.append("phone", formData.phone);
            formDataToSend.append("serviceType", formData.serviceType);
            formDataToSend.append("projectDetails", formData.projectDetails);

            if (file) {
                formDataToSend.append("file", file);
            }

            const response = await fetch("http://localhost:3001/api/quote", {
                method: "POST",
                body: formDataToSend,
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Quote request submitted successfully! We'll get back to you soon.");
                setFormData({
                    contactName: "",
                    contactEmail: "",
                    phone: "",
                    serviceType: "",
                    projectDetails: "",
                });
                setFile(null);
                setOpen(false);
            } else {
                toast.error(data.error || "Failed to submit quote request. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting quote form:", error);
            toast.error("Failed to submit quote request. Please make sure the server is running.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger || (
                    <Button>
                        <Upload className="mr-2 h-4 w-4" />
                        Request Quote
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-heading">Request a Quote</DialogTitle>
                    <DialogDescription>
                        Fill out the form below and we'll get back to you with a detailed quote.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="contactName">
                            Contact Name <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="contactName"
                                value={formData.contactName}
                                onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                                placeholder="Your name"
                                className="pl-10"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="contactEmail">
                            Email <span className="text-destructive">*</span>
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="contactEmail"
                                type="email"
                                value={formData.contactEmail}
                                onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                                placeholder="your.email@example.com"
                                className="pl-10"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+91 12345 67890"
                                className="pl-10"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="serviceType">
                            Service Type <span className="text-destructive">*</span>
                        </Label>
                        <Select
                            value={formData.serviceType}
                            onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="3D Printing">3D Printing</SelectItem>
                                <SelectItem value="Designing & Modeling">Designing & Modeling</SelectItem>
                                <SelectItem value="Machining Services">Machining Services</SelectItem>
                                <SelectItem value="Laser Cutting & Engraving">Laser Cutting & Engraving</SelectItem>
                                <SelectItem value="Custom PCB Design">Custom PCB Design</SelectItem>
                                <SelectItem value="Custom Projects">Custom Projects</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="projectDetails">Project Details</Label>
                        <div className="relative">
                            <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Textarea
                                id="projectDetails"
                                value={formData.projectDetails}
                                onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                                placeholder="Describe your project requirements, specifications, timeline, etc..."
                                rows={5}
                                className="pl-10 pt-3"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="file">Upload CAD File (Optional)</Label>
                        <Input
                            id="file"
                            type="file"
                            onChange={(e) => setFile(e.target.files?.[0] || null)}
                            accept=".stl,.step,.stp,.iges,.igs,.obj,.dxf,.dwg,.pdf"
                            className="cursor-pointer"
                        />
                        {file && (
                            <p className="text-sm text-muted-foreground">
                                Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                            Accepted formats: STL, STEP, IGES, OBJ, DXF, DWG, PDF (Max 50MB)
                        </p>
                    </div>

                    <div className="flex gap-3 pt-4">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setOpen(false)}
                            className="flex-1"
                            disabled={isSubmitting}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isSubmitting} className="flex-1">
                            {isSubmitting ? "Submitting..." : "Submit Request"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};
