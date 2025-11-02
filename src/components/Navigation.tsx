import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Beranda", href: "#beranda" },
    { name: "Fitur", href: "#fitur" },
    { name: "Panduan", href: "#panduan" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "Kontak", href: "#kontak" },
  ];

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="Logo NotaNusa"
              className="w-12 h-12 rounded-xl object-cover"
            />
            <span className="text-xl font-bold text-foreground">NotaNusa</span>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button onClick={() => window.location.href = 'https://www.dashboardnontanusa.site'}> {/* link to dashboard admin */}
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              className="w-full mt-4"
              onClick={() => window.location.href = 'https://www.dashboardnontanusa.site'}
            >
              Mulai Sekarang
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
