import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
/* import Graph from '../../components/Graph' 
import VGraph from '../../components/VGraph'
import { SectionHeadline } from '../../components/Components'
import GraphSlide, { Sliding } from '../../../src/sections/index/GraphSlide'
import Section from '../../../src/components/Section' */
import '../../../pages/styles.css'


const styles = theme => ({
  paragraph: {
    maxWidth:"380px",
    margin: "1em auto"
  },
});

const Landing = () =>

    <section className="hero" style={{marginRight:'-15%'}}>
        <div className="hero-inner">
            <h1>My awesome website</h1>
            <h2>Look at this website and bask in its amazing glory!</h2>
            <a href="https://example.com/" className="btn">Go ahead...</a>
        </div>
    </section>
  
  
export default withStyles(styles)(Landing)

