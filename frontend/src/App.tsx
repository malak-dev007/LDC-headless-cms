import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import RichText from "./components/RichText";
import Partners from "./components/Partners";
import Header from "./components/Header";
import SpecialistsHold from "./components/SpecialistsHold";
import PublicCloud from "./components/PublicCloud";
import Benefits from "./components/Benefits";
import Plug from "./components/Plug";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import EverythingApp from "./components/EverythingApp";
type Component = {
  id: number;
  __component: string;
  [key: string]: any;
};

type Page = {
  documentId: string;
  title: string | null;
  Content: Component[];
};

function App() {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
  axios.get(`${import.meta.env.VITE_API_URL}/api/pages?populate=*`)
.then((response) => {
  console.log("FULL RESPONSE:", response.data.data);

  console.log(
    "FOOTER:",
    response.data.data
      .flatMap((page: Page) => page.Content || [])
      .find(
        (component: Component) =>
          component.__component === "shared.footer-column"
      )
  );

  setPages(response.data.data);
})
.catch((error) => {
  console.error(error);
});
  }, []);

  return (
    
      <div>
    <Header />

    {pages.map((page) => (
      <div key={page.documentId}>

          {page.Content?.map((component) => {
            console.log("COMPONENT:", component.__component);
            console.log("ALL COMPONENT:", component);
            console.log("COMPONENT TYPE:", component.__component);
 
            switch (component.__component) {
              case "shared.hero":
                console.log("HERO DATA:", component);
                console.log("BACKGROUND:", component.background);
                return (
                  <Hero
                    key={component.id}
                    title={component.title}
                    discription={component.discription}
                    subtitle={component.subtitle}
                    background={component.background}
                    primaryButtonText={component.primaryButtonText}
                    learnMoreLink={component.learnMoreLink}
                    contactUsLink={component.contactUsLink}
                    contactUsButton={component.contactUsButton}


                  />
                );

              // case "shared.rich-text":
              //   return (
              //     <RichText
              //       key={component.id}
              //       Content={component.Content}
              //     />
              //   );
                case "shared.partners":
                  console.log("PARTNERS DATA:", component);
                return (
                  <Partners key={component.id}
                    title={component.title}
                    logos={component.logos}
                  />
                );
                case "shared.puplic-cloud":
                  console.log("PUBLIC CLOUD DATA:", component);
                  return (
                   <PublicCloud
                            key={component.id}
                            title={component.title}
                            description={component.description}
                            Image1={component.Image1}
                            Content1={component.Content1}
                            Image2={component.Image2}
                            Content2={component.Content2}
          />
  );
  case "shared.specialists-hold":
    console.log("SPECIALISTS HOLD DATA:", component);
    return (
      <SpecialistsHold
        key={component.id}
        title={component.title}
        description={component.description}
        icon1={component.icon1}
        icon2={component.icon2}
        icon3={component.icon3}
        icon4={component.icon4}
        icon5={component.icon5}
        content1={component.content1}
        content2={component.content2}
        content3={component.content3}
        content4={component.content4}
        content5={component.content5}
        title1={component.title1}
        title2={component.title2}
        title3={component.title3}
        title4={component.title4}
        title5={component.title5}
      />
    );
    case "shared.benefits":
      console.log("BENEFITS DATA:", component);
      return (
        <Benefits
          key={component.id}
          title={component.title}
          description={component.description}
          icon1={component.icon1}
          icon2={component.icon2}
          icon3={component.icon3}
          icon4={component.icon4}
          icon5={component.icon5}
          icon6={component.icon6}
          title1={component.title1}
          title2={component.title2}
          title3={component.title3}
          title4={component.title4}
          title5={component.title5}
          title6={component.title6}
          text1={component.text1}
          text2={component.text2}
          text3={component.text3}
          text4={component.text4}
          text5={component.text5}
          text6={component.text6}
        />
      );
      case "shared.plug":
        console.log("PLUG DATA:", component);
        return (
          <Plug
            key={component.id}
            title={component.title}
            description={component.description}
            explore={component.explore}
            collectedLogos={component.collectedLogos}
          />
        );
        case "shared.contact":
          console.log("CONTACT DATA:", component);
          return (
            <Contact
              key={component.id}
              email={component.email}
              title={component.title}
              description={component.description}
              firstName={component.firstName}
              lastName={component.lastName}
              company={component.company}
              jobtitle={component.jobtitle}
              phoneNo={component.phoneNo}
              privacyText={component.privacyText}
              privacyLink={component.privacyLink}
              submitText={component.submitText}
            />
          );
          case "shared.faq":
            console.log("FAQ DATA:", component);
            return (
              <FAQ
                key={component.id}
                question={component.question}
                answer={component.answer}
                question1={component.question1}
                answer1={component.answer1}
                question2={component.question2}
                answer2={component.answer2}
                question3={component.question3}
                answer3={component.answer3}
              />
            );
            case "shared.everything-app":
  return (
    <EverythingApp
      key={component.id}
      title={component.title}
      support={component.support}
      weekly={component.weekly}
      secure={component.secure}
      uptime={component.uptime}
      icon1={component.icon1}
      icon2={component.icon2}
      icon3={component.icon3}
      icon4={component.icon4}
    />
  );
  case "shared.footer-column":
      console.log("FOOTER DATA:", component);

  return (
    <Footer
      key={component.id}
      columns={component.columns}
      connectTitle={component.connectTitle}
      newsletterText={component.newsletterText}
      newsletterButton={component.newsletterButton}
      badges={component.badges}   
      social={component.social}
      name={component.name}
    />
  );
           
          default:
            return null;
        }
      })}
        </div>
      ))}
    </div>
  );
}

export default App;