import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Box, Cpu, Hexagon, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-robotics.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
        </div>
        
        <div className="relative container z-10 text-center py-20">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
            Robotics, Automation & On-Demand Manufacturing Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Professional manufacturing solutions for your next innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/services')}
              className="text-lg"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSeQLnEpZc5Dl_jaQuXUkT0MthngXRUnx1Ewo1kc8ZYjbO9wzg/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:opacity-90 h-11 px-8 text-lg"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Box className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-heading font-bold mb-2">Manufacturing</h3>
              <p className="text-muted-foreground">
                Precision 3D printing and additive manufacturing for prototypes and production parts
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Cpu className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-heading font-bold mb-2">Designing & Modeling</h3>
              <p className="text-muted-foreground">
                Expert CAD design and 3D modeling services to bring your ideas to life
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Hexagon className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-heading font-bold mb-2">Machining Services</h3>
              <p className="text-muted-foreground">
                CNC machining and precision manufacturing for complex components
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 mb-4 text-primary" />
              <h3 className="text-xl font-heading font-bold mb-2">Laser Cutting and Engraving</h3>
              <p className="text-muted-foreground">
                High-precision laser cutting and engraving for various materials
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-12 bg-gradient-to-r from-shop-accent to-shop-accent/80">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-shop-accent-foreground mb-4">
            Online Robotics & Electronics Shop
          </h2>
          <p className="text-xl text-shop-accent-foreground/90 mb-6">
            Coming Soon! Browse our curated selection of robotics components and electronics
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => navigate('/shop')}
          >
            Learn More
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}