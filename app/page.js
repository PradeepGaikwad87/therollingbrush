const services = [
  "Interior Painting",
  "Exterior Painting",
  "Home Repainting",
  "Texture Painting",
  "Royal 3D Painting",
  "Polish Work",
  "Waterproofing",
  "Complete Painting Solutions",
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="logo">
          THE ROLLING <span>BRUSH</span>
        </div>

        <a href="tel:9014909098" className="navButton">
          Call Now
        </a>
      </header>

      <section className="hero">
        <div className="heroContent">
          <p className="eyebrow">HYDERABAD • TELANGANA</p>

          <h1>
            Transform Your
            <br />
            <span>Home With Color.</span>
          </h1>

          <p className="heroText">
            Professional painting services for homes and properties.
            Quality finishing, reliable workmanship and complete painting
            solutions.
          </p>

          <div className="buttons">
            <a href="tel:9014909098" className="primary">
              Call 9014909098
            </a>

            <a
              href="https://wa.me/919014909098"
              className="secondary"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">WHAT WE DO</p>
        <h2>Painting Services</h2>

        <div className="services">
          {services.map((service) => (
            <div className="serviceCard" key={service}>
              <div className="brushIcon">✦</div>
              <h3>{service}</h3>
              <p>
                Professional workmanship with attention to detail and a
                clean, quality finish.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="about">
        <div>
          <p className="eyebrow">ABOUT US</p>
          <h2>Bringing fresh life to your spaces.</h2>
        </div>

        <p>
          The Rolling Brush Painting Services provides residential painting
          and finishing solutions in Habsiguda, Hyderabad and across
          Telangana. From repainting homes to texture finishes,
          waterproofing and polish work, we handle all types of painting
          requirements.
        </p>
      </section>

      <section className="contact">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>Ready to refresh your home?</h2>

        <p>
          Contact <strong>Gaikwad Pandu Ranga</strong> for painting
          enquiries and quotations.
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
            ✉️ Email Us
          </a>
        </div>

        <p className="location">📍 Habsiguda, Hyderabad • Serving Telangana</p>
      </section>

      <footer>
        <div>THE ROLLING BRUSH</div>
        <p>Professional Painting Services • Hyderabad & Telangana</p>
        <p>© {new Date().getFullYear()} The Rolling Brush Painting Services</p>
      </footer>
    </main>
  );
}
