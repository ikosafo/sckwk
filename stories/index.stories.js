import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button, Welcome } from '@storybook/react/demo';


import {muiTheme} from 'storybook-addon-material-ui';
import MainHero from '../src/sections/index/MainHero'
import Partners from '../src/sections/index/Partners'
import theme from '../src/theme'
import Problems from '../src/sections/index/Problems'
import Timeline from '../src/sections/index/Timeline'
import NextSteps from '../src/sections/index/NextSteps'
import IndexPage from '../pages'
import WhyScaleWork from '../src/sections/index/WhyScaleWork'
import NextSteps2 from '../src/sections/index/NextSteps2'
import Contact from '../src/sections/index/Contact'
import Footer from '../src/components/Footer'
import CompanyPage from '../pages/company'
import IndustryPage from '../pages/industry'
import Location from '../src/sections/company/Location'
import Newsletter from '../src/sections/company/Newsletter'
import Section from '../src/components/Section'
import ContactForm from '../src/sections/company/ContactForm'
import { HowItWorksHero, JoinUsHero, UsecaseHero } from '../src/components/Hero'
import SolutionsPage from '../pages/solutions'
import SolutionSlider from '../src/sections/solutions/SolutionSlider'
import PastSolution from '../src/sections/solutions/PastSolution'
import DataExpertsOnDemand from '../src/sections/solutions/DataExpertsOnDemand'
import HowItWorksPage from '../pages/how-it-works'
import HowItWorksTextColumns from '../src/sections/howitworks/HowItWorksTextColumns'
import ClientExamples from '../src/sections/howitworks/ClientExamples'
import StepByStep2 from '../src/sections/howitworks/StepByStep2'
import OurDataExperts from '../src/sections/howitworks/OurDataExperts'
import Roles from '../src/sections/howitworks/Roles'
import ExpertProfiles from '../src/sections/howitworks/ExpertProfiles'
import Stats from '../src/sections/howitworks/Stats'
/* import { DataSecurityText, TechnicalDescriptionText } from '../src/components/TextColumns' */
import TechnicalDescriptionImage from '../src/sections/howitworks/TechnicalDescriptionImage'
import { TryNowCTA } from '../src/components/Components'


storiesOf('Pages|Content', module)
  .addDecorator(muiTheme([theme]))
  .add('Index', () => <IndexPage/>)
  .add('Company', () => <CompanyPage/>)
  .add('Industry', () => <IndustryPage/>)
  .add('Solutions', () => <SolutionsPage/>)
  .add('How it Works', () => <HowItWorksPage/>)

storiesOf('Sections|Home', module)
  .addDecorator(muiTheme([theme]))
  .add('Hero', () => <MainHero/>)
  .add('Partners', () => <Partners/>)
  .add('NextSteps', () => <NextSteps/>)
  .add('Problems', () => <Problems/>)
  .add('Timeline', () => <Timeline/>)
  .add('WhyScaleWork', () => <WhyScaleWork/>)
  .add('NextSteps2', () => <NextSteps2/>)
  .add('Contact', () => <Contact/>)
  .add('Hero', () => <UsecaseHero/>)
  .add('Footer', () => <Footer/>)

storiesOf('Sections|Company', module)
  .addDecorator(muiTheme([theme]))
  .add('Location', () => <Location/>)
  .add('Newsletter', () => <Section fullWidth variant={"secondary"}><Newsletter/></Section>)
  .add('JoinUs', () => <Section><JoinUsHero/></Section>)
  .add('Contact', () => <Section variant={"secondaryLogo"}><ContactForm/></Section>)



storiesOf('Sections|Solution', module)
  .addDecorator(muiTheme([theme]))
  .add('SolutionSlider', () => <Section variant={"gray"}><SolutionSlider/></Section>)
  .add('PastSolution', () => <Section variant={"gray"}><PastSolution/></Section>)
  .add('Expert on Demand', () => <Section variant={"blackComputer"}><DataExpertsOnDemand/></Section>)

storiesOf('Sections|How it Works', module)
  .addDecorator(muiTheme([theme]))
  .add('How it Works', () => <Section variant={"gray"}><HowItWorksTextColumns/></Section>)
  .add('Step By Step', () => <Section variant={"gray"}><StepByStep2/></Section>)
  .add('Client Examples', () => <Section variant={"black"}><ClientExamples/></Section>)
  .add('Our Data Experts', () => <Section><OurDataExperts/></Section>)
  .add('Roles', () => <Section><Roles/></Section>)
  .add('Expert Profiles', () => <Section><ExpertProfiles/></Section>)
  .add('Stats', () => <Section><Stats/></Section>)
  .add('TechnicalDescription', () => <Section variant={"black"}><TechnicalDescriptionText/><TechnicalDescriptionImage/><TryNowCTA/></Section>)