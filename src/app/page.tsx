import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gem, Mail, MapPin, Phone, ShieldCheck, Users, AlertTriangle } from "lucide-react";
import Logo from "@/components/logo";

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="currentColor"
    {...props}
  >
    <path d="M17.472 14.382c-.297-.149-.88-.436-1.017-.486s-.282-.074-.41-.024c-.128.05-.282.174-.385.323s-.174.297-.348.495c-.174.198-.348.223-.645.074s-1.263-.466-2.403-1.485c-.88-.79-1.485-1.76-1.659-2.057s-.024-.41.05-.56c.074-.149.174-.27.27-.41s.149-.174.223-.297c.074-.128.024-.282-.05-.436s-.41-.99-.56-1.338c-.149-.348-.297-.297-.41-.323s-.223-.024-.348-.024c-.128 0-.348.05-.522.247s-.665.645-.815.79c-.149.149-.297.323-.297.598s.024 1.16 1.338 2.478c1.314 1.314 2.223 2.82 4.493 3.308.57.128 1.017.1.174.05.223-.05.88-.37 1.017-.715s.128-.645.074-.715c-.05-.074-.128-.128-.282-.223zM12.002 2.002c-5.525 0-10 4.475-10 10 0 1.75.45 3.42 1.257 4.852L2 22l5.318-1.38c1.386.786 2.94.257 4.682.257 5.525 0 10-4.475 10-10s-4.475-10-10-10z" />
  </svg>
);

const values = [
  {
    icon: Gem,
    title: "Quality First",
    description: "We are committed to providing components of the highest quality, ensuring performance and durability.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "Our products and services are dependable, meeting the standards our customers expect.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "We build strong relationships by understanding and responding to our customer's needs.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <header className="py-6 px-4 md:px-8 bg-card shadow-sm">
        <div className="container mx-auto flex items-center">
          <Logo className="h-12 w-auto" />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 animate-in fade-in duration-500">
        <div
          className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md mb-8 md:mb-12"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <AlertTriangle className="h-6 w-6 text-yellow-500 mr-4" />
            </div>
            <div>
              <p className="font-bold">Website Under Maintenance</p>
              <p className="text-sm">
                Our website is currently undergoing scheduled maintenance. We
                should be back shortly. Thank you for your patience.
              </p>
            </div>
          </div>
        </div>

        <section id="values" className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-6 text-lg">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>123 Innovation Drive, Tech Park, Silicon Valley, CA 94000</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>+1 (234) 567-8900</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>contact@componentscentre.com</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/90 to-accent flex flex-col items-center justify-center text-center p-8 md:p-12 text-accent-foreground">
              <h3 className="text-2xl font-bold mb-4 font-headline">Need Help Instantly?</h3>
              <p className="mb-6 max-w-sm">
                Click the button below to start a conversation with our support team directly on WhatsApp.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-accent hover:bg-gray-100 shadow-lg scale-100 hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                >
                  <WhatsAppIcon />
                  Chat on WhatsApp
                </a>
              </Button>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-card py-4 mt-12">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Components Centre. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
