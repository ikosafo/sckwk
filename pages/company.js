import React from "react";
import Section from "../src/components/Section";
import { /* CompanyHero, */ JoinUsHero } from "../src/components/Hero";
import CoreIdeas from "../src/sections/company/CoreIdeas";
import CompanyMainHero from "../src/sections/company/CompanyMainHero";
//import CoreValues from "../src/sections/company/CoreValues";
import Founder from "../src/sections/company/Founders";
import Location from "../src/sections/company/Location";
import Newsletter from "../src/sections/company/Newsletter";
import ContactForm from "../src/sections/company/ContactForm";
import ContactFormHubspot from "../src/sections/company/ContactFormHubspot";
import './styles.css'

const UsecasePage = () => (
  <main>
    <Section variant={"companyhero"}>
      {/* <CompanyHero /> */}
      <CompanyMainHero />
    </Section>
    <Section variant={"gradient2"}>
      <CoreIdeas />
      {/* <CoreValues/> */}
    </Section>
    <Section variant={"grayLogo"} id={"about-us"}>
      <Founder />
    </Section>
    <Section fullWidth id={"locations"}>
      <Location />
    </Section>
    {/* <Section fullWidth variant={"secondary"} id={"newsletter"}>
      <Newsletter />
    </Section> */}
    <Section id={"join-us"}>
      <JoinUsHero />
    </Section>
    <Section variant={"secondaryLogo"} id={"contact"}>
      <ContactForm />
    </Section>
  </main>
);

export default UsecasePage;
