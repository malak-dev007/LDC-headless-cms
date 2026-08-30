import benefitIcon from "../assets/icon1.svg";
console.log(benefitIcon);
type BenefitsProps = {
  title: string;
  description: string;
  icon1: any;
  icon2: any;
  icon3: any;
  icon4: any;
  icon5: any;
  icon6: any;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text6: string;
};

function Benefits({
  title,
  description,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6
}: BenefitsProps) {
  return (
    <section className="benefits">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="benefits-grid">
        <div className="benefit-item">
          <img src={benefitIcon} alt={title1} />
          <h3>{title1}</h3>
          <p>{text1}</p>
        </div>
        <div className="benefit-item">
          <img src={benefitIcon} alt={title2} />
          <h3>{title2}</h3>
          <p>{text2}</p>
        </div>
        <div className="benefit-item">
          <img src={benefitIcon} alt={title3} />
          <h3>{title3}</h3>
          <p>{text3}</p>
        </div>
        <div className="benefit-item">
          <img src={benefitIcon} alt={title4} />
          <h3>{title4}</h3>
          <p>{text4}</p>
        </div>
        <div className="benefit-item">
          <img src={benefitIcon} alt={title5} />
          <h3>{title5}</h3>
          <p>{text5}</p>
        </div>
        <div className="benefit-item">
          <img src={benefitIcon} alt={title6} />
          <h3>{title6}</h3>
          <p>{text6}</p>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
