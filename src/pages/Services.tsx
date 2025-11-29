import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Box, Cpu, Hexagon, Zap, CircuitBoard, ExternalLink, Wrench } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

// service images
import img3d from "@/assets/service-3d-printing.jpg";
import imgDesign from "@/assets/service-design.jpg";
import imgMachining from "@/assets/service-machining.jpg";
import imgLaser from "@/assets/service-laser.jpg";

export default function Services() {

  const services = [
    {
      id: "3d-printing",
      icon: Box,
      title: "3D Printing",
      description: "High-quality additive manufacturing for rapid prototyping and production",
      image: img3d,
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
      image: imgDesign,
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
      image: imgMachining,
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
      image: imgLaser,
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
      image: imgDesign,
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
    },
    {
      id: "custom-projects",
      icon: Wrench,
      title: "Custom Projects",
      description: "Turnkey product development and one‑off automation",
      image: imgMachining,
      details: [
        "Discovery & requirements definition",
        "System design: mechanics, electronics, control",
        "Fabrication, integration and firmware",
        "Testing, validation and documentation",
        "Handover, training and after‑delivery support"
      ],
      specs: [
        { label: "Deliverables", value: "CAD, PCB, firmware, BOM, drawings, manuals" },
        { label: "Engagement", value: "Fixed bid or Time & Materials" },
        { label: "NDA", value: "Available on request" }
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
                From concept to production, we combine CAD, machining, additive manufacturing, electronics and firmware to deliver end‑to‑end solutions.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-16">
              {services.map((service, idx) => {
                const ImageFirst = idx % 2 === 1; // alternate layout
                return (
                  <div key={service.id} className="grid md:grid-cols-2 gap-8 items-center">
                    {ImageFirst && (
                      <img src={(service as any).image} alt={`${service.title} image`} className="w-full rounded-xl shadow-lg" />
                    )}

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <service.icon className="h-6 w-6 text-primary" />
                        <h3 className="text-2xl font-heading font-bold">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                        {service.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>

                      {"specs" in service && (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                          {(service as any).specs?.map((s: { label: string; value: string }, i: number) => (
                            <div key={i} className="rounded-md border p-3 text-sm">
                              <div className="text-muted-foreground">{s.label}</div>
                              <div className="font-medium">{s.value}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      <QuoteForm
                        trigger={
                          <Button>
                            Request Quote <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        }
                      />
                    </div>

                    {!ImageFirst && (
                      <img src={(service as any).image} alt={`${service.title} image`} className="w-full rounded-xl shadow-lg order-first md:order-none" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Professional sections */}
            <div className="mt-16 grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-heading font-bold text-lg mb-2">Why choose Laswell</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Single vendor from design to parts to assembly</li>
                  <li>Transparent pricing and fast, realistic lead times</li>
                  <li>Quality control on every batch and test reports on request</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="font-heading font-bold text-lg mb-2">Engagement models</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Fixed‑bid for well‑defined scope</li>
                  <li>Time & Materials for iterative R&D</li>
                  <li>NDA and IP assignment available</li>
                </ul>
              </Card>
            </div>

            <div className="text-center mt-10">
              <QuoteForm
                trigger={
                  <Button size="lg" className="px-10">
                    Start a Custom Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                }
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
