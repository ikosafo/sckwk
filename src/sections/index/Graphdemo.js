import React from 'react';
import MainHero from '../src/sections/index/MainHero'
import Problems from '../src/sections/index/Problems'
import NextSteps from '../src/sections/index/NextSteps'
import Partners from '../src/sections/index/Partners'
import Section from '../src/components/Section'
import Timeline from '../src/sections/index/Timeline'
import WhyScaleWork from '../src/sections/index/WhyScaleWork'
import Testimonials, { Testimonial } from '../src/sections/index/Testimonials'
import NextSteps2 from '../src/sections/index/NextSteps2'
import Footer from '../src/components/Footer'

const IndexPage = () =>
  <main>
    <Section variant={"hero"}><MainHero/></Section>
    <Section variant={"gradient"} id={"overview"}>
      <Problems/>
      <NextSteps/>
     {/*  <Timeline/> */}
    </Section>
    <Section variant={"grayLogo"} id={"why-scalework"}>
      <WhyScaleWork/>
    </Section>
    <Section id={"partners"}>
      <Partners/>
    </Section>
    <Section id={"our-clients"}>
      <Testimonials header={'Our Clients'}>
        <Testimonial person={'Florian Brand'} title={'CEO, ATAI Life Sciences AG'}>
          SCALEWORK is allowing us to scale faster by adding to our our analytics capabilities. We are working with SCALEWORK's BI Analyst as a Service experts and love their service! Their pragmatic and "no-buzzword" assessment of current AI market trends in the Life Science and Biotech industry is invaluable to us.
        </Testimonial>
        <Testimonial person={'Jérôme Lutz'} title={'Founder of UnternehmerTUM [x]'}>
          We partnered with SCALEWORK, because they speak the language of our clients. Despite their world-class data expertise, they are able to cut through all buzzwords and offer working realworld solutions to operational challenges.
        </Testimonial>
      </Testimonials>
    </Section>
    <Section variant={"whiteLogo"} id={"next-steps"}>
      <NextSteps2/>
      {/* <Contact/> */}
    </Section>
  </main>

export default IndexPage