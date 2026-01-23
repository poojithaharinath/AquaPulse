import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
// Import your prawn image here
import prawnImage from "@/assets/prawn-visual.png"; 

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with gradient matching logo colors */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Shrimp farming ponds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-aqua-deep/95 via-aqua-medium/85 to-cyan/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-aqua-deep/60 via-transparent to-transparent" />
        
        {/* Animated wave pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full animate-wave">
            <path d="M0 120L48 105C96 90 192 60 288 45C384 30 480 30 576 37.5C672 45 768 60 864 67.5C960 75 1056 75 1152 67.5C1248 60 1344 45 1392 37.5L1440 30V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="hsl(185 85% 48% / 0.3)"/>
          </svg>
        </div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 section-container w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-3xl mx-auto text-center lg:text-left">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
              Continuous Water Pulse Monitoring for{" "}
              <span className="relative inline-block">
                <span className="text-gradient-green bg-gradient-to-r from-cyan-light via-pulse-green-light to-pulse-green bg-clip-text text-transparent">
                  Profitable Shrimp Farming
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 animate-pulse-line" viewBox="0 0 300 12" fill="none">
                  <path d="M0 6 Q 75 0, 150 6 T 300 6" stroke="hsl(145 65% 42%)" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/85 mb-10 max-w-2xl leading-relaxed">
              AquaPulse Sensor acts as the{" "}
              <span className="font-semibold text-cyan-light">"doctor of water"</span>, continuously tracking
              pond health and preventing disease outbreaks before they happen.
            </p>

          </div>

          {/* Right Column: Floating Prawn Image */}
          <div className="flex relative justify-center items-center mt-10 lg:mt-0 max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
            {/* Ambient glow behind the image */}
            <div className="absolute inset-0 bg-cyan-light/20 rounded-full blur-[120px] animate-pulse" />
            
           <div className="relative inline-block p-[3px] rounded-3xl 
                 from-cyan-400 via-teal-300 to-emerald-400">
  <img 
    src="images/prown.png"
    alt="AquaPulse Prawn Visual"
    className="relative z-20 w-full max-w-md h-auto rounded-3xl 
               bg-white/5 backdrop-blur-sm
               drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]
               animate-float"
  />
</div>


            
          
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;