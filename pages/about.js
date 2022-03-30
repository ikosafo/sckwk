import React from "react";
import Section from "../src/components/Section";
import {JoinUsHero } from "../src/components/Hero";
import CoreIdeas from "../src/sections/company/CoreIdeas";
import CompanyMainHero from "../src/sections/company/CompanyMainHero";
import Founder from "../src/sections/company/Founders";
import Location from "../src/sections/company/Location";
import ContactForm from "../src/sections/company/ContactForm";
import './styles.css'

const UsecasePage = () => (
  <main>
    <Section variant={"companyhero"}>
      <CompanyMainHero />
    </Section>
    <Section variant={"gradient2"}>
      <CoreIdeas />
    </Section>
    <Section variant={"grayLogo"} id={"about-us"}>
      <Founder />
    </Section>
    <Section fullWidth id={"locations"}>
      <Location />
    </Section>
    <Section id={"join-us"}>
      <JoinUsHero />
    </Section>
    <Section variant={"secondaryLogo"} id={"contact"}>
      <ContactForm />
    </Section>
  </main>
);

export default UsecasePage;
