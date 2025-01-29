interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  decorativeImage: string;
}

export const FeatureCard = ({ icon, title, description, decorativeImage }: FeatureCardProps) => {
  return (
    <div className="relative p-6 rounded-xl bg-card border border-border">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img src={icon} alt="" className="w-12 h-12" loading="lazy" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      <img 
        src={decorativeImage} 
        alt="" 
        className="absolute top-0 right-0 w-24 h-24 opacity-10" 
        loading="lazy"
      />
    </div>
  );
};