import React from 'react'
import MainHero from '../src/sections/index/MainHero'
import HeroCard from '../src/sections/index/HeroCard'
import Problems from '../src/sections/index/Problems'
import IndexNewsletter from '../src/sections/company/IndexNewsletter'
//import Newsletter from '../src/sections/company/Newsletter'
import Performancestat from '../src/sections/index/Performancestat'
import Partners from '../src/sections/index/Partners'
import Section from '../src/components/Section'
import Testimonials, { Testimonial } from '../src/sections/index/Testimonials'
import NextSteps2 from '../src/sections/index/NextSteps2'
import './styles.css'
import '../pages/css/servicebox.css'

const IndexPage = () =>
  <main>
  <Section variant={"hero"}>
      <MainHero/>
    </Section>
    <Section id={"overview"}>
      <HeroCard/>
    </Section>
    <Section>
      <Problems/>
    </Section>
    <Section fullWidth variant={"secondary"} id={"newsletter"}>
      <IndexNewsletter/>
    </Section>
   {/*  <Section variant={"redbg"} id={"newsletter"}>
     <Newsletter/>
    </Section> */}
    <Section id={"why-scalework"}>
      <Performancestat/>
    </Section>
    <Section id={"our-clients"}>
      <Testimonials header={'Customers and Partners'}>
        <Testimonial person={'Florian Brand'} title={'CEO, ATAI Life Sciences AG'}>
          SCALEWORK is allowing us to scale faster by adding to our our analytics capabilities. We are working with SCALEWORK's BI Analyst as a Service experts and love their service! Their pragmatic and "no-buzzword" assessment of current AI market trends in the Life Science and Biotech industry is invaluable to us.
        </Testimonial>
        <Testimonial person={'Jérôme Lutz'} title={'Founder, UnternehmerTUM'}>
          We partnered with SCALEWORK, because they speak the language of our clients. Despite their world-class data expertise, they are able to cut through all buzzwords and offer working realworld solutions to operational challenges.
        </Testimonial>
      </Testimonials>
    </Section>
    <Section id={"partners"}>
      <Partners/>
    </Section>
    
    {/* 
      <Section>
         <Landing/>
      </Section> 
      <Section variant={"grayLogo"}  variant={"grayLogo"} id={"why-scalework"}>
        <WhyScaleWork/>
      </Section> 
     */}
    
    <Section id={"overview"}  variant={"gradient"} >
      {/*
      <Problems/>
        <NextSteps/> 
      <Timeline/> 
      */}
    </Section>
    
   
    <Section variant={"whiteLogo"} id={"next-steps"}>
      <NextSteps2/>
      {/* <Contact/> */}
    </Section>
    <Section>
     {/*  <Footer/> */}
    </Section>
  </main>

export default IndexPage