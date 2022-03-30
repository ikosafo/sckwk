import React from 'react'
import { Grid, Typography, withStyles, } from '@material-ui/core'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
//import "./SolutionSlider.css"
import { SectionHeadline } from '../../components/Components'
import ScaleWork from '../../components/ScaleWork'
import TileCard from '../../components/TileCard'
import { Link } from '../../components/Link'
import { PurpleLink } from '../../components/Link'

const solutions = [{
  title: 'C-level Analytics on demand',
  desc: <React.Fragment>Our client was a strategy unit that regularly requires executive committee PowerPoint presentations based on market data analytics. <ScaleWork/> data experts delivered CEO-ready business analysis in their templates on an ad-hoc basis.</React.Fragment>,

},{
  title: 'Sales predictions',
  desc: <React.Fragment>Our client was in need for a price forecasting solution. Based on ERP data and CRM data, <ScaleWork/> analysts developed a new prediction model based on internal and external weather and traffic data to improve accuracy by 45%.</React.Fragment>,
  color: "secondary"
}, {
  title: 'Sales force optimization',
  desc: <React.Fragment>Our client was the Head of Sales that wanted an automated recommendation of action 
    per client for their sales reps. <br/><br/><ScaleWork/> experts developed a system that provided 
    a “next best action” like “up sell to product X”, or “try to convince to pick-up delivery” which resulted in 7% higher client contribution margin.</React.Fragment>,
  color: "secondary",
  variant: 'light'
}
]



const styles = theme => ({
});


const ClientExamples = () =>

  <Grid container spacing={4}>
    <Grid xs={12} item>
      <SectionHeadline>Client examples</SectionHeadline>
      <Typography>This is a short list of client examples. For a more complete list, see <Link href={"/solutions#past-solutions"}>Past solutions</Link>.</Typography>
    </Grid>
    <Grid xs={12} item>
      <AliceCarousel autoPlayInterval={6000} stopAutoPlayOnHover fadeOutAnimation dotsDisabled={false} mouseDragEnabled buttonsDisabled responsive={  {
        0: {
          items: 1
        },
        1024: {
          items: 3
        }}}>
        {solutions.map(solution => <TileCard key={solution.title} content={solution} color={solution.color} variant={solution.variant}/>)}
      </AliceCarousel>
    </Grid>
    <Grid item sm={3} xs={false}/>
    <Grid item sm={6} xs={12}>
      <Typography gutterBottom>
        Define your own data science <PurpleLink href="/finder"> Solutions.</PurpleLink> now, or browse a list of all <PurpleLink href="/solutions#past-solutions"> Past Solutions.</PurpleLink>
      </Typography>
    </Grid>
    <Grid item sm={3} xs={false}/>
  </Grid>

export default withStyles(styles)(ClientExamples);