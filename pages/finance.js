import React from "react";
import Section from "../src/components/Section";
import Usecases, { Usecase } from "../src/sections/index/Usecases";
import Hero from "../src/components/Hero";
import Contact from "../src/sections/index/Contact";
import NextSteps2 from "../src/sections/index/NextSteps2";
import PreConfigured from "../src/sections/index/PreConfigured";
import TextColumns from "../src/components/TextColumns";
import { Typography } from "@material-ui/core";
import { driver } from "../public/static/locales/en/finance.json";
import Testimonials, { Testimonial } from "../src/sections/index/Testimonials";

const Finance = () => (
  <main>
    <Section>
      <Hero
        headline={"Finance"}
        imgSrc={"/static/images/05 Solutions/finance.png"}
      >
        The Finance function is much more than reporting of performance.
        Improving processes and accelerating growth as business partner as well
        as managing enterprise risk and creating sustainable value for all
        stakeholders are amongst the key priorities of a CFO and its
        organization.
      </Hero>
    </Section>
    <Section variant={"gradient2"}>
      <TextColumns>
        <Typography>
          Digital transformation has disrupted many industries and impacted
          operations across the entire value chain: Personalized products,
          shorter go-to-market cycles, outside industry competitors as well new
          revenue models and service offerings drive process complexity and
          require Finance organizations more than ever to act as a business
          enabler.
        </Typography>
        <Typography>
          AI has the power to augment the playbook of Finance experts with
          application fields from freeing up working capital and maximizing
          productivity to digitizing operations as well as managing risk and
          compliance. Our platform of pre-configured Machine Learning systems
          will get you the insights needed to drive better outcomes for your
          organization.
        </Typography>
      </TextColumns>
      <Testimonials>
        <Testimonial
          /* person={'Head of Operations'} */ title={
            "Chief Financial Officer; Industrial Automation"
          }
        >
          Going beyond Financial data allowed us to have a richer performance
          dialogue with Operations and also falsified some common opinions in
          the field.
        </Testimonial>
        <Testimonial
          /* person={'Head of Production'} */ title={
            "Vice President Engineering PLM & Digital Transformation; Automotive"
          }
        >
          ML-models has helped us to identify hidden factors of successful
          Engineering projects and lowers the probability of costly adjustments
          after PEP or SOP significantly.
        </Testimonial>
        {/* <Testimonial person={'Plant Manager'} title={'European Chemicals Producer'}>
          Chemical production processes are extremely complex. Finding the perfect calibration has 
          increased our output on a big scale.
        </Testimonial> */}
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

export default Finance;
