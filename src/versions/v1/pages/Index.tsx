import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";

const EventCard = ({ date, time, title, description, ticketStatus }: {
  date: string;
  time: string;
  title: string;
  description: string;
  ticketStatus: string;
}) => (
  <div className="glass-event-card rounded-2xl p-6 flex flex-col min-h-[280px]">
    <div className="mb-4">
      <div className="text-white/80">
        <div className="text-sm font-medium">{date}</div>
        <div className="text-sm">{time}</div>
      </div>
    </div>
    <div className="flex-grow">
      <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
      <p className="text-white/70 text-sm">{description}</p>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div className="text-sm text-white/60">{ticketStatus}</div>
      <Button className="glass-button-enhanced uppercase w-[160px]">
        Купить билет
      </Button>
    </div>
  </div>
);

const StatCard = ({ number, label }: { number: string; label: string }) => (
  <div className="glass-stat-card rounded-2xl p-8 text-center hover-card">
    <div className="text-4xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-2">
      {number}
    </div>
    <div className="text-white/70 uppercase font-medium">{label}</div>
  </div>
);

const FeatureCard = ({ title, description }: { title: string; description: string }) => (
  <div className="glass-feature-card rounded-2xl p-6 hover-card">
    <h3 className="text-xl font-bold bg-gradient-to-br from-white to-white/80 bg-clip-text text-transparent mb-4">
      {title}
    </h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const Index = () => {
  const events = [
    {
      date: "29 января",
      time: "23:00",
      title: "VNVNC NIGHT",
      description: "Ночь электронной музыки с лучшими диджеями города",
      ticketStatus: "Билеты в продаже"
    },
    {
      date: "30 января",
      time: "23:00",
      title: "TECHNO FRIDAY",
      description: "Погружение в мир техно музыки",
      ticketStatus: "Осталось мало билетов"
    },
    {
      date: "31 января",
      time: "23:00",
      title: "HOUSE MUSIC NIGHT",
      description: "Атмосферная ночь house музыки",
      ticketStatus: "Билеты в продаже"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0A] via-[#1A1A1A] to-[#0A0A0A] relative overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-[5%] left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#3B82F6]/25 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-[#3B82F6]/15 rounded-full blur-3xl" />
      
      <Navbar />
      
      {/* Floating Decorative Elements */}
      <img 
        src="/lovable-uploads/0d8af2e9-f201-4a28-902e-e31433151ac3.png"
        alt=""
        className="absolute top-[15%] left-[10%] w-36 h-36 animate-float-1 opacity-90 brightness-125 saturate-150 mix-blend-screen"
      />
      <img 
        src="/lovable-uploads/4a8afbc0-fef5-4ca7-baad-2d59b66465d1.png"
        alt=""
        className="fixed top-[25%] right-0 w-28 h-28 animate-float-vertical opacity-90 brightness-125 saturate-150 mix-blend-screen"
      />
      <img 
        src="/lovable-uploads/48ce1067-42e5-417a-acc9-34383c50bb95.png"
        alt=""
        className="absolute bottom-[20%] right-[12%] w-40 h-40 animate-float-4 opacity-90 brightness-125 saturate-150 mix-blend-screen"
      />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-medium mb-4">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
            Пространство твоей{" "}
          </span>
          <span className="italic text-[#8B5CF6]">
            свободы
          </span>
        </h1>
        <p className="text-xl text-white/70 mb-12">
          Сердце{" "}
          <span className="italic text-[#8B5CF6]">
            Конюшенной
          </span>{" "}
          площади
        </p>
        <Button className="glass-button-enhanced-large uppercase text-lg px-12 py-6 min-w-[200px]">
          Билеты
        </Button>
      </section>

      {/* Upcoming Events */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-center mb-4">
          Ближайшие события
        </h2>
        <p className="text-white/70 text-center mb-12">Каждый уикенд — новая история</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </section>

      {/* Space Info */}
      <section className="container mx-auto px-4 py-20 relative">
        <img 
          src="/lovable-uploads/7539e152-83b2-4440-83d0-898084d88ac1.png"
          alt=""
          className="absolute bottom-0 right-[33%] w-32 h-32 animate-float-3 opacity-90 brightness-125 saturate-150 mix-blend-screen"
        />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent text-center mb-12">
          Пространство нового формата
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <StatCard number="2" label="танцпола" />
          <StatCard number="50k+" label="гостей в год" />
          <StatCard number="100k" label="звук" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Звук нового поколения"
            description="Профессиональная звуковая система последнего поколения"
          />
          <FeatureCard 
            title="Авторская миксология"
            description="Уникальные коктейли от наших барменов"
          />
          <FeatureCard 
            title="Больше чем клуб"
            description="Многофункциональное пространство для ваших мероприятий"
          />
        </div>
      </section>

      {/* Location Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="glass-location-card rounded-2xl p-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-8">
            Локация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video glass-card-enhanced rounded-xl" />
            <div className="space-y-4">
              <p className="text-white/90 font-medium">Конюшенная площадь, 2</p>
              <div className="text-white/70">
                <p className="font-medium">График работы:</p>
                <p>Пт-Сб: 23:00 - 06:00</p>
              </div>
              <p className="text-white/90">+7 (812) XXX-XX-XX</p>
              <p className="text-white/90">info@vnvnc.ru</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;