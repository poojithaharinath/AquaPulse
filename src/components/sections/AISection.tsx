import { Brain, Zap, TrendingUp } from "lucide-react";

const AISection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden py-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-dots opacity-50" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto">
              {/* Central AI Brain */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary via-aqua-medium to-aqua-light flex items-center justify-center animate-pulse-slow">
                  <Brain className="w-20 h-20 text-white" />
                </div>
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-8 border-2 border-dashed border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-16 border-2 border-dashed border-primary/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

              {/* Data points */}
              <div className="absolute top-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-card rounded-full border border-border text-xs font-medium">
                pH: 7.8
              </div>
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-card rounded-full border border-border text-xs font-medium">
                DO: 5.2 ppm
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card rounded-full border border-border text-xs font-medium">
                Temp: 28°C
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card rounded-full border border-border text-xs font-medium">
                Salinity: 15 ppt
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              ASAI Engine
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              AI That UnderstandsYour Pond
            </h2>

            <div className="space-y-6 text-muted-foreground">
              <p>
                The AquaPulse AI engine is trained on real field data and research
                to detect risky patterns in pond conditions.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Multi-Parameter Correlation
                    </h4>
                    <p className="text-sm">
                      Correlates multiple parameters instead of looking at single
                      values in isolation, making recommendations more scientific.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Continuous Learning
                    </h4>
                    <p className="text-sm">
                      Over time, as more deployments go live, the engine identifies
                      new trends and patterns to further improve accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
