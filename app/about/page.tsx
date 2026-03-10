import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SectionHeader from "@/app/components/SectionHeader";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <section className="section" style={{ paddingTop: "10rem" }}>
        <div className="container">
          <SectionHeader 
            subtitle="Our Mission" 
            title="About Energeon" 
          />
          <ScrollReveal>
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
              <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
                Energeon was founded on the principle that healthy living should be
                energizing, not exhausting. We source the finest natural ingredients
                to create supplements that actually make a difference in your daily life.
              </p>
              <p>
                From our supergreens to our protein stacks, every product is
                vetted for quality and purity. Join our community of over 10,000
                happy customers today.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
