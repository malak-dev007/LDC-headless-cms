import { useEffect, useState } from "react";
import axios from "axios";
import Hero from "./components/Hero";
import RichText from "./components/RichText";

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
    axios
      .get("http://localhost:1337/api/pages?populate=*")
      .then((response) => {
        setPages(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>LDC Headless CMS</h1>

      {pages.map((page) => (
        <div key={page.documentId}>
          <h2>{page.title}</h2>

          {page.Content.map((component) => {
            switch (component.__component) {
              case "shared.hero":
                return (
                  <Hero
                    key={component.id}
                    title={component.title}
                    discription={component.discription}
                  />
                );

              case "shared.rich-text":
                return (
                  <RichText
                    key={component.id}
                    Content={component.Content}
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