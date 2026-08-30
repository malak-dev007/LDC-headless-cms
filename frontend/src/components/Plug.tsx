type PlugProps = {
  title: string;
  description: string;
  explore: string;
  collectedLogos: any;
};

function Plug({ title, description, explore, collectedLogos }: PlugProps) {
    console.log("COLLECTED LOGOS:", collectedLogos);
  return (
    <section className="plug">

      <div className="plug-content">
        <h2>{title}</h2>

        <p>{description}</p>

        <a href="#" className="btn">
  Explore Our Integrations →
</a>
      </div>

      <div className="collected-logos">
  <img
    src={`http://localhost:1337${collectedLogos.url}`}
    alt={collectedLogos.alternativeText || ""}
  />
</div>

    </section>
  );
}
export default Plug;
