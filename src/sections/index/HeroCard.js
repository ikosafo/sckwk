import React from 'react'
import { Grid, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMoneyBill, faUsers } from "@fortawesome/free-solid-svg-icons";
//import ScaleWork from '../../components/ScaleWork'
//import { LinkButton } from '../../components/Link'

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

const HeroCard = ({classes}) =>

    
    <Grid container spacing={7}>
 
        <Grid item sm={12} md={4}>
          <div className="serviceBox">
            <div className="service-icon">
              <span><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></span>
            </div>
            <h3 className="title">Sell more & delight your customers</h3>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className="serviceBox">
            <div className="service-icon">
              <span><FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon></span>
            </div>
            <h3 className="title">Simplify processes & save costs</h3>
          </div>
        </Grid>
        <Grid item sm={12} md={4}>
          <div className="serviceBox">
            <div className="service-icon">
              <span><FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon></span>
            </div>
            <h3 className="title">Make faster & evidence-based decisions</h3>
          </div>
        </Grid>

    </Grid>


export default withStyles(styles)(HeroCard);