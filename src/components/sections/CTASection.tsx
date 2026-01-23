import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, User, ClipboardList, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription, // Added this import to fix Radix UI error
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CTASection = () => {
  const [activeModal, setActiveModal] = useState<'pilot' | 'advisor' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Added missing state

  // REPLACE THIS with your actual deployed Google Apps Script URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxf5WHzDfvEGkl4ruZxkLeQDlRFfDHo0b2Q07hpZ-7EOblR-35CVisZmpsap6KCQzje/exec";

  const closeModal = () => {
    if (!isSubmitting) setActiveModal(null);
  };

  const handleFormSubmit = async (e: React.MouseEvent, type: 'pilot' | 'advisor') => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData: any = { formType: type };

    try {
      if (type === 'pilot') {
        formData.location = (document.getElementById('pilot-location') as HTMLInputElement).value;
        formData.phone = (document.getElementById('pilot-phone') as HTMLInputElement).value;
        formData.ponds = (document.getElementById('pilot-ponds') as HTMLInputElement).value;
      } else if (type === 'advisor') {
        formData.phone = (document.getElementById('callback-phone') as HTMLInputElement).value;
      }

      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      alert("Request received! Our team will contact you shortly.");
      setActiveModal(null);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-30" />
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-hero rounded-3xl p-8 md:p-12 text-center mb-12 shadow-xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Farm?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Bring a 24x7 water doctor to your ponds and protect your crop with
              data-driven decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => setActiveModal('pilot')}>
                Request a Pilot Installation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="heroOutline" size="lg" onClick={() => setActiveModal('advisor')}>
                Talk to Our Solutions Advisor
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* --- PILOT MODAL --- */}
      <Dialog open={activeModal === 'pilot'} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <ClipboardList className="text-primary" /> Request Pilot
            </DialogTitle>
            {/* Added DialogDescription to fix "Warning: Missing Description" error */}
            <DialogDescription className="sr-only">
              Fill out your farm details to request a site survey.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="pilot-location">Farm Location</Label>
              <Input id="pilot-location" placeholder="District, State" required disabled={isSubmitting} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pilot-phone">Phone Number</Label>
              <Input id="pilot-phone" type="tel" placeholder="+91 XXXXX XXXXX" required disabled={isSubmitting} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pilot-ponds">Number of Ponds</Label>
              <Input id="pilot-ponds" type="number" placeholder="e.g. 5" required disabled={isSubmitting} />
            </div>
            <Button className="w-full" onClick={(e) => handleFormSubmit(e, 'pilot')} disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : "Submit Request"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* --- ADVISOR MODAL --- */}
      <Dialog open={activeModal === 'advisor'} onOpenChange={closeModal}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl">
              <User className="text-primary" /> Talk to Advisor
            </DialogTitle>
            {/* Added DialogDescription to fix accessibility warning */}
            <DialogDescription className="sr-only">
              Contact our experts or request a callback.
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 bg-muted/50 rounded-lg space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call Us</p>
                <p className="font-bold">+91 88850 45508</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email Us</p>
                <p className="font-bold">info@advancedsensorsai.com</p>
              </div>
            </div>
          </div>
          <div className="space-y-2 pt-2">
            <Label htmlFor="callback-phone">Or leave your number for a callback:</Label>
            <Input id="callback-phone" placeholder="Your Phone Number" required disabled={isSubmitting} />
            <Button variant="accent" className="w-full mt-2" onClick={(e) => handleFormSubmit(e, 'advisor')} disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="animate-spin mr-2" /> : "Request Callback"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;