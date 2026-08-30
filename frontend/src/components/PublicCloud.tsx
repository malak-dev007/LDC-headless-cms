type PublicCloudProps = {
  title: string;
  description: string;
  Image1: any;
  Content1: string;
  Image2: any;
  Content2: string;
};

function PublicCloud({
  title,
  description,
  Image1,
  Content1,
  Image2,
  Content2,
}: PublicCloudProps) {
  return (
    <section className="public-cloud">

      <div className="public-cloud-header">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <div className="public-cloud-items">

  <div className="cloud-card">
    <div className="cloud-image">
      <img
        src={`http://localhost:1337${Image1?.[0]?.url}`}
        alt={Image1?.[0]?.alternativeText || ""}
      />
    </div>

    <div className="cloud-content">
      <h3>Lorem IPSam Title</h3>
      <p>{Content1}</p>

      <a href="#">Learn more</a>
    </div>
  </div>


  <div className="cloud-card">
    <div className="cloud-image">
      <img
        src={`http://localhost:1337${Image2?.[0]?.url}`}
        alt={Image2?.[0]?.alternativeText || ""}
      />
    </div>

    <div className="cloud-content">
      <h3>Lorem IPSam Title</h3>
      <p>{Content2}</p>

      <a href="#">Learn more</a>
    </div>
  </div>

</div>

    </section>
  );
}

export default PublicCloud;