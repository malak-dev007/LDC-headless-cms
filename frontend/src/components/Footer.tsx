type FooterLink = {
  id: number;
  label: string;
  url: string;
};

type FooterColumn = {
  id: number;
  title: string;
  link?: FooterLink[];
};

type SocialLink = {
  id: number;
  platform: string;
  url: string;
  icon: any[];
};

type FooterProps = {
  columns: FooterColumn[];
  connectTitle: string;
  newsletterText: string;
  newsletterButton: string;
  badges: any[];
  social: SocialLink[];
  name: string;
};

function Footer({
  columns,
  connectTitle,
  newsletterText,
  newsletterButton,
  badges,
  social,
  name,
}: FooterProps) {
    console.log("FOOTER COLUMNS:", columns);

  columns?.forEach((column) => {
    console.log("SINGLE COLUMN:", column);
      console.log("LINKS:", column.link);

  });

  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-columns">
  {columns
    ?.filter((column) => column.title !== "Learn")
    .map((column) => (
      <div className="footer-column" key={column.id}>
        <h3>{column.title}</h3>

        <ul>
          {column.link?.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}

  <div className="learn-connect">
  {columns
    ?.filter((column) => column.title === "Learn")
    .map((column) => (
      <div className="footer-column" key={column.id}>
        <h3>{column.title}</h3>

        <ul>
          {column.link?.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    ))}


    <div className="footer-connect">
    </div>
  </div>
</div>

        <div className="footer-connect">

          <h3>{connectTitle}</h3>

          <div className="social-links">
            {social?.map((item) => (
              <a
                key={item.id}
                href={item.url}
                aria-label={item.platform}
                target="_blank"
                rel="noreferrer"
              >
                {item.icon?.[0]?.url ? (
                  <img
                    src={`http://localhost:1337${item.icon[0].url}`}
                    alt={item.platform}
                  />
                ) : (
                  <span>{item.platform}</span>
                )}
              </a>
            ))}
          </div>

          <p className="newsletter-title">
            {newsletterText}
          </p>

          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email here"
            />

            <button type="submit">
              {newsletterButton}
            </button>
          </form>

          <div className="footer-badges">
            {badges?.map((badge) => (
              <img
                key={badge.id}
                src={`http://localhost:1337${badge.url}`}
                alt={badge.alternativeText || ""}
              />
            ))}
          </div>

          <p className="footer-name">
            {name}
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer;