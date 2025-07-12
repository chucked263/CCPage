"use client"
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Truck, Search, Handshake, Menu, X, ShieldCheck, Scale, Wrench, CheckCircle, Target, Rocket } from "lucide-react";
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

const partnershipBenefits = [
  {
    icon: CheckCircle,
    title: "Eliminate Supplier Headaches",
    description: "We provide the consistency and reliability you can't get from inconsistent suppliers."
  },
  {
    icon: CheckCircle,
    title: "Focus On Your Core Work",
    description: "Let us handle the procurement. Our delivery service means you spend less time searching and more time working."
  },
  {
    icon: CheckCircle,
    title: "Quality You Can Trust",
    description: "We stand behind the quality of our products, ensuring you have the right tools for the job."
  },
  {
    icon: CheckCircle,
    title: "A True Technical Partner",
    description: "We are invested in your success and dedicated to keeping your operations running smoothly."
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
                        <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    </Button>
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
            <section id="intro" className="text-center mb-12 md:mb-16">
                 <h1 className="text-4xl md:text-5xl font-bold text-center mb-2 font-headline">
                    Components Centre
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-semibold">
                    Your Workshop's Reliability Partner
                </p>
            </section>
            
            <section id="what-we-do" className="mb-12 md:mb-16">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg text-muted-foreground mb-12">
                        For any workshop or technical operation, the biggest threat to productivity is an inconsistent supply chain. At Components Centre, we solve this problem. We are not just another supplier; we are your proactive reliability partner, built on a foundation of hands-on engineering expertise. Our core mission is to ensure you never have to face the headache of a project delay because a critical part is out of stock or a trusted supplier has disappeared. We provide a consistent, dependable supply of the quality equipment, tools, and consumables that keep your operations and workshop running, delivered right to your door.
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">
                        What We Do: A Complete Supply Solution
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
            
            <section id="why-partner" className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline">
                Why Partner With Us?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {partnershipBenefits.map((benefit) => (
                  <Card key={benefit.title} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <benefit.icon className="h-8 w-8 text-primary flex-shrink-0" />
                        <CardTitle className="font-headline text-xl">{benefit.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="values" className="pt-8">
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

            <section id="vision-mission" className="pt-12 md:pt-16">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 font-headline">
                Our Vision & Mission
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                     <div className="p-3 bg-primary/10 rounded-full">
                      <Target className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">To be the most trusted and indispensable supply partner for workshops and technical industries across Zimbabwe.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="font-headline">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">To guarantee operational continuity for our clients by providing a reliable, delivered supply of essential components and expert sourcing for hard-to-find parts.</p>
                  </CardContent>
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
