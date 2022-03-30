import React from 'react'
import { Grid, withStyles } from '@material-ui/core'
import { LinkButton } from '../../components/Link'

const styles = theme => ({
});

const NextSteps = ({classes}) =>
  <Grid container spacing={2} style={{marginTop:-90}}>
    <Grid item xs={12} sm={4}><LinkButton href={"/finder"} fullWidth variant={'contained'} color={"primary"}>Get started now</LinkButton></Grid>
    <Grid item xs={12} sm={4}><LinkButton href={"/how-it-works"} fullWidth variant={'contained'} color={"primary"}>How it works</LinkButton></Grid>
    <Grid item xs={12} sm={4}><LinkButton href={"/finder"} fullWidth variant={'contained'} color={"primary"}>Get a quote</LinkButton></Grid>
  </Grid>

export default withStyles(styles)(NextSteps);