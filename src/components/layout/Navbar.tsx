import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-20 py-6 bg-transparent backdrop-blur-sm">
      <div className="flex items-center space-x-12">
        <img 
          src="/lovable-uploads/b2f1622c-1ef0-4361-9e20-7325fe5393af.png" 
          alt="Logo"
          className="w-8 h-8"
        />
        <div className="flex items-center space-x-2 bg-[#1A1A1A] px-4 py-2 rounded-full border border-gray-800">
          <span className="text-white text-sm font-medium">Home V.1</span>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center space-x-8">
          <Button variant="ghost" className="text-gray-400 hover:text-white transition-colors">Partners</Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white transition-colors">Benefits</Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white transition-colors">FAQ</Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white transition-colors">Testimonials</Button>
        </div>
      </div>
    </nav>
  );
};