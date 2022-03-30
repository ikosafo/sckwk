import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { SectionHeadline } from '../../components/Components'

const styles = theme => ({
  root:{
    textAlign:"left"
  }
});

const HowItWorksTextColumns = ({classes}) =>
  <Grid container spacing={2} alignContent={"flex-start"} justify={"center"} alignItems={"flex-start"}>
    <Grid xs={12} item>
      <SectionHeadline>Enabling operating entities to get most out of their data:</SectionHeadline>
    </Grid>

    <Grid item xs={12} md={6} className={classes.root}>
      <Typography gutterBottom>We have pre-built standardized AI templates based on 30+ years of experience 
      in data science. <br/>
      Configuration of your solution and integration with your data can improve your decsion making in less than 2 weeks.</Typography>
     
     {/*  <Typography gutterBottom>We offer a secure and trusted remote data collaboration environment.</Typography>
      <Typography gutterBottom>We ensure our data experts are more effective than any other</Typography> */}
    </Grid>
    <Grid item xs={12} md={6} className={classes.root}>
      <Typography gutterBottom>Our template services can integrate into your existing infrastructure 
      and work immediately on existing data. <br/>
      As solution provider we empower you to leverage your data effectively and phase-out after the process is in place.
      </Typography>
     {/*  <Typography gutterBottom>We act as your partner to support your project success 24/7.</Typography>
      <Typography gutterBottom>We offer to host and maintain your resulting data science solutions for you.</Typography> */}
    </Grid>
  </Grid>

export default withStyles(styles)(HowItWorksTextColumns);