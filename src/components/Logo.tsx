import logoImage from "@/assets/logo.png";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

const Logo = ({ variant = "default", size = "md" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <img 
      src={logoImage} 
      alt="AquaPulse Sensor" 
      className={`${sizeClasses[size]} w-auto object-contain ${variant === "white" ? "brightness-0 invert" : ""}`}
    />
  );
};

export default Logo;