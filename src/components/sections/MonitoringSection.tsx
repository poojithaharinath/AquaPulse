import {
  Thermometer,
  Droplets,
  Wind,
  Eye,
  Waves,
  Gauge,
  Atom,
} from "lucide-react";

const parameters = [
  { icon: Thermometer, name: "Temperature", color: "text-red-500" },
  { icon: Gauge, name: "pH", color: "text-yellow-500" },
  { icon: Wind, name: "Dissolved Oxygen (DO)", color: "text-blue-500" },
  { icon: Eye, name: "Turbidity (NTU)", color: "text-amber-600" },
  { icon: Waves, name: "Salinity", color: "text-cyan-500" },
  { icon: Droplets, name: "Total Dissolved Solids", color: "text-teal-500" },
  { icon: Atom, name: "Nitrogenous Compounds", color: "text-green-500" },
];

const MonitoringSection = () => {
  return (
    /* MODIFICATION 1: Changed 'section-padding' to 'py-2' to remove external gaps */
    <section id="monitoring" className="py-2">
      
      {/* MODIFICATION 2: Added bg-background and internal padding here 
          This ensures the background starts exactly where the text starts. */}
      <div className="section-container bg-background py-10 px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Droplets className="w-4 h-4" />
              Parameters
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What We Monitor in Your Pond
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              AquaPulse continuously measures key water quality parameters that
              define the "pulse" of your pond and strongly influence shrimp
              health.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {parameters.map((param, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                    <param.icon className={`w-5 h-5 ${param.color}`} />
                  </div>
                  <span className="font-medium text-foreground text-sm">
                    {param.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Comparison */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <div className="space-y-6">
                {/* Traditional Method */}
                <div className="p-6 rounded-xl bg-coral-light/50 border border-coral/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-coral" />
                    <span className="font-semibold text-coral-dark">
                      Traditional Method
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Checked once a month via local labs</li>
                    <li>• Time-consuming results</li>
                    <li>• No historical data</li>
                    <li>• No parameter correlation</li>
                  </ul>
                </div>

                {/* AquaPulse Method */}
                <div className="p-6 rounded-xl bg-secondary border border-primary/20">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span className="font-semibold text-primary">
                      AquaPulse Sensor
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Automatic readings every 30 minutes</li>
                    <li>• Real-time alerts & insights</li>
                    <li>• One year of historical data</li>
                    <li>• AI-powered correlation analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;