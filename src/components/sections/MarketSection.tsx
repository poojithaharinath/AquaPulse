import { Globe, Target, TrendingUp } from "lucide-react";

const MarketSection = () => {
  return (
    <section className="section-padding gradient-wave">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Global Vision
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built for Global Aquaculture
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card rounded-2xl p-6 border border-border text-center">
            <div className="w-16 h-16 rounded-2xl bg-coral-light mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-coral-dark" />
            </div>
            <div className="font-display text-3xl font-bold text-foreground mb-2">
              20B$
            </div>
            <p className="text-muted-foreground text-sm">
              Annual global losses in shrimp aquaculture from disease and water issues
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border text-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-4 flex items-center justify-center">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <div className="font-display text-3xl font-bold text-foreground mb-2">
              43+
            </div>
            <p className="text-muted-foreground text-sm">
              Landlocked countries with untapped aquaculture potential
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border text-center">
            <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto mb-4 flex items-center justify-center">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <div className="font-display text-3xl font-bold text-foreground mb-2">
              300
            </div>
            <p className="text-muted-foreground text-sm">
              Initial units targeted with export-ready design from India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
