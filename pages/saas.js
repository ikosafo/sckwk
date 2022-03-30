import React from "react";
import Section from "../src/components/Section";
import Usecases, { Usecase } from "../src/sections/index/Usecases";
import Hero from "../src/components/Hero";
import Contact from "../src/sections/index/Contact";
import NextSteps2 from "../src/sections/index/NextSteps2";
import PreConfigured from "../src/sections/index/PreConfigured";
import TextColumns from "../src/components/TextColumns";
import { Typography } from "@material-ui/core";
import { driver } from "../public/static/locales/en/saas.json";
import Testimonials, { Testimonial } from "../src/sections/index/Testimonials";

const SaasPage = () => (
  <main>
    <Section>
      <Hero
        headline={"Software as a Service"}
        imgSrc={"/static/images/05 Solutions/SaaS.png"}
      >
        SaaS is evolving and as the number of competitors on the markets is
        skyrocketing, AI is becoming a decisive differentiator for success. The
        key challenges that SaaS companies facing is often twofold. On the one
        side they need to investigate where in their business model those 10x
        improvement levers through AI are. On the other side their engineering
        teams need to develop new set of skills to turn vision into action.
      </Hero>
    </Section>
    <Section variant={"gradient2"}>
      <TextColumns>
        <Typography>
          As data collection and AI grows in demand, the availability of AI- &
          ML-services has commoditized and we are seeing a similar development
          than for cloud computing in the last decade. This implies that the
          success factor in applying AI for SaaS companies is not to built
          superior models, but rather to train available data in the best
          possible way so the models can suite the needs of the business
          context. This is a major shift in the role model of engineers from
          writing algorithms to training of applications and come with
          challenges of its own. Key success factor on this journey is to have
          training data at sufficient quantity and quality as well as further
          data sets to test the model prior to moving into production.
        </Typography>
        <Typography>
          AI- & ML- algorithms are in general designed to serve on of the
          following purposes:
          <ul>
            <li>Diagnose a situation / pattern recognition</li>
            <li>Predict a future outcome </li>
            <li>
              Prescribe actions in order to optimize along certain dimensions{" "}
            </li>
            <li>Personalized user experience </li>
          </ul>
          Based on their business model and customer value proposition,
          companies need to identify areas where algorithms have the potential
          to increase status quo by 10x and also determine what data is needed
          for this.
        </Typography>
      </TextColumns>
      <Testimonials>
        <Testimonial
          /* person={'Head of Operations'} */ title={
            "CTO of European SaaS Provider (B2B)"
          }
        >
          We are fastly growing and collect a lot of data in the sales process
          as well as through our platform without utilizing this data. Fitting
          this data into models that work for us has been a game changer.
        </Testimonial>
        <Testimonial
          /* person={'Head of Production'} */ title={
            "CEO of Circular Economy SaaS Start-Up"
          }
        >
          Finding right prices for products we sell-off on the secondary market
          was a boost for our valuation without changing any processes.
        </Testimonial>
        {/* <Testimonial person={'Plant Manager'} title={'European Chemicals Producer'}>
          Chemical production processes are extremely complex. Finding the perfect calibration has increased our output on a big scale.
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

export default SaasPage;
