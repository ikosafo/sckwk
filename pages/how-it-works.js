import React from 'react';
import Section from '../src/components/Section'
import {
  DataSecurityHero,
  HowItWorksHero,
} from '../src/components/Hero'
import HowItWorextColumns from '../src/sections/howitworks/HowItWorksTextColumns'
import StepByStep from '../src/sections/howitworks/StepByStep'
import StepByStep2 from '../src/sections/howitworks/StepByStep2'
import ClientExamples from '../src/sections/howitworks/ClientExamples'
import OurDataExperts from '../src/sections/howitworks/OurDataExperts'
import ExpertProfiles from '../src/sections/howitworks/ExpertProfiles'
import Roles from '../src/sections/howitworks/Roles'
import Stats from '../src/sections/howitworks/Stats'
import { DataSecurityText,/*  TechnicalDescriptionText */ } from '../src/components/TextColumns'
/*import TechnicalDescriptionImage from '../src/sections/howitworks/TechnicalDescriptionImage'
import { TryNowCTA } from '../src/components/Components' */

const HowItWorksPage = () =>
  <main>
    <Section>
      <HowItWorksHero/>
    </Section>
    <Section variant={"gray"} id={"proposition"}>
      <HowItWorextColumns/>
    </Section>
    <Section variant={"gray"} id={"step-by-step"}>
      <StepByStep/>
      <StepByStep2/>
    </Section>
    <Section variant={"black"} id={"client-examples"}>
      <ClientExamples/>
    </Section>
    <Section id={"our-data-experts"}>
      <OurDataExperts/>
      <Roles/>
      <ExpertProfiles/>
    </Section>
    <Section variant={"black"} id={"client-examples"}>
      <Stats/>
    </Section>
    <Section variant={"gray"} id={"data-security"}>
      <DataSecurityHero/>
      <DataSecurityText/>
    </Section>
   {/*  <Section variant={"black"} id={"data-security-setup"}>
      <TechnicalDescriptionText/>
      <TechnicalDescriptionImage/>
      <TryNowCTA/>
    </Section> */}
  </main>

export default HowItWorksPage