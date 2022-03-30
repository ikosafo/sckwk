import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import ScaleWork from '../../components/ScaleWork'
import { SectionHeadline } from '../../components/Components'

const styles = theme => ({
  root:{
    textAlign:"left"
  }
});

const StepByStep = ({classes}) =>
  <Grid container spacing={2} alignContent={"flex-start"} justify={"center"} alignItems={"flex-start"}>
    <Grid xs={12} item>
      <SectionHeadline>Step by step</SectionHeadline>
    </Grid>
    <Grid item sm={1} xs={false}/>
    <Grid item sm={10} xs={12} className={classes.root}>
      <Typography gutterBottom>
       <SectionHeadline style={{fontSize:"30px"}}> <ScaleWork/> is geared towards a speedy process and 
       impactful results.</SectionHeadline>
      </Typography>
      <Typography gutterBottom>
        This is how it works:
      </Typography>
    </Grid>
    <Grid item sm={1} xs={false}/>
  </Grid>

export default withStyles(styles)(StepByStep);