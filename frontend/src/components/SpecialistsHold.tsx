// console.log(icon1);

type SpecialistsHoldProps = {
  title: string;
  description: string;
  icon1: any;
  icon2: any;
  icon3: any;
  icon4: any;
  icon5: any;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
};

function SpecialistsHold({
  title,
  description,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  content1,
  content2,
  content3,
  content4,
  content5,
  title1,
  title2,
  title3,
  title4,
  title5,
}: SpecialistsHoldProps) {
  return (
    <section className="specialists-hold">
  <div className="specialists-hold-header">

    <div className="specialists-title-row">
      <h2>{title}</h2>

      <div className="specialists-arrows">
        <button>‹</button>
        <button>›</button>
      </div>
    </div>

    <p>{description}</p>

  </div>

      <div className="specialists-hold-items">
        <div className="specialist-card">
          <div className="specialist-icon">
<img
  src={`http://localhost:1337${icon1?.url}`}
  alt={icon1?.alternativeText || ""}
/>          </div>

          <div className="specialist-content">
            <h3>{title1}</h3>
            <p>{content1}</p>
          </div>
        </div>

        <div className="specialist-card">
          <div className="specialist-icon">
<img
  src={`http://localhost:1337${icon2?.url}`}
  alt={icon2?.alternativeText || ""}
/>          </div>

          <div className="specialist-content">
            <h3>{title2}</h3>
            <p>{content2}</p>
          </div>
        </div>

        <div className="specialist-card">
          <div className="specialist-icon">
<img
  src={`http://localhost:1337${icon3?.url}`}
  alt={icon3?.alternativeText || ""}
/>          </div>

          <div className="specialist-content">
            <h3>{title3}</h3>
            <p>{content3}</p>
          </div>
        </div>

        <div className="specialist-card">
          <div className="specialist-icon">
<img
  src={`http://localhost:1337${icon4?.url}`}
  alt={icon4?.alternativeText || ""}
/>          </div>

          <div className="specialist-content">
            <h3>{title4}</h3>
            <p>{content4}</p>
          </div>
        </div>

        <div className="specialist-card">
          <div className="specialist-icon">
<img
  src={`http://localhost:1337${icon5?.url}`}
  alt={icon5?.alternativeText || ""}
/>          </div>

          <div className="specialist-content">
            <h3>{title5}</h3>
            <p>{content5}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialistsHold;