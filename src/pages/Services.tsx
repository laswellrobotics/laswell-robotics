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
        "FDM (PLA/ABS/PETG/TPU/Nylon) & SLA (engineering resins)",
        "Layer height 0.1–0.3 mm, typical tolerance ±0.2 mm or ±0.2%",
        "Build volume up to 300 × 300 × 300 mm",
        "Post-processing: sanding, priming, painting, vapor smoothing",
        "Lead time: 1–3 business days"
      ],
      specs: [
        { label: "Technologies", value: "FDM, SLA" },
        { label: "Materials", value: "PLA, ABS, PETG, TPU, Nylon, Resins" },
        { label: "Max Build", value: "300×300×300 mm" },
        { label: "Tolerance", value: "±0.2 mm or ±0.2%" }
      ]
    },
    {
      id: "design-modeling",
      icon: Cpu,
      title: "Designing & Modeling",
      description: "Professional CAD design and 3D modeling services",
      details: [
        "Design from sketches or reference models",
        "DFM optimization and tolerance analysis",
        "Photorealistic rendering for presentations",
        "Manufacturing drawings (GD&T)",
        "Deliverables: STEP, STL, DXF, PDF"
      ],
      specs: [
        { label: "Tools", value: "Fusion 360, SolidWorks, Blender" },
        { label: "Deliverables", value: "STEP, STL, IGES, DXF, PDF" },
        { label: "NDA", value: "Available upon request" }
      ]
    },
    {
      id: "machining",
      icon: Hexagon,
      title: "Machining Services",
      description: "Precision CNC machining for metal and plastic parts",
      details: [
        "3-axis and 4-axis milling, CNC turning",
        "Materials: Aluminum, Steel, Brass, Copper, Delrin, Acrylic",
        "Typical tolerance ±0.05 mm",
        "Finishes: bead blast, anodize, powder coat",
        "Batch sizes: prototypes to small production runs"
      ],
      specs: [
        { label: "Max Envelope", value: "250×250×100 mm (milling)" },
        { label: "Tolerances", value: "±0.05 mm typical" },
        { label: "Surface Finish", value: "Ra 1.6–3.2 µm (as-machined)" }
      ]
    },
    {
      id: "laser-cutting",
      icon: Zap,
      title: "Laser Cutting & Engraving",
      description: "High-precision laser cutting and engraving services",
      details: [
        "CO2 (non-metals) & fiber laser (metals)",
        "Work area up to 600 × 400 mm",
        "Acrylic up to 10 mm; plywood up to 8 mm; stainless up to 1.5 mm",
        "Engraving 300–1000 DPI",
        "Batch and serial engraving supported"
      ],
      specs: [
        { label: "Work Area", value: "600×400 mm" },
        { label: "Resolution", value: "300–1000 DPI" },
        { label: "File Types", value: "DXF, SVG, AI, PDF" }
      ]
    },
    {
      id: "pcb-design",
      icon: CircuitBoard,
      title: "Custom PCB Design",
      description: "Professional PCB design and prototyping",
      details: [
        "Schematic capture, layout, BOM & DFM checks",
        "Up to 6 layers, 6/6 mil trace/space typical",
        "High-speed constraints, impedance control",
        "Prototype assembly (SMD/THT)",
        "Bring-up testing and validation"
      ],
      specs: [
        { label: "Layers", value: "2–6" },
        { label: "Trace/Space", value: "6/6 mil typical" },
        { label: "Deliverables", value: "Gerbers, BoM, Pick&Place, Schematics" }
      ]
    }
  ] as const;

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

                      {"specs" in service && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {(service as any).specs?.map((s: { label: string; value: string }, i: number) => (
                            <div key={i} className="rounded-md border p-3 text-sm">
                              <div className="text-muted-foreground">{s.label}</div>
                              <div className="font-medium">{s.value}</div>
                            </div>
                          ))}
                        </div>
                      )}

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