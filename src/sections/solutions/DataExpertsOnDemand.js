import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import ScaleWork from '../../components/ScaleWork'
import { SectionHeadline } from '../../components/Components'
import { LinkButton } from '../../components/Link'

const styles = theme => ({
  root:{
    textAlign:"left",
    backgroundColor:"rgba(33,33,33,0.8)",
    borderRadius: 2
  }
});

const DataExpertsOnDemand = ({classes}) =>
  <Grid container spacing={4} alignContent={"flex-start"} justify={"center"} alignItems={"flex-start"}>
    <Grid xs={12} item>
      <SectionHeadline>Data Experts on Demand</SectionHeadline>
    </Grid>
    <Grid item sm={2} xs={false}/>
    <Grid item sm={8} xs={12} className={classes.root}>
      <Typography gutterBottom>
        Our freelancer data experts pool comprises the best data experts from around the world. We performed a thorough interviewing, testing and profiling to select the top 1% of profiles.
      </Typography>
      <Typography gutterBottom>
        If you are looking for a data scientist or data expert to help you realize your project or support your team, <ScaleWork/> also offers straight forward on-demand remote data expert work. Rates for our leading remote experts start at EUR 300 per day.
      </Typography>
      <Typography gutterBottom>
        <ScaleWork/> acts as your trusted partner to ensure you and the data experts work together successfully. We offer our secure data infrastructure for your collaboration and solution delivery to ensure your data is never downloaded or duplicated during or after your project.
      </Typography>
      <LinkButton variant={"contained"} color={"primary"} href={"/finder"}>Request now</LinkButton>
    </Grid>
    <Grid item sm={2} xs={false}/>
    <Grid item sm={2} xs={false}/>
    <Grid item sm={8} xs={12} className={classes.root}>
      <Typography variant={"h6"}>Our profiles include:</Typography>
      <Typography component={'ul'} gutterBottom>
        <li>Data scientists</li>
        <li>Data engineers</li>
        <li>Machine learning engineers</li>
        <li>Business intelligence analysts</li>
      </Typography>
      <Typography>In order to get more information also see our summary section on our data experts.</Typography>
    </Grid>
    <Grid item sm={2} xs={false}/>
  </Grid>

export default withStyles(styles)(DataExpertsOnDemand);