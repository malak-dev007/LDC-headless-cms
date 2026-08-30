type Partner = {

    id : number;
    url: string;
  alternativeText?: string;
};

type PartnersProps = {
  title: string;
  logos: any[];
};

function Partners({ title, logos }: PartnersProps) {
  return (
    <section className="partners">
      <h2>{title}</h2>

      <div className="partners-logos">
        {logos.map((logo) => (
          <div className="partner-logo" key={logo.id}>
            <img
              src={`http://localhost:1337${logo.url}`}
              alt=""
            />
          </div>
        ))}
      </div>
    </section>
  );
}


export default Partners;
