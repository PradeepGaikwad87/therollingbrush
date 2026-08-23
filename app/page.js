const services = [
  {
    title: "Interior Painting",
    text: "Smooth, clean and professional painting for bedrooms, halls, kitchens and other interior spaces.",
  },
  {
    title: "Exterior Painting",
    text: "Durable exterior painting that gives your home a fresh and attractive finish.",
  },
  {
    title: "Home Repainting",
    text: "Give your existing home a fresh new look with quality repainting and finishing.",
  },
  {
    title: "Texture Painting",
    text: "Decorative texture finishes to create a stylish and unique look for your walls.",
  },
  {
    title: "Royal 3D Painting",
    text: "Premium decorative wall finishes for customers looking for a distinctive appearance.",
  },
  {
    title: "Polish Work",
    text: "Professional polishing and finishing work for doors, furniture and wooden surfaces.",
  },
  {
    title: "Waterproofing",
    text: "Waterproofing solutions to help protect your home from moisture and water-related problems.",
  },
  {
    title: "Complete Painting Works",
    text: "Complete painting and finishing solutions for residential properties.",
  },
];

const reasons = [
  "Experienced painting workmanship",
  "Clean and professional finishing",
  "Interior and exterior solutions",
  "Quality-focused work",
  "Residential painting specialists",
  "Serving Hyderabad and Telangana",
];

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "PaintingContractor",
    name: "The Rolling Brush Painting Services",
    url: "https://therollingbrush.in",
    telephone: "+919014909098",
    email: "TheRollingbrushes@gmail.com",
    areaServed: [
      {
        "@type": "City",
        name: "Hyderabad",
      },
      {
        "@type": "State",
        name: "Telangana",
      },
    ],
  };
  return (
    <main>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />
      {/* NAVBAR */}
      <header className="nav">
        <div className="logo">
  <img
  src="/logo.png.jpeg"
  alt="The Rolling Brush"
  style={{
    width: "120px",
    height: "45px",
    objectFit: "contain",
    display: "block"
  }}
/>
</div>
        <a href="tel:9014909098" className="navButton">
          Call Now
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">PROFESSIONAL PAINTING SERVICES</p>

          <h1>
            Give Your Home
            <br />
            <span>A Fresh New Look.</span>
          </h1>

          <p className="heroText">
            Professional interior, exterior and repainting services in
            Hyderabad and across Telangana. Quality workmanship with a
            clean and beautiful finish.
          </p>
              <section className="gallery">
  <h2>Our Recent Work</h2>
  <p>Quality painting work done by The Rolling Brush.</p>

  <div className="galleryGrid">
    <img src="/interiordesigns (1).jpeg" alt="Interior Painting" />
              <img src="/interiordesigns (3).jpeg" alt="Interior Painting" />
              <img src="/interiordesigns (4).jpeg" alt="Interior Painting" />
              <img src="/interiordesigns (5).jpeg" alt="Interior Painting" />
              <img src="/interiordesigns (6).jpeg" alt="Interior Painting" />
              <img src="/interiordesigns (7).jpeg" alt="Interior Painting" />
              <img src="/interiordesigns (8).jpeg" alt="Interior Painting" />
              <img src="/interiordesigns (9).jpeg" alt="Interior Painting" />
    <img src="/exterior (1).jpeg" alt="Exterior Painting" />
               <img src="/exterior (2).jpeg" alt="Exterior Painting" />
               <img src="/exterior (3).jpeg" alt="Exterior Painting" />
               <img src="/exterior (4).jpeg" alt="Exterior Painting" />
               <img src="/exterior (5).jpeg" alt="Exterior Painting" />
               <img src="/exterior (6).jpeg" alt="Exterior Painting" />
               <img src="/exterior (7).jpeg" alt="Exterior Painting" />
               <img src="/exterior (8).jpeg" alt="Exterior Painting" />
               <img src="/exterior (9).jpeg" alt="Exterior Painting" />
  </div>
</section>

          <div className="buttons">
            <a href="tel:9014909098" className="primary">
              📞 Get a Free Quote
            </a>

            <a
              href="https://wa.me/919014909098?text=Hi%20The%20Rolling%20Brush%2C%20I%20would%20like%20to%20know%20about%20your%20painting%20services."
              className="secondary"
              target="_blank"
              rel="noreferrer"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro">
        <div>
          <p className="eyebrow">THE ROLLING BRUSH</p>
          <h2>Painting that makes your space feel new.</h2>
        </div>

        <p>
          We provide reliable painting and finishing services for homes and
          residential properties. Whether you need a simple repaint,
          decorative wall finish or complete painting work, we are ready
          to help.
        </p>
      </section>

      {/* SERVICES */}
      <section className="section">
        <p className="eyebrow">OUR SERVICES</p>

        <h2>Everything your home needs.</h2>

        <div className="services">
          {services.map((service, index) => (
            <div className="serviceCard" key={service.title}>
              <div className="serviceNumber">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

              <a
                href={`https://wa.me/919014909098?text=Hi%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                  service.title
                )}.`}
                target="_blank"
                rel="noreferrer"
              >
                Enquire →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="whyUs">
        <div className="whyContent">
          <p className="eyebrow">WHY CHOOSE US</p>

          <h2>
            A better finish starts with the right painting team.
          </h2>

          <p>
            At The Rolling Brush, we focus on quality workmanship, neat
            finishing and dependable service. Our goal is simple — to make
            your home look fresh, beautiful and well finished.
          </p>
        </div>

        <div className="reasons">
          {reasons.map((reason, index) => (
            <div className="reason" key={reason}>
              <span>✓</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* SERVICE AREA */}
      <section className="area">
        <p className="eyebrow">SERVICE AREA</p>

        <h2>Serving homes across Telangana.</h2>

        <p>
          Based in <strong>Habsiguda, Hyderabad</strong>, The Rolling Brush
          provides painting services throughout Hyderabad and across
          Telangana.
        </p>

        <div className="areaTags">
          <span>Hyderabad</span>
          <span>Habsiguda</span>
          <span>Telangana</span>
          <span>Residential Projects</span>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact">
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>Let's give your home a fresh look.</h2>

        <p>
          Contact <strong>Gaikwad Pandu Ranga</strong> for enquiries,
          quotations and painting requirements.
        </p>

        <div className="contactButtons">
          <a href="tel:9014909098">📞 9014909098</a>

          <a
            href="https://wa.me/919014909098"
            target="_blank"
            rel="noreferrer"
          >
            💬 WhatsApp
          </a>

          <a href="mailto:TheRollingbrushes@gmail.com">
            ✉️ Email
          </a>
        </div>

        <p className="location">
          📍 Habsiguda, Hyderabad • Serving All Over Telangana
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        <div>THE ROLLING BRUSH</div>

        <p>
          Professional Painting Services • Hyderabad & Telangana
        </p>

        <p>
          © {new Date().getFullYear()} The Rolling Brush Painting Services
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919014909098?text=Hi%20The%20Rolling%20Brush%2C%20I%20would%20like%20a%20painting%20quotation."
        className="whatsappFloat"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </main>
  );
}
