import React from "react";
import Section from "../src/components/Section";
import Usecases, { Usecase } from "../src/sections/index/Usecases";
import Hero from "../src/components/Hero";
import Contact from "../src/sections/index/Contact";
import NextSteps2 from "../src/sections/index/NextSteps2";
import TextColumns from "../src/components/TextColumns";
import PreConfigured from "../src/sections/index/PreConfigured";
import { Typography } from "@material-ui/core";
import { driver } from "../public/static/locales/en/manufacturing.json";
import Testimonials, { Testimonial } from "../src/sections/index/Testimonials";

const ManufacturingPage = () => (
  <main>
    <Section>
      <Hero
        headline={"Manufacturing"}
        imgSrc={"/static/images/05 Solutions/manufacturing.png"}
      >
        Manufacturing is no longer only about creating physical products.
        Changing consumer demand, the nature of products, the economics of
        production and the supply chain are also key.
      </Hero>
    </Section>
    <Section variant={"gradient2"}>
      <TextColumns>
        <Typography>
          As technology continues to advance exponentially, in the fourth
          industrial revolution, digital analytics enables a new level of
          operational productivity. Ubiquitous connectivity throughout supply
          chains, pervasive sensors and data analytics will drive efficacy and
          new business models in the manufacturing sector.
        </Typography>
        <Typography>
          These shifts will generate many distinct opportunities:
          <ul>
            <li>Higher efficiency</li>
            <li>Enhanced effectiveness</li>
            <li>Increased predictability</li>
            <li>Deeper engagement</li>
          </ul>
          To compete, manufacturers will have to embrace the opportunities that
          their data opens to them to increase productivity.
        </Typography>
      </TextColumns>
      <Testimonials>
        <Testimonial
          person={"Head of Operations"}
          title={"European Food Maker."}
        >
          We are collecting a lot of data from the sensors throughout our
          production process. Now we can use them to increase productivity.
        </Testimonial>
        <Testimonial
          person={"Head of Production"}
          title={"German Automotive Supplier."}
        >
          Energy costs in Germany are among the highest in the world. Reducing
          waste of energy has a huge impact on profitability.
        </Testimonial>
        <Testimonial
          person={"Plant Manager"}
          title={"European Chemicals Producer"}
        >
          Chemical production processes are extremely complex. Finding the
          perfect calibration has increased our output on a big scale.
        </Testimonial>
      </Testimonials>
    </Section>
    <Section variant={"gradient2"}>
      <PreConfigured />
    </Section>
    <Section variant={"grayLogo"}>
      <Usecases content={driver} />
    </Section>
    <Section id={"next-steps"}>
      <NextSteps2 />
      <Contact />
    </Section>
  </main>
);

export default ManufacturingPage;
