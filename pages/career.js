import React from 'react';
import Section from '../src/components/Section'
import {
  CareerOpportunitiesHero,
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
import { CareerRolesText, DataSecurityText, TechnicalDescriptionText } from '../src/components/TextColumns'
import TechnicalDescriptionImage from '../src/sections/howitworks/TechnicalDescriptionImage'
import { TryNowCTA } from '../src/components/Components'

const HowItWorksPage = () =>
  <main>
    <Section>
      <CareerOpportunitiesHero/>
    </Section>
    <Section variant={"gray"}>
      <CareerRolesText/>
    </Section>
  </main>

export default HowItWorksPage