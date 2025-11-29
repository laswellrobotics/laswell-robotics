import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

export default function About() {

  const contacts = [
    {
      icon: Mail,
      title: "Email",
      value: "laswellrobotics@gmail.com",
      href: "mailto:laswellrobotics@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 84698 02004",
      href: "tel:+918469802004",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Ahmedabad & Surat",
    },
  ] as const;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-20">
        <div className="container max-w-5xl">
          <section className="mb-20 text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-3">
              START YOUR <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">PROJECT</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? Get in touch with our team today.
            </p>
          </section>

          {/* About Us content */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">About Us</h2>
            <Card className="p-8 md:p-12 mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Laswell Robotics is a leading provider of on-demand manufacturing, robotics, and automation services. We
                  transform innovative ideas into reality through precision engineering and modern fabrication technology.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  From rapid prototyping to small-batch production, our team combines design-for-manufacture expertise with
                  dependable delivery so you can move from concept to product with confidence.
                </p>
              </div>
            </Card>

            {/* Quick stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">50+ </div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2</div>
                <div className="text-sm text-muted-foreground">Locations: Ahmedabad & Surat</div>
              </Card>
              <Card className="p-6 text-center hidden lg:block">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">24h</div>
                <div className="text-sm text-muted-foreground">Average Quote Response</div>
              </Card>
            </div>
          </section>

          {/* Professional overview */}
          <section className="mb-12 grid md:grid-cols-2 gap-6">
            <Card className="p-8">
              <h3 className="font-heading font-bold text-lg mb-3">What we do</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Rapid prototyping and small‑batch production</li>
                <li>End‑to‑end product development (mechanical, electronics, firmware)</li>
                <li>Custom jigs, automation and test fixtures</li>
                <li>Design reviews and DFM consulting</li>
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="font-heading font-bold text-lg mb-3">How we work</h3>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Brief & requirements</li>
                <li>Proposal with cost and lead time</li>
                <li>Build & quality checks</li>
                <li>Delivery and support</li>
              </ol>
            </Card>
          </section>

          {/* Capabilities snapshot */}
          <section className="mb-16">
            <Card className="p-8">
              <h3 className="font-heading font-bold text-lg mb-3">Core capabilities</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-muted-foreground">
                <div>3D Printing (FDM/SLA)</div>
                <div>CNC Milling & Turning</div>
                <div>Laser Cutting & Engraving</div>
                <div>CAD Design & Simulation</div>
                <div>PCB Design & Assembly</div>
                <div>System Integration</div>
              </div>
            </Card>
          </section>

          {/* Get in touch */}
          <section className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-6 text-center">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contacts.map((c) => (
                <Card key={c.title} className="p-8 text-center border-2">
                  <div className="mx-auto mb-4 h-12 w-12 rounded-xl bg-gradient-to-tr from-primary/20 to-accent/20 flex items-center justify-center">
                    <c.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">{c.title}</div>
                  {c.href ? (
                    <a href={c.href} className="block font-semibold mt-1 hover:underline">
                      {c.value}
                    </a>
                  ) : (
                    <div className="font-semibold mt-1">{c.value}</div>
                  )}
                </Card>
              ))}
            </div>
          </section>

          <section className="text-center">
            <QuoteForm
              trigger={
                <Button
                  size="lg"
                  className="px-10 text-base bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow"
                >
                  REQUEST A QUOTE <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              }
            />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
