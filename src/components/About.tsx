import { Card } from "@/components/ui/card";
import { Target, Users, Zap, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Misi Kami",
      description:
        "Membantu UMKM Indonesia untuk mengelola keuangan dengan lebih baik melalui digitalisasi pembukuan yang mudah dan terjangkau.",
    },
    {
      icon: Users,
      title: "Untuk Semua",
      description:
        "Dirancang khusus untuk pelaku UMKM dengan berbagai latar belakang, dari pemula hingga yang sudah berpengalaman.",
    },
    {
      icon: Zap,
      title: "Cepat & Efisien",
      description:
        "Hemat waktu hingga 80% dalam proses pembukuan dengan sistem otomatis yang cerdas dan intuitif.",
    },
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      description:
        "Data keuangan Anda tersimpan dengan enkripsi tingkat bank dan backup otomatis setiap hari.",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Tentang NotaNusa
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                NotaNusa adalah platform pembukuan digital yang diciptakan khusus untuk 
                membantu UMKM Indonesia mengelola keuangan dengan lebih baik. Kami percaya 
                bahwa setiap pelaku usaha berhak mendapatkan akses ke tools keuangan yang 
                profesional namun mudah digunakan.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Dengan pengalaman melayani lebih dari 10.000 UMKM di seluruh Indonesia, 
                kami terus berinovasi untuk memberikan solusi terbaik dalam digitalisasi 
                pembukuan yang dapat diandalkan dan terjangkau.
              </p>
            </div>
            <div className="relative">
              <img
                src="/foto.jpg" 
                alt="Gambar ilustrasi"
                className="aspect-square rounded-2xl shadow-large object-cover"
              />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card
                  key={value.title}
                  className="p-6 hover:shadow-medium transition-all duration-300 border-border hover:border-primary/50"
                >
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
