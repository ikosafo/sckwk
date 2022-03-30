import React from "react";
import Section from "../src/components/Section";
import PreConfigured from "../src/sections/index/PreConfigured";
import {SolutionFinderHero} from "../src/components/Hero";
import SolutionMainHero from '../src/sections/solutions/SolutionMainHero';
import SolutionHeroCard from '../src/sections/solutions/SolutionHeroCard';
import PastSolution from "../src/sections/solutions/PastSolution";
import { PastSolutionText } from "../src/components/TextColumns";

const SolutionsPage = () => (
  <main>
    <Section variant={"companygray"}>
      <SolutionMainHero/>
    </Section>
    <Section>
      <SolutionHeroCard/>
    </Section>
    <Section variant={"grayLogo"}>
      <PreConfigured />
    </Section>
    {/* <Section variant={"blackComputer"} id={"data-experts-on-demand"}>
      <DataExpertsOnDemand />
    </Section> */}
    {/* <Section variant={"gradient2"} id={"services"}>
      <SolutionSlider />
    </Section> */}
    {/* <Section variant={"grayLogo"}>
      <SolutionFinderHero />
    </Section> */}
    <Section id={"past-solutions"}>
      <PastSolutionText  variant={"gradient2"}/>
      <PastSolution />
    </Section>
  </main>
);

export default SolutionsPage;
