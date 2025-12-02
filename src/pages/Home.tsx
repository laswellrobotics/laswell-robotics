import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Box, Cpu, Hexagon, Zap, CircuitBoard, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-robotics.jpg";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
// service images
import img3d from "@/assets/service-3d-printing.jpg";
import imgDesign from "@/assets/service-design.jpg";
import imgMachining from "@/assets/service-machining.jpg";
import imgLaser from "@/assets/service-laser.jpg";

export default function Home() {
  const navigate = useNavigate();

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

      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
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
              <QuoteForm
                trigger={
                  <Button size="lg" className="text-lg">
                    Request a Quote
                  </Button>
                }
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services overview (concise) */}
      <section className="py-20 bg-background">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">Our Services</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <Card className="p-6 rounded-xl border shadow-sm hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <s.icon className="h-8 w-8 text-primary mt-1" />
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-1">{s.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {s.description}
                      </p>
                      <ul className="mt-3 list-disc list-inside text-muted-foreground/90 text-sm space-y-1">
                        {s.details.slice(0, 3).map((d: string, idx: number) => (
                          <li key={idx}>{d}</li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <Button variant="secondary" size="sm" onClick={() => navigate(`/services#${s.id}`)}>
                          Learn more
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" onClick={() => navigate('/services')}>
              View Full Services <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Our Edge */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-10">Our Edge</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Engineering-first", d: "Design reviews and DFM by practicing engineers" },
              { t: "Reliable timelines", d: "Clear schedules and proactive communication" },
              { t: "Quality built-in", d: "Material checks and QC on every batch" },
            ].map((f, i) => (
              <Reveal key={f.t} delay={i * 120}>
                <Card className="p-6 h-full">
                  <div className="text-lg font-heading font-semibold mb-2">{f.t}</div>
                  <p className="text-muted-foreground text-sm">{f.d}</p>
                </Card>
              </Reveal>
            ))}
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

      {/* Primary CTA */}
      <section className="py-14">
        <div className="container">
          <Card className="p-8 md:p-12 text-center bg-gradient-to-r from-primary to-accent">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-3">Have a part, product or idea?</h3>
            <p className="text-primary-foreground/90 mb-6">Share your CAD or sketches and get a fast, actionable quote.</p>
            <QuoteForm
              trigger={
                <Button size="lg" variant="secondary">
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
          </Card>
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