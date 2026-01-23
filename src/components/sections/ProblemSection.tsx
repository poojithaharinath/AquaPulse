import { AlertCircle, Clock, Database, Beaker, Brain } from "lucide-react";

const challenges = [
  {
    icon: AlertCircle,
    text: "High crop loss (up to 49%) from water-related disease",
  },
  {
    icon: Clock,
    text: "Manual sampling and lab tests with time-consuming results",
  },
  {
    icon: Database,
    text: "No continuous hardware or software to monitor pond health",
  },
  {
    icon: Beaker,
    text: "No historical data to understand trends or early warning signals",
  },
  {
    icon: Brain,
    text: "No AI-based, scientific recommendations that farmers can act on daily",
  },
];

const ProblemSection = () => {
  return (
    /* Changed 'section-padding' to 'py-8' (Small vertical space)
       The background 'bg-background' now strictly follows the content flow.
    */
    <section id="problem" className="py-8 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Added 'bg-card/30' and 'p-8' to the container 
           to create a distinct background for the text area only.
        */}
        <div className="grid lg:grid-cols-2 gap-10 items-center bg-card/30 p-6 md:p-10 rounded-3xl border border-border/50">
          
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coral-light text-coral-dark text-xs font-semibold uppercase tracking-wider">
              <AlertCircle className="w-3.5 h-3.5" />
              The Hidden Crisis
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
              The Cost of Unseen <br /> Water Stress
            </h2>

            <div className="space-y-4 text-muted-foreground text-sm md:text-base">
              <p>
                Shrimp ponds lose up to <strong className="text-foreground">2.1 Lakh MT</strong> out of 7.3 Lakh MT
                production due to disease triggered by sub-optimal water
                conditions.
              </p>
              <p>
                Diseases like <strong className="text-foreground">WSSV</strong> and{" "}
                <strong className="text-foreground">EHP</strong> are strongly associated
                with poor water pulse, causing stress and low immunity.
              </p>
              <p>
                Most farms rely on manual lab tests done once a month, with no
                historical data or scientific recommendations.
              </p>
            </div>
          </div>

          {/* Right Column - Challenges */}
          <div className="mt-4 lg:mt-0">
            <h3 className="font-display text-lg font-semibold text-foreground mb-5 px-1">
              Current Challenges
            </h3>
            <div className="space-y-3">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-background border border-border hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-coral-light flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-4.5 h-4.5 text-coral-dark" />
                  </div>
                  <p className="text-foreground text-sm font-medium">{challenge.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;