import {
  TrendingUp,
  ShieldCheck,
  Activity,
  Wallet,
  Leaf,
  BarChart3,
} from "lucide-react";

const productivityBenefits = [
  {
    icon: TrendingUp,
    text: "Reduce crop loss from ~49% towards 5–10% by addressing water issues early",
  },
  {
    icon: Activity,
    text: "Predict nitrification events before they cause mass mortality",
  },
  {
    icon: ShieldCheck,
    text: "Maintain optimal pond conditions for better growth and survivals",
  },
];

const costBenefits = [
  {
    icon: Wallet,
    text: "Cut frequent lab testing, manual sampling, and chemical overuse through data-driven decisions",
  },
  {
    icon: Leaf,
    text: "Reduced electrical and chemical costs by optimizing aeration and treatments",
  },
  {
    icon: BarChart3,
    text: "One-year historical data enables better feed planning, harvest decisions, and crop planning",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-background py-15">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Benefits
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Tangible Benefits for Shrimp Farmers
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Productivity Column */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Productivity & Risk Reduction
              </h3>
            </div>

            <div className="space-y-4">
              {productivityBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground pt-2">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cost Savings Column */}
          <div className="bg-card rounded-2xl p-8 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground">
                Cost Savings & Convenience
              </h3>
            </div>

            <div className="space-y-4">
              {costBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-coral-light/30 hover:bg-coral-light/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-foreground pt-2">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
