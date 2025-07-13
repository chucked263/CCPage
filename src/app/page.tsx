"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone, AlertTriangle, Menu, X, Info } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Link from 'next/link';
import Image from 'next/image';

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


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      <header className="sticky top-0 z-50 py-4 px-4 md:px-8 bg-card shadow-md">
        <div className="container mx-auto flex items-center justify-between">
         <Link href="/" aria-label="Back to Home">
            <Image 
                src="https://placehold.co/180x40.png" 
                alt="Components Centre Logo" 
                width={180} 
                height={40} 
                className="h-10 w-auto" 
                priority 
                data-ai-hint="logo"
            />
          </Link>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="flex items-center justify-between">
                  Menu
                  <SheetClose asChild>
                     <Button variant="ghost" size="icon">
                        <X className="h-6 w-6" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                  </SheetClose>
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                <Button variant="link" asChild className="justify-start text-lg">
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                </Button>
                <Button variant="link" asChild className="justify-start text-lg">
                  <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                </Button>
                <Button variant="link" className="justify-start text-lg" onClick={() => scrollToSection('contact')}>
                  Contact Us
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
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
                Our website is currently undergoing maintenance. We
                will be back when upgrades are complete. Thank you.
              </p>
            </div>
          </div>
        </div>
        
        <section id="contact" className="pt-16 -mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-6 text-lg">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>+263 776 733 222</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0" />
                  <span>info@components.co.zw</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span>Milton Park, Harare, Zimbabwe</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hidden lg:flex bg-gradient-to-br from-accent/90 to-accent flex-col items-center justify-center text-center p-8 md:p-12 text-accent-foreground">
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
                  href="https://wa.me/263776733222"
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

        <section id="about-us-cta" className="text-center py-12 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-headline">Curious to learn more about us?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover what drives us to be your most reliable partner.
          </p>
          <Button asChild size="lg">
            <Link href="/about">
              <Info className="mr-2 h-5 w-5" />
              About Us
            </Link>
          </Button>
        </section>
      </main>

       <a
        href="https://wa.me/263776733222"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center scale-100 hover:scale-110 ease-in-out duration-300"
      >
        <WhatsAppIcon />
      </a>

      <footer className="bg-card py-4 mt-auto">
        <div className="container mx-auto text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Components Centre. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
