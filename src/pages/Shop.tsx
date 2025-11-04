import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Battery, Gauge, Camera, Radio, Zap, Cog, Boxes } from "lucide-react";

export default function Shop() {
  const categories = [
    { icon: Cpu, name: "Motors", description: "Servo and stepper motors" },
    { icon: Gauge, name: "Sensors", description: "Temperature, distance, motion" },
    { icon: Battery, name: "Batteries", description: "LiPo, NiMH, and more" },
    { icon: Camera, name: "Cameras", description: "Vision systems" },
    { icon: Radio, name: "Controllers", description: "Microcontrollers & boards" },
    { icon: Zap, name: "Power Supply", description: "Regulators and converters" },
    { icon: Cog, name: "Mechanical", description: "Gears, wheels, chassis" },
    { icon: Boxes, name: "Kits", description: "Complete robot kits" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <Badge className="mb-4 bg-shop-accent text-shop-accent-foreground text-lg px-6 py-2">
              COMING SOON
            </Badge>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Robotics & Electronics Store
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your one-stop shop for robotics components, electronics, and maker supplies
            </p>
          </div>

          <section className="mb-20">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              Preview Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Card key={category.name} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <category.icon className="h-12 w-12 mx-auto mb-4 text-shop-accent" />
                  <h3 className="font-heading font-bold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </Card>
              ))}
            </div>
          </section>

          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-heading font-bold mb-8 text-center">
              What to Expect
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-heading font-bold text-lg mb-3">🚀 Fast Shipping</h3>
                <p className="text-muted-foreground">
                  Quick processing and reliable delivery to get your projects moving
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-heading font-bold text-lg mb-3">💎 Quality Products</h3>
                <p className="text-muted-foreground">
                  Curated selection of reliable components from trusted manufacturers
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-heading font-bold text-lg mb-3">📚 Documentation</h3>
                <p className="text-muted-foreground">
                  Detailed specs, datasheets, and example code for every product
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-heading font-bold text-lg mb-3">🛠️ Expert Support</h3>
                <p className="text-muted-foreground">
                  Technical assistance from our experienced robotics team
                </p>
              </Card>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}