import { Activity, Brain, LayoutDashboard, Shield } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Continuous Monitoring",
    description:
      "Submerged sensors continuously measure critical parameters and send data every 30 minutes.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "The AquaPulse AI analyses historical and live data to detect patterns, predict nitrification, and recommend corrective actions.",
  },
  {
    icon: LayoutDashboard,
    title: "Easy-to-Use Dashboard",
    description:
      "A simple dashboard shows live and historical trends for DO, pH, temperature, salinity, and more, with color-coded alerts.",
  },
  {
    icon: Shield,
    title: "Built for Aquaculture",
    description:
      "Designed specifically for shrimp ponds with rugged, industrial-grade hardware for harsh farm environments.",
  },
];

const SolutionSection = () => {
  return (
   
    <section id="solution" className="py-2">
     
      <div className="section-container py-10 px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            <Activity className="w-4 h-4" />
            Our Solution
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            AquaPulse Doctor of Water for Your Ponds
          </h2>

          <p className="text-lg text-muted-foreground">
            AquaPulse Sensor is a continuous water pulse monitoring solution that
            combines industrial-grade sensors with an AI engine to track pond
            health every 30 minutes and convert complex data into simple,
            actionable recommendations for farmers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {feature.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-aqua-light to-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;