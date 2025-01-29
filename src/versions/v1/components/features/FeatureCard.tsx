interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  decorativeImage: string;
}

export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="relative p-6 rounded-2xl bg-[#1A1A1A] border border-gray-800 hover:border-gray-700 transition-all">
      <div className="flex flex-col space-y-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-[#2A2A2A] rounded-xl flex items-center justify-center">
            <img src={icon} alt="" className="w-6 h-6" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};