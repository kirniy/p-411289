import { Button } from "@/components/ui/button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto flex items-center justify-between max-w-7xl px-4 py-6">
        <div className="flex items-center space-x-12">
          <img 
            src="/lovable-uploads/vnvnclogonew.png" 
            alt="VNVNC"
            className="w-auto h-8 object-contain [filter:brightness(0)_invert(1)]"
          />
        </div>
        <div className="flex items-center space-x-8">
          <Button variant="ghost" className="glass-nav-button">
            Главная
          </Button>
          <Button variant="ghost" className="glass-nav-button">
            Афиша
          </Button>
          <Button variant="ghost" className="glass-nav-button">
            Галерея
          </Button>
          <Button variant="ghost" className="glass-nav-button">
            Контакты
          </Button>
        </div>
      </div>
    </nav>
  );
};