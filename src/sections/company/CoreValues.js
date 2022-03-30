import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import ScaleWork from '../../components/ScaleWork'
import { SectionHeadline } from '../../components/Components'

const styles = theme => ({
  root:{
    textAlign:"left"
  }
});

const CoreValues = ({classes}) =>
  <Grid container spacing={2} alignContent={"flex-start"} justify={"center"} alignItems={"flex-start"}>
    <Grid xs={12} item>
      <SectionHeadline>We love impact, transparency and simplicity.</SectionHeadline>
    </Grid>
    <Grid item sm={1} xs={false}/>
    <Grid item sm={10} xs={12} className={classes.root}>
      <Typography gutterBottom>
        Throughout our careers, we have helped many companies scale their data-driven organizations, but we 
        could also see limitless companies struggle to create sustainable impact from data.
      </Typography>
      <Typography gutterBottom>
        With <ScaleWork/>, we want to offer all companies the chance to realize the power of data, 
        irrespective of their internal level of digitization or analytics capability. We want to make 
        data impact as simple and cost-effective as possible.
      </Typography>
    </Grid>
    <Grid item sm={1} xs={false}/>
  </Grid>

export default withStyles(styles)(CoreValues);