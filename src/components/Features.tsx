import { Card } from "@/components/ui/card";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Wallet,
  LineChart,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Pemasukan",
      description:
        "Catat semua pemasukan dengan mudah. Input manual atau upload bukti transaksi, lengkap dengan kategori untuk analisis lebih detail.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: TrendingDown,
      title: "Pengeluaran",
      description:
        "Kelola pengeluaran rutin dan operasional. Unggah nota atau faktur untuk dokumentasi yang lebih baik dan transparan.",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: BarChart3,
      title: "Rekap Omzet",
      description:
        "Hitung total pemasukan berdasarkan periode tertentu. Filter data berdasarkan tanggal, produk, atau cabang untuk insight mendalam.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: PieChart,
      title: "Laba Rugi",
      description:
        "Perhitungan otomatis laba bersih dari total pemasukan dikurangi pengeluaran. Visualisasi grafik tren untuk monitoring performa.",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Wallet,
      title: "Arus Kas",
      description:
        "Monitor kas masuk dan keluar secara harian, mingguan, atau bulanan. Laporan saldo akhir terupdate otomatis setiap saat.",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: LineChart,
      title: "Dashboard Visual",
      description:
        "Lihat performa keuangan dalam bentuk grafik interaktif. Insight bisnis yang mudah dipahami dengan visualisasi data yang menarik.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
    },
  ];

  return (
    <section id="fitur" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fitur Lengkap untuk UMKM
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk mengelola keuangan usaha dalam satu platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="p-6 hover:shadow-medium transition-all duration-300 border-border hover:border-primary/50 group cursor-pointer"
              >
                <div
                  className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
