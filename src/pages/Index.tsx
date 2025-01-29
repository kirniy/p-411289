import { Navbar } from "@/components/layout/Navbar";
import { FeatureCard } from "@/components/features/FeatureCard";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { SocialLinks } from "@/components/social/SocialLinks";

const Index = () => {
  const features = [
    {
      icon: "/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png",
      title: "Priority Support",
      description: "Fast-tracked assistance for early adopters.",
      decorativeImage: "/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png"
    },
    {
      icon: "/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png",
      title: "Exclusive Features",
      description: "Access advanced features before others.",
      decorativeImage: "/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png"
    },
    {
      icon: "/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png",
      title: "Beta Access",
      description: "Be among the first to test new features.",
      decorativeImage: "/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png"
    },
    {
      icon: "/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png",
      title: "Personalized Assistance",
      description: "Tailored guidance and support from our team.",
      decorativeImage: "/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32">
        <section className="text-center mb-20">
          <div className="relative inline-block mb-12">
            <img
              src="/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png"
              alt=""
              className="w-16 h-16 mx-auto"
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-medium mb-8 text-white">
            Be the First to get update by{" "}
            <br />
            Joining Our{" "}
            <span className="italic text-[#8B5CF6]">
              Waitlist!
            </span>
          </h1>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </section>

        <section className="flex flex-col items-center gap-12">
          <WaitlistForm />
          <div className="w-full max-w-2xl">
            <SocialLinks />
          </div>
        </section>
      </main>

      {/* 3D Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-20" />
    </div>
  );
};

export default Index;