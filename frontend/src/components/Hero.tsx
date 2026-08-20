type HeroProps = {
  title: string;
  discription: string;
};

function Hero({ title, discription }: HeroProps) {
  return (
    <section>
      <h2>{title}</h2>
      <p>{discription}</p>
    </section>
  );
}

export default Hero;