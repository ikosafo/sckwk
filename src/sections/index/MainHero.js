import React from 'react'
import { Grid,Typography, withStyles } from '@material-ui/core'
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
    fontFamily: "Montserrat",
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
  },
  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white'
  }
});

const MainHero = ({classes}) =>

  <div className={classes.container}>
    <div style={styles.content}>
           
    <Grid container direction={'row'}>
        <Grid item xs={12} sm={12} style={{textAlign:"left"}}>
            {/* <ScaleWork variant={"h1"} className={classes.head1}/> */}
        {/* <Typography variant={'h4'} className={classes.sub1} color={'primary'}>Building <b>custom analytics </b> 
        and <b>machine-learning solutions</b> for your daily 
        operations</Typography>
        <Typography variant={'h4'} className={classes.sub2} color={'primary'}>DATA-DRIVEN, BUT HUMAN-CENTERED.
        </Typography> */}
        <Typography variant={'h1'} className={classes.sub1} 
          style={{color:'#ffffff',fontWeight:'bold',marginTop:'-320px',fontSize:'40px',fontFamily:"Montserrat"}}>
            We apply Data Science to make your business more successful
        </Typography>
        <Typography variant={'h6'} className={classes.sub1} 
          style={{color:'#ffffff',marginTop:'25px',fontWeight:'300',fontFamily:"Montserrat"}}>
            Pre-configured Machine Learning templates with a proven record to thrive performance 
            in your industry are waiting for you
        </Typography>

        <a target={"_blank"} href={"/datawebinar"}>
            <button type="button"  style={{marginLeft:"-5px",marginTop:"50px"}} 
            className="webinarbtn"> 
              Learn how to <span style={{fontWeight:"bold"}}>get started</span>
            </button>
        </a>
        
{/* 
        <a href={"/finder"}>
          <button type="button" className="topgsbutton" style={{width:"270px",marginTop:'50px'}}> 
            Get started in <span style={{fontWeight:'600'}}> 3 simple steps</span>
          </button>
        </a> */}
        {/* <LinkButton href={"/finder"} variant={'contained'} color={"primary"} 
           style={{marginTop:'40px'}}>
          Get started in <span style={{fontWeight:'600',marginLeft:'4px'}}> 3 Simple Steps</span>
        </LinkButton> */}
        </Grid>
        
    </Grid>
    
    </div>
  </div>
  

export default withStyles(styles)(MainHero);