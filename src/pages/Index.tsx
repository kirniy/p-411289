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
      
      {/* Floating Decorative Elements */}
      <img 
        src="/lovable-uploads/0d8af2e9-f201-4a28-902e-e31433151ac3.png"
        alt=""
        className="absolute top-20 left-20 w-32 h-32 animate-float opacity-40"
      />
      <img 
        src="/lovable-uploads/4a8afbc0-fef5-4ca7-baad-2d59b66465d1.png"
        alt=""
        className="absolute top-40 right-40 w-32 h-32 animate-float-delayed opacity-40"
      />
      <img 
        src="/lovable-uploads/7539e152-83b2-4440-83d0-898084d88ac1.png"
        alt=""
        className="absolute bottom-40 left-40 w-32 h-32 animate-float opacity-40"
      />
      <img 
        src="/lovable-uploads/48ce1067-42e5-417a-acc9-34383c50bb95.png"
        alt=""
        className="absolute bottom-20 right-20 w-32 h-32 animate-float-delayed opacity-40"
      />
      
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