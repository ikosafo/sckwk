import React from 'react';
import Section from '../src/components/Section'
import SolutionFinder from '../src/sections/onboarding/SolutionFinder'
import './styles.css'
//import Finders from '../src/sections/solutions/Finders'

class FinderPage extends React.Component {

  render(){
    return  <main>
        <Section>
          <SolutionFinder/>
         {/*  <Finders/> */}
        </Section>
      </main>
  }
}

export default FinderPage;