import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="beranda" className="pt-32 pb-0 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-secondary px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Solusi Pembukuan Digital #1 untuk UMKM
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Catat Keuangan Usaha
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Lebih Mudah
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            NotaNusa membantu UMKM mengelola pembukuan dengan mudah, cepat, dan akurat. 
            Pantau pemasukan, pengeluaran, dan laba rugi secara otomatis dalam satu platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="group"
              onClick={() => window.location.href = 'https://www.dashboardnontanusa.site'}
            >
              Mulai Sekarang
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#panduan")}
            >
              Lihat Panduan
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">UMKM Pengguna</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Transaksi/Bulan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
