import { ArrowRight, Activity, TrendingUp, AlertCircle } from "lucide-react";
import sensorDevice from "@/assets/sensor-device.png";
import controllerUnit from "@/assets/controller-unit.png";

const steps = [
  {
    number: "01",
    title: "Submerged Sensor in Pond",
    description:
      "An industrial-grade submerged sensor is installed in the pond to continuously capture water quality parameters.",
    image: sensorDevice,
  },
  {
    number: "02",
    title: "Smart Controller Unit",
    description:
      "A controller unit receives sensor data, processes it, and securely sends it to the cloud.",
    image: controllerUnit,
  },
  {
    number: "03",
    title: "AI Engine (ASAI)",
    description:
      "ASAI engine analyses real-time and historical data to identify trends, stress conditions, and disease risk.",
    image: null,
  },
  {
    number: "04",
    title: "Farmer Dashboard & Alerts",
    description:
      "Farmers access an intuitive dashboard showing live status, trend graphs, and AI-driven recommendations.",
    image: null,
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding gradient-wave py-2">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
            Process
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            How AquaPulse Works End-to-End
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card h-full flex flex-col">
                  {/* Step Number */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-display font-bold text-lg flex items-center justify-center mb-4">
                    {step.number}
                  </div>

                  {/* Image if available */}
                  {step.image && (
                    <div className="h-32 mb-4 flex items-center justify-center">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  )}

                  {/* AI Engine Visual (Step 03) */}
                  {!step.image && step.number === "03" && (
                    <div className="h-32 mb-4 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-aqua-light flex items-center justify-center shadow-lg shadow-primary/20">
                        <span className="font-display font-bold text-2xl text-white">
                          AI
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Farmer Dashboard Visual (Step 04) - UPDATED */}
                  {!step.image && step.number === "04" && (
                    <div className="h-32 mb-4 flex items-center justify-center">
                      <div className="w-full max-w-[160px] bg-background border border-border rounded-xl overflow-hidden shadow-sm">
                        {/* Top Bar */}
                        <div className="bg-muted px-2 py-1 flex justify-between items-center border-b border-border">
                          <div className="flex gap-0.5">
                            <div className="w-1 h-1 rounded-full bg-red-400" />
                            <div className="w-1 h-1 rounded-full bg-yellow-400" />
                            <div className="w-1 h-1 rounded-full bg-green-400" />
                          </div>
                          <span className="text-[8px] font-bold text-primary italic">AquaPulse</span>
                        </div>
                        
                        {/* Mini Dashboard Content */}
                        <div className="p-2 space-y-2">
                          {/* Live Stat */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Activity className="w-2 h-2 text-green-500" />
                              <span className="text-[7px] font-medium">DO Level</span>
                            </div>
                            <span className="text-[7px] font-bold">6.5 mg/L</span>
                          </div>
                          
                          {/* Mini Graph Placeholder */}
                          <div className="h-6 bg-primary/5 rounded border border-primary/10 relative flex items-end p-1 gap-0.5">
                            <div className="w-full h-1/2 bg-primary/20 rounded-t-sm" />
                            <div className="w-full h-3/4 bg-primary/40 rounded-t-sm" />
                            <div className="w-full h-2/3 bg-primary/20 rounded-t-sm" />
                            <div className="w-full h-full bg-primary/60 rounded-t-sm" />
                          </div>

                          {/* Recommendation Alert */}
                          <div className="bg-yellow-50 border border-yellow-100 rounded p-1 flex gap-1 items-start">
                            <AlertCircle className="w-2 h-2 text-yellow-600 shrink-0 mt-0.5" />
                            <div className="space-y-0.5">
                              <p className="text-[6px] font-bold text-yellow-800 leading-none">AI Recommendation</p>
                              <p className="text-[5px] text-yellow-700 leading-tight">Increase aeration now.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm flex-grow">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;