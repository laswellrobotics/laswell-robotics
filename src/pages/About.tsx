import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container max-w-4xl">
          <section className="mb-20">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-center">
              About Us
            </h1>
            <Card className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Laswell Robotics is a leading provider of on-demand manufacturing, robotics, and automation services. 
                  We specialize in transforming innovative ideas into reality through cutting-edge technology and expert craftsmanship.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  Our mission is to make advanced manufacturing accessible to everyone—from individual makers and startups 
                  to established enterprises. With state-of-the-art equipment and a team of experienced engineers, we deliver 
                  high-quality results on every project.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether you need rapid prototyping, custom parts manufacturing, or complete product development support, 
                  Laswell Robotics has the expertise and technology to bring your vision to life.
                </p>
              </div>
            </Card>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Get in Touch
            </h2>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you?"
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}