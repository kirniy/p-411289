import { Navbar } from "@/components/layout/Navbar";
import { FeatureCard } from "@/components/features/FeatureCard";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { SocialLinks } from "@/components/social/SocialLinks";

const Index = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/6efff717353a61369aaa5739ab2907e6695e8e5db3202ba9e861717b19432107",
      title: "Priority Support",
      description: "Fast-tracked assistance for early adopters.",
      decorativeImage: "https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/6b85f1a6fe1eda7c985bab4e87c689a9b487428a21d8a1581344b36335e29df6"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/025ee9dc1ff6f08ef7295bbd4f4aef9e920b7ad8b2411e6200aff516df678c49",
      title: "Exclusive Features",
      description: "Access advanced features before others.",
      decorativeImage: "https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/867c43e0f59925a07c93241f9fad809bf6fce0654e39779724399299760bbd9f"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/c86ce72e2f0f6ed5deb4e4b4cde881c3c4e1e7a4f87e01aad71e1a47b02eb5d6",
      title: "Beta Access",
      description: "Be among the first to test new features.",
      decorativeImage: "https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/3752da35053035af5438074a7e0adc86ce96342e5bff8153598d86fecd77a2e8"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/7db7f5e1ea266c1ab9520444bcc77982821641db20abeed78a40dc21629c2afe",
      title: "Personalized Assistance",
      description: "Tailored guidance and support from our team.",
      decorativeImage: "https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/97fd207f37e5b0c3c5641999d7fdda9fdae340502b1610a47764c7db1ae7f71f"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <div className="relative inline-block">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/0dcc9889982c425e96810c8c6b1274c3/59464fc1707df997628015e457d68eb2be61cc08f127a898ae24f2f951b026f8"
              alt=""
              className="w-16 h-16 mx-auto mb-6"
              loading="lazy"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-semibold mb-8">
            <span className="text-[#E4E4E6] font-['Rethink Sans']">
              Be the First to get update by Joining Our{" "}
            </span>
            <span className="text-[#CED0FC] font-['Baskervville'] italic">
              Waitlist!
            </span>
          </h1>
        </section>

        <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </section>

        <section className="flex flex-col md:flex-row gap-8 items-start justify-between">
          <WaitlistForm />
          
          <div className="w-full md:w-auto bg-card rounded-xl border border-border p-6">
            <SocialLinks />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;