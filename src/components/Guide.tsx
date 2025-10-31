import { Card } from "@/components/ui/card";
import { UserPlus, FileText, BarChart2, Download } from "lucide-react";

const Guide = () => {
  const steps = [
    {
      icon: UserPlus,
      step: "01",
      title: "Daftar Akun",
      description:
        "Buat akun gratis dengan email atau nomor WhatsApp. Proses pendaftaran hanya membutuhkan waktu kurang dari 2 menit.",
    },
    {
      icon: FileText,
      step: "02",
      title: "Catat Transaksi",
      description:
        "Mulai mencatat pemasukan dan pengeluaran. Upload bukti transaksi untuk dokumentasi yang lebih lengkap.",
    },
    {
      icon: BarChart2,
      step: "03",
      title: "Pantau Keuangan",
      description:
        "Lihat laporan laba rugi, arus kas, dan rekap omzet secara otomatis. Semua data terupdate real-time.",
    },
    {
      icon: Download,
      step: "04",
      title: "Ekspor Laporan",
      description:
        "Download laporan keuangan dalam format PDF atau Excel. Mudah untuk dibagikan ke mitra atau akuntan.",
    },
  ];

  return (
    <section id="panduan" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mudah Digunakan dalam 4 Langkah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tidak perlu keahlian khusus, ikuti panduan sederhana ini untuk mulai menggunakan NotaNusa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.step}
                className="p-6 bg-background hover:shadow-medium transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 text-[120px] font-bold text-primary/5 leading-none select-none">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guide;
