import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { PurpleLink } from '../../components/Link'

const styles = theme => ({
});

const NextSteps2 = ({classes}) =>
<Grid container direction={'row'} justify={'left'} alignItems={"left"}>
<Grid item xs={12} sm={5} ><Typography gutterBottom variant={"h1"} style={{fontFamily:"Montserrat"}}>Next Steps</Typography></Grid>
<Grid item xs={12} sm={7}>
  <Typography  style={{fontFamily:"Montserrat"}} variant={"h5"} gutterBottom>Read about our past <PurpleLink href={'/solutions#past-solutions'}>Industry Solutions</PurpleLink></Typography>
  {/* <Typography variant={"h5"} gutterBottom>See what our <PurpleLink href={'/solutions#services'}>Managed Services</PurpleLink> can do</Typography>*/}
   <Typography style={{fontFamily:"Montserrat"}} variant={"h5"} gutterBottom>Learn how you can get <PurpleLink href={'/webinar'}>More out of our data</PurpleLink></Typography>
   <Typography  style={{fontFamily:"Montserrat"}} variant={"h5"} gutterBottom>Start your  <PurpleLink target={"_blank"} href={'https://masterclass.scalework.com'}>Data journey with us</PurpleLink></Typography>
</Grid>
</Grid>

export default withStyles(styles)(NextSteps2);