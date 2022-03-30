import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import ScaleWork from '../../components/ScaleWork'

const styles = theme => ({
    container: {
        height: "500px",
        backgroundImage: '/static/images/01 Home/01-header/SCALEWORK-Vid-Header-Static.png',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right",
        backgroundSize: "auto 100%",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
      },
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

const CompanyMainnHero = ({classes}) =>
  <div className={classes.container} style={{marginTop:"-150px"}}>
    <ScaleWork variant={"h1"} className={classes.head1}/>
      <Typography variant={'h4'} className={classes.sub1} color={'primary'}>
          Building <b>custom analytics </b> and <b>machine-learning solutions</b> for your daily operations
      </Typography>
  </div>

export default withStyles(styles)(CompanyMainnHero);