import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import ScaleWork from '../../components/ScaleWork'

const styles = theme => ({
  container: {
    height: "480px",
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

const LandingHero = ({classes}) =>
  <div className={classes.container}>
      <div className="row">
          <div className="col-md-4">
          <ScaleWork variant={"h1"} className={classes.head1}/>
    <Typography variant={'h4'} className={classes.sub1} color={'primary'}>Building <b>custom analytics </b> and <b>machine-learning solutions</b> for your daily 
    operations</Typography>
    <Typography variant={'h4'} className={classes.sub2} color={'primary'}>DATA-DRIVEN, BUT HUMAN-CENTERED.
    </Typography>
          </div>
          <div className="col-md-8">
          <img src="/static/images/02 Company/01-hero/company-graphic.png"/>  
          </div>
      </div>
    
   
  </div>

export default withStyles(styles)(LandingHero);