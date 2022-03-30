import React from 'react'
import { Grid,Typography, withStyles } from '@material-ui/core'
//import ScaleWork from '../../components/ScaleWork'
import { LinkButton } from '../../components/Link'

const styles = theme => ({
  container: {
    height: "780px",
    textAlign: 'left',
    //paddingLeft: '7vw',
    display: "flex",
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'flex-start',
    [theme.breakpoints.up('md')]: {
      //marginLeft: '7vw'
    }
  },

  head1: {
    //fontSize: 72,
    letterSpacing: -2,
    fontFamily: "IBM Plex Sans",
    fontWeight: 300,
    color: '#000',
    maxWidth:720,
    textTransform: 'uppercase'
  },

  sub1: {
    letterSpacing: 0.25,
    //fontSize: 31.1,
    fontFamily: theme.typography.fontFamily,
    marginTop: 10,
    maxWidth:720
  },
  sub2: {
    letterSpacing: 0.25,
    //fontSize: 31.1,
    fontFamily: theme.typography.fontFamilySecondary,
    marginTop: 30,
    maxWidth:720
  }
});

const SolutionMainHero = ({classes}) =>
  <div className={classes.container}>

    <Grid container direction={'row'} style={{marginTop:'-200px',}}>
        <Grid item xs={12} sm={7} style={{textAlign:"left"}}>
        <Typography variant={'h1'} className={classes.sub1} 
          style={{fontWeight:'bold',fontSize:'40px'}}>
          Pre-configured performance templates tailored to your business
        </Typography>
        <Typography variant={'h6'} className={classes.sub1} 
          style={{fontWeight:'300',fontStyle:'italic'}}>
          Our template library covers the most relevant industry use cases and allows 
          fast & effective deployment.
        </Typography>
        <a href={"/contact"}>
          <button type="button" className="topgsbutton" style={{width:"400px",marginTop:'40px'}}> 
              Contact us today and learn how to get started!
          </button>
        </a>
        {/* <LinkButton href={"/contact"} variant={'contained'} color={"primary"} 
           style={{marginTop:'40px',textTransform:'Capitalize'}}>
          Contact Us today and learn how to get started!
        </LinkButton> */}
        </Grid>
        <Grid item xs={12} sm={5}>
        <img src="/static/images/05 Solutions/02-hero/solution-graphic.png" className="solutionhereimg"
         style={{width:"95%",marginTop:"-50px"}}/>
    </Grid>
    </Grid>
    
  </div>

export default withStyles(styles)(SolutionMainHero);