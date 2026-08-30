function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo">
          LDC
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Company</a>
          <a href="#">Partners</a>
          <a href="#">Case Studies</a>
          <a href="#">Resources</a>
          <a href="#">SMBs Services</a>
        </nav>

        <a href="#" className="contact-btn">
          Contact Us
        </a>

      </div>
    </header>
  );
}

export default Header;