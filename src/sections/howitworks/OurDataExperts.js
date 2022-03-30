import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { SectionHeadline, SectionSubHeadline } from '../../components/Components'
import ScaleWork from '../../components/ScaleWork'

const styles = theme => ({
  root:{
    "& img":{
      display: "block",
      margin: "1em auto",
    }
  }
});

const OurDataExperts = ({classes}) =>
  <Grid container spacing={2} alignContent={"center"} justify={"center"} className={classes.root}>
    <Grid>
      <SectionHeadline>Our Data Experts</SectionHeadline>
      <SectionHeadline style={{fontSize:"30px"}}> <ScaleWork/> data experts can help you solve your most pressing business problems.</SectionHeadline>
    </Grid>
    <Grid item xs={12} sm={4}>
      <img src={'/static/images/06 How it works/02-our-data-experts/expertise-icon.svg'}/>
      <Typography variant={'h6'} color={"primary"} gutterBottom>Expertise</Typography>
      <Typography>Know-how of vetted experts is embedded in our templates both horizontally 
        (technology & methods) and vertically (business function & industry).
       </Typography>
    </Grid>
    <Grid item xs={12} sm={4}>
      <img src={'/static/images/06 How it works/02-our-data-experts/expertise-icon.svg'}/>
      <Typography variant={'h6'} color={"primary"} gutterBottom>Quality of Scale</Typography>
      <Typography>Our global team of thoroughly vetted specialists are trained to work with our
         templates and within their specific domain
      </Typography>
    </Grid>
    <Grid item xs={12} sm={4}>
      <img src={'/static/images/06 How it works/02-our-data-experts/expertise-icon.svg'}/>
      <Typography variant={'h6'} color={"primary"} gutterBottom>Fast and Easy</Typography>
      <Typography>All specialists think one step ahead, contributing with every part of their work to 
        solve your problem. Our templates will do the rest.
      </Typography>
    </Grid>
  </Grid>

export default withStyles(styles)(OurDataExperts);