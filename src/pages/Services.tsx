import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Box, Cpu, Hexagon, Zap, CircuitBoard, ExternalLink } from "lucide-react";

export default function Services() {
  // Replace this with your actual Google Form URL
const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeQLnEpZc5Dl_jaQuXUkT0MthngXRUnx1Ewo1kc8ZYjbO9wzg/viewform?usp=dialog";

  const services = [
    {
      id: "3d-printing",
      icon: Box,
      title: "3D Printing",
      description: "High-quality additive manufacturing for rapid prototyping and production",
      details: [
        "FDM and SLA printing technologies",
        "Wide range of materials (PLA, ABS, PETG, Nylon, Resins)",
        "Precision up to 0.1mm layer height",
        "Fast turnaround times",
        "Post-processing services available"
      ]
    },
    {
      id: "design-modeling",
      icon: Cpu,
      title: "Designing & Modeling",
      description: "Professional CAD design and 3D modeling services",
      details: [
        "Custom CAD design from concepts",
        "3D modeling and rendering",
        "Design optimization for manufacturing",
        "Technical drawings and documentation",
        "File format conversion"
      ]
    },
    {
      id: "machining",
      icon: Hexagon,
      title: "Machining Services",
      description: "Precision CNC machining for metal and plastic parts",
      details: [
        "Multi-axis CNC milling and turning",
        "Materials: Aluminum, Steel, Brass, Plastics",
        "Tight tolerances (±0.001\")",
        "Surface finishing options",
        "Small to medium batch production"
      ]
    },
    {
      id: "laser-cutting",
      icon: Zap,
      title: "Laser Cutting & Engraving",
      description: "High-precision laser cutting and engraving services",
      details: [
        "CO2 and fiber laser systems",
        "Materials: Acrylic, Wood, Metal, Leather",
        "Precision cutting and engraving",
        "Custom designs and patterns",
        "Rapid prototyping to production"
      ]
    },
    {
      id: "pcb-design",
      icon: CircuitBoard,
      title: "Custom PCB Design",
      description: "Professional PCB design and prototyping",
      details: [
        "Schematic capture and PCB layout",
        "Multi-layer board design",
        "Component selection and sourcing",
        "Prototype assembly",
        "Testing and validation"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="py-20 bg-background">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Our Services
              </h1>
              <p className="text-xl text-muted-foreground">
                From concept to production, we offer comprehensive manufacturing and design services
              </p>
            </div>

            <Accordion type="single" collapsible className="max-w-4xl mx-auto">
              {services.map((service) => (
                <AccordionItem key={service.id} value={service.id}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-heading font-bold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-10 pt-4 space-y-4">
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {service.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                      <Button 
                        onClick={() => window.open(googleFormUrl, '_blank')}
                        className="mt-4"
                      >
                        Request Quote
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}