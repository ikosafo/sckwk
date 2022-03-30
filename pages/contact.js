import React from 'react';
import Section from '../src/components/Section'
import { ContactHero } from '../src/components/Hero'
import ContactForm from '../src/sections/company/ContactForm'

const UsecasePage = () =>
  <main>
    <Section>
      <ContactHero/>
    </Section>
    <Section variant={"secondaryLogo"} id={"contact"}>
      <ContactForm/>
    </Section>
  </main>

export default UsecasePage