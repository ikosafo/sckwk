import React from 'react';
import Section from '../src/components/Section'
import Usecases ,{Usecase} from '../src/sections/index/Usecases'
import Hero from '../src/components/Hero'
import Contact from '../src/sections/index/Contact'
import NextSteps2 from '../src/sections/index/NextSteps2'
import TextColumns from '../src/components/TextColumns'
import {Typography} from '@material-ui/core'
import {driver} from "../public/static/locales/en/analytics.json"
import Testimonials, { Testimonial } from '../src/sections/index/Testimonials'


const AnalyticsPage = () =>
  <main>
    <Section>
      <Hero headline={"Analytics Adoption"} imgSrc={"/static/images/04 Retail Solutions/01-hero/retail-graphic.png"}>
        The past several year  have been though for telecom operators: although the consumption of mobile data has increased massively, revenues and cash flows have dropped. Operators had to invest massively into their wireless networks while the growth of their customer base slowed down. While it is becoming harder to monetize the required communications infrastructure for telco operators, over-the-top content (OTT) such as music and video streaming brings gigantic turnovers to its distributors.
      </Hero>
    </Section>
    <Section variant={"gray"}>
      <TextColumns>
        <Typography>Major advances in data analytics, artificial intelligence, and other technologies are changing the game in the industry. Mobile operators can achieve breakthrough cost savings and capital intensity while maintaining or even increasing their scale using the new data opportunities. Digital technology can help them to streamline business functions and please customers, reducing costs and raising sales. </Typography>
        <Typography>But digitization is not just a threat; it also offers telecom companies an opportunity to rebuild their market positions, reimagine their business systems, and create innovative offerings for customers. AI might indeed be able to transform the industry—but telcos will need to spark that revolution. Predictive maintenance, for example, can identify potential failures, enabling fixes before systems—and the services that customers depend on—fail. Machine learning allows telcos to identify patterns in a user’s browsing and purchasing histories and then suggest what’s known as the next best offer—the next product that is most likely to resonate with that customer. </Typography>
      </TextColumns>
      <Testimonials>
        <Testimonial person={'Head of CRM'} title={'German Telco Provider'}>
          Better understanding our customers and why they are churning helped us to reduce churn rates massively securing their revenues
        </Testimonial>
        <Testimonial person={'Head of Customer Service'} title={'UK Mobile Operator'}>
          The identification of technical issues with our customers helped us to avoid a large share of problem related incoming call center volume
        </Testimonial>
        <Testimonial person={'Head of Operations'} title={'European Mobile Operator'}>
          Investments for the mobile infrastructure are critical to us. Identifying the optimal footprint to serve our customers increases the return on our investments
        </Testimonial>
      </Testimonials>
    </Section>
    <Section variant={"grayLogo"}>
      <Usecases content={driver}/>
    </Section>
    <Section id={"next-steps"}>
      <NextSteps2/>
      <Contact/>
    </Section>
  </main>

export default AnalyticsPage
