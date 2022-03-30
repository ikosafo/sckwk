import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { PurpleLink } from '../../components/Link'
import { SectionHeadline } from "../../components/Components";

const styles = theme => ({
});

const Performancestat = ({classes}) =>
  <Grid container direction={'row'} spacing={0} alignContent={"center"} justify={"center"} alignItems={"center"} >
    <SectionHeadline variant={"h3"} 
    style={{fontSize:"30px",fontFamily:"Montserrat"}}>Imagine what ML-based Performance 
    systems can do for you</SectionHeadline>
    <Grid item xs={12} sm={7} >
    <img src={"/static/images/01 Home/07-next-steps/img.png"} />
    </Grid>
    <Grid item xs={12} sm={5}>
      <Typography variant={"h5"} gutterBottom>
          <PurpleLink href={'#'} style={{fontSize:"40px",marginRight:"3px",fontFamily:"Montserrat"}}>79% </PurpleLink>
               <b> of our installations</b><br/> go live with first results after 4 -6 weeks
    </Typography>
    <Typography variant={"h5"} gutterBottom>
          <PurpleLink href={'#'} style={{fontSize:"40px",marginRight:"3px",fontFamily:"Montserrat"}}>36% </PurpleLink>
              <b> improved performance</b><br/> is achieved by our customers on average
    </Typography>
    <Typography variant={"h5"} gutterBottom>
          <PurpleLink href={'#'} style={{fontSize:"40px",marginRight:"3px",fontFamily:"Montserrat"}}>79% </PurpleLink>
               <b> of our customers realize positive return</b> <br/> on investment from month 3 after go-live
    </Typography>
      </Grid>
  </Grid>

export default withStyles(styles)(Performancestat);