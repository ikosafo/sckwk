import React from 'react'
import { Grid, Typography,withStyles } from '@material-ui/core'
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

const SolutionHeroCard = ({classes}) =>

<>
    <Grid container spacing={2} style={{marginTop:'-12%'}}>
        <Grid item xs={12} sm={4}>
            <button type="button" className="herocardbutton">
                Fast go-live for measurable results
            </button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <button type="button" className="herocardbutton">
                Customizable to company specifics
          </button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <button type="button" className="herocardbutton">
              High security & you own your data
          </button>
        </Grid>
    </Grid>

    <Grid container spacing={12} alignContent={"center"} justify="space-evenly" style={{marginTop:"5%"}}>
      {/* <SectionHeadline>The Challenge We Solve</SectionHeadline> */}
      <Grid item xs={12}>
            <Typography variant={"h5"} gutterBottom className={classes.subline} style={{color:"#48509C"}}>
            <b>Why is it so hard to leverage machine learning for your business?</b>
          </Typography>
      </Grid>
    </Grid>
    <Grid container>  
        <Grid item xs={12} sm={6}>
              <img src={"/static/images/05 Solutions/03-data-experts/data-experts.png"} 
              style={{width:"85%"}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography style={{textAlign:"left"}}>
                <p>
                  Complexity of adressing business-specifics is often underestimated 
                  while technological requirements are overestimated
                </p>
            </Typography>
            <Typography style={{textAlign:"left"}}>
                <p>
                  Lack of understanding in business units on how to utilize Advanced 
                  Analytics and Machine Learning
                </p>
            </Typography>
            <Typography style={{textAlign:"left"}}>
                <p>
                  Access to experts with the right set of competencies across different domains 
                </p>
            </Typography>
            <Typography style={{textAlign:"left"}}>
                <p>
                  Availability of data at sufficient quality and quantity
                </p>
            </Typography>
        </Grid> 
    </Grid>

</>

  

export default withStyles(styles)(SolutionHeroCard);