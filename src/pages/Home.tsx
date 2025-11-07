import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Box, Cpu, Hexagon, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-robotics.jpg";
import { Reveal } from "@/components/Reveal";

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
        {/* Subtle animated blobs (pure CSS, very light) */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-primary/40 to-accent/40 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-accent/30 to-primary/30 blur-3xl animate-blob animation-delay-2000" />
        
        <div className="relative container z-10 text-center py-20">
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6">
              Robotics, Automation & On-Demand Manufacturing Services
            </h1>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Professional manufacturing solutions for your next innovation
            </p>
          </Reveal>
          <Reveal delay={200}>
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
              <Button 
                size="lg"
                onClick={() => navigate('/services#upload')}
                className="text-lg"
              >
                Upload CAD File
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Box className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-heading font-bold mb-2">Manufacturing</h3>
                <p className="text-muted-foreground">
                  Precision 3D printing and additive manufacturing for prototypes and production parts
                </p>
              </Card>
            </Reveal>

            <Reveal delay={100}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Cpu className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-heading font-bold mb-2">Designing & Modeling</h3>
                <p className="text-muted-foreground">
                  Expert CAD design and 3D modeling services to bring your ideas to life
                </p>
              </Card>
            </Reveal>

            <Reveal delay={200}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Hexagon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-heading font-bold mb-2">Machining Services</h3>
                <p className="text-muted-foreground">
                  CNC machining and precision manufacturing for complex components
                </p>
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <Zap className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-heading font-bold mb-2">Laser Cutting and Engraving</h3>
                <p className="text-muted-foreground">
                  High-precision laser cutting and engraving for various materials
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">Capabilities</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { k: "Projects Delivered", v: "50+" },
              { k: "Avg. Lead Time", v: "2.3 days" },
              { k: "Customer Rating", v: "4.9/5" },
              { k: "Repeat Clients", v: "70%" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 100}>
                <Card className="p-6">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{s.v}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.k}</div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">How We Work</h2>
          </Reveal>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { t: "Request", d: "Send CAD/specs via the Quote form" },
              { t: "Review", d: "DFM checks and quick feedback" },
              { t: "Quote", d: "Transparent pricing and lead time" },
              { t: "Build", d: "Manufacture and quality check" },
              { t: "Deliver", d: "On-time shipping or pickup" },
            ].map((step, i) => (
              <Reveal key={step.t} delay={i * 120}>
                <Card className="p-5 text-center">
                  <div className="mx-auto mb-2 h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div className="font-heading font-semibold">{step.t}</div>
                  <div className="text-sm text-muted-foreground">{step.d}</div>
                </Card>
              </Reveal>
            ))}
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