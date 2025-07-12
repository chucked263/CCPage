"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Truck, Search, Handshake, Menu, X, ShieldCheck, Scale, Wrench } from "lucide-react";
import Logo from "@/components/logo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Link from 'next/link';

const aboutSections = [
    {
        icon: Handshake,
        title: "Reliable Supply Partnership",
        description: "We work with you to establish your core requirements and provide a consistent stock of the critical items you need to operate, from workshop consumables to essential spares."
    },
    {
        icon: Search,
        title: "Expert Sourcing Service",
        description: "For everyday parts and the parts that standard suppliers don't have, we are your solution. We leverage our global network to source and import the rare or specialized components that are holding you back."
    },
    {
        icon: Truck,
        title: "Convenient Delivery",
        description: "We deliver directly to your workshop or establishment, saving you valuable time and allowing you to focus on your core work."
    }
]

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "Our promise is consistency. You can depend on us for quality products and dependable service, every time.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We work with you to understand your needs, anticipate your requirements, and act as a seamless extension of your own operation.",
  },
  {
    icon: Scale,
    title: "Honesty",
    description: "Complete transparency in our products, pricing, and technical advice.",
  },
  {
    icon: Wrench,
    title: "Technical Competence",
    description: "Our engineering background ensures we understand the critical nature of what you do and can provide credible, expert support.",
  }
];

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
        <header className="sticky top-0 z-50 py-4 px-4 md:px-8 bg-card shadow-md">
            <div className="container mx-auto flex items-center justify-between">
            <Link href="/" aria-label="Back to Home">
                <Logo className="h-12 w-auto" />
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
                        <Link href="/about" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    </Button>
                     <Button variant="link" asChild className="justify-start text-lg">
                        <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
                    </Button>
                </nav>
                </SheetContent>
            </Sheet>
            </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 animate-in fade-in duration-500">
            <section id="about-us" className="mb-12 md:mb-16">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 font-headline">
                    About Us
                </h1>
                 <p className="text-xl text-center text-muted-foreground mb-12">
                    What We Do: A Complete Supply Solution
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aboutSections.map((section) => (
                    <Card key={section.title} className="text-center hover:shadow-lg transition-shadow flex flex-col">
                        <CardHeader className="items-center">
                        <div className="p-4 bg-primary/10 rounded-full mb-4">
                            <section.icon className="h-8 w-8 text-primary" />
                        </div>
                        <CardTitle className="font-headline">{section.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                        <p className="text-muted-foreground">{section.description}</p>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </section>
            
            <section id="values" className="mb-12 md:mb-16 pt-16 -mt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline">
                Our Core Values
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value) => (
                  <Card key={value.title} className="text-center hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader className="items-center">
                      <div className="p-4 bg-primary/10 rounded-full mb-4">
                        <value.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="font-headline">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
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
