
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Loader2 } from "lucide-react"; // Added Loader2 for submission state
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Solution", href: "#solution" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Gallery", href: "/gallery" },
];

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // REPLACE THIS URL with your deployed Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxf5WHzDfvEGkl4ruZxkLeQDlRFfDHo0b2Q07hpZ-7EOblR-35CVisZmpsap6KCQzje/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      formType: "demo", // Matches the backend 'if' condition
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Required for Google Apps Script redirects
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Since 'no-cors' doesn't return a readable response, 
      // we assume success if no error is thrown.
      alert("Success! Your demo request has been sent.");
      setIsModalOpen(false);
      e.target.reset(); // Clear form
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const DemoForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" name="name" placeholder="John Doe" required disabled={isSubmitting} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" placeholder="john@company.com" required disabled={isSubmitting} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required disabled={isSubmitting} />
      </div>
      <Button type="submit" className="w-full" variant="accent" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Request Demo"
        )}
      </Button>
    </form>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md hover:bg-muted transition" aria-label="Open menu">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <SheetHeader className="text-left border-b pb-4">
                  <SheetTitle>
                    <div className="flex flex-col items-center gap-1">
                      <img src="/images/Logo.png" alt="Logo" className="h-8 w-auto" />
                      <p className="text-[10px] font-semibold tracking-wider uppercase leading-tight text-center">
                        <span className="bg-gradient-to-r from-primary via-cyan-500 to-accent bg-clip-text text-transparent">Collect</span>
                        <span className="text-muted-foreground mx-1">-</span>
                        <span className="bg-gradient-to-r from-cyan-500 via-accent to-pulse-green bg-clip-text text-transparent">Analyse</span>
                        <span className="text-muted-foreground mx-1">-</span>
                        <span className="bg-gradient-to-r from-accent via-pulse-green to-cyan-500 bg-clip-text text-transparent">Recommend</span>
                      </p>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                
                <nav className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <hr className="border-border/50" />
                  <div className="mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="accent" size="sm" className="w-full">Book a Demo</Button>
                      </DialogTrigger>
                      <DialogContent className="w-[95vw] sm:max-w-[425px]">
                        <DialogHeader>
                          <DialogTitle>Book a Demo</DialogTitle>
                          <DialogDescription>Fill in your details to request a demo</DialogDescription>
                        </DialogHeader>
                        <DemoForm />
                      </DialogContent>
                    </Dialog>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Logo */}
          <div className="flex flex-col items-center">
            <Link to="/" className="cursor-pointer hover:opacity-80 transition-opacity">
              <img src="/images/Logo.png" alt="AquaPulse" className="h-10 md:h-14 w-auto object-contain" />
            </Link>
            <div className="mt-1">
              <p className="text-[10px] md:text-xs font-bold tracking-wider uppercase leading-tight text-center">
                <span className="bg-gradient-to-r from-primary via-cyan-500 to-accent bg-clip-text text-transparent">Collect</span>
                <span className="text-muted-foreground mx-1">-</span>
                <span className="bg-gradient-to-r from-cyan-500 via-accent to-pulse-green bg-clip-text text-transparent">Analyse</span>
                <span className="text-muted-foreground mx-1">-</span>
                <span className="bg-gradient-to-r from-accent via-pulse-green to-cyan-500 bg-clip-text text-transparent">Recommend</span>
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button variant="accent" size="sm">Book a Demo</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">Book a Demo</DialogTitle>
                  <DialogDescription>Fill in your details to request a demo</DialogDescription>
                </DialogHeader>
                <DemoForm />
              </DialogContent>
            </Dialog>
          </div>

          <div className="w-10 md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;