import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Guide from "@/components/Guide";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="space-y-16">
        {[Hero, Features, Guide, About, Contact].map((Component, index) => (
          <section key={index}>
            <Component />
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
