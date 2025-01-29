import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <span className="text-foreground">Home V.1</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-foreground">Partners</Button>
          <Button variant="ghost" className="text-foreground">Benefits</Button>
          <Button variant="ghost" className="text-foreground">FAQ</Button>
          <Button variant="ghost" className="text-foreground">Testimonials</Button>
        </div>
      </div>
    </nav>
  );
};