type HeroProps = {
  title: string;
  discription: string;
  subtitle: string;
  background: any;
  primaryButtonText: string;
  learnMoreLink: string;
  contactUsLink: string;
  contactUsButton: string;
};

function Hero({ title, discription, subtitle, background, primaryButtonText, learnMoreLink, contactUsLink, contactUsButton }: HeroProps) {
  return (
    <section
  className="hero"
  style={{
    background: background?.[0]?.url
      ? `url(http://localhost:1337${background[0].url})`
      : "none",
  }}
>     <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="hero-subtitle">{subtitle}</p>
        <h3>{title}</h3>
        <p className="hero-description">{discription}</p>
         <div className="hero-buttons">
         <a href={learnMoreLink} className="hero-btn primary">{primaryButtonText}</a>
         <a href={contactUsLink} className="hero-button secondary">{contactUsButton}</a>

         </div>
      </div>
    </section>
  );
}

export default Hero;