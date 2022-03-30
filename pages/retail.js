import React from "react";
import Section from "../src/components/Section";
import TextColumns from "../src/sections/index/TextColumns";
import Usecases from "../src/sections/index/Usecases";
import Testimonials, { Testimonial } from "../src/sections/index/Testimonials";
import PreConfigured from "../src/sections/index/PreConfigured";
import { UsecaseHero } from "../src/components/Hero";
import Contact from "../src/sections/index/Contact";
import NextSteps2 from "../src/sections/index/NextSteps2";
import { driver } from "../public/static/locales/en/retail.json";

const ManufacturingPage = () => (
  <main>
    <Section>
      <UsecaseHero />
    </Section>
    <Section variant={"gradient2"}>
      <TextColumns />
    </Section>
    <Section variant={"gradient2"}>
      <PreConfigured />
    </Section>
    <Section variant={"grayLogo"}>
      <Usecases content={driver} />
      <Section>
        <Testimonials>
          <Testimonial title={"(Head of Business Development B2C-Retailer)"}>
            We own an overwhelming amount of ​ data, now our merchants start to
            work with it.
          </Testimonial>
          <Testimonial title={"(Sales Director of Consumer goods Brand)"}>
            Pricing models that people understand was ​ essential to get them to
            using it.
          </Testimonial>
        </Testimonials>
      </Section>
    </Section>
    <Section id={"next-steps"}>
      <NextSteps2 />
      <Contact />
    </Section>
  </main>
);

export default ManufacturingPage;
