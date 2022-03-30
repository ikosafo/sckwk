import React from 'react'
import { Card, Grid, Typography, withStyles } from '@material-ui/core'
/* import TextField from '@material-ui/core/TextField' */
//import Newsletter from '../../components/Newsletter'
//import { newsletterSignup } from '../helpers/hubspot'
import Scalework from '../../components/ScaleWork'
import emailjs from 'emailjs-com'
import '../../../pages/css/newsletter.css'


const styles = theme => ({
  root: {
    textAlign:"left",
    padding: "5em 2em",
    [theme.breakpoints.down('sm')]: {
      textAlign:"center",
    }
  },
  alignRight:{
    textAlign:"left"
  },
  left:{
    maxWidth: 680,
    margin: "auto",
  },
  right:{
    maxWidth: 480,
    margin: "auto",
    color:"#000000",
    [theme.breakpoints.down('md')]: {
      marginTop: "2em",
    },
  }
});

function sendEmail(e) {
  //alert('test');
  e.preventDefault();
  emailjs.sendForm(
    "service_1sm3q57",
    "template_d7lxk3p",
    e.target,
    "Y1l9fMcN3PiV9PT0i").then(res=>{
      console.log(e);
    }).catch(err=>{
      console.log(err);
    });

}



const IndexNewsletter = ({classes}) =>
     

<Grid container spacing={0} alignContent={"center"} justify={"center"} alignItems={"center"} 
       className={classes.root} style={{marginTop:'-60px'}}>

      {/* <Grid item xs={12} md={12}>
          <Typography variant={"h3"} className={classes.left}>
            Subscribe to our newsletter
          </Typography>
      </Grid> */}

      <Grid item xs={12} md={12}>
         <Typography variant={"h5"} gutterBottom  
            className={classes.subline} 
            style={{color:"#48509C",textAlign:"center",color:"#ffffff",
            marginTop:"20px",fontFamily:"Montserrat"}}>
              Top-5 traps to look out when monitetizing your data <br/>
              a reality check by <Scalework/>
          </Typography>
      </Grid>
      
           
      {/* <Grid item xs={12} md={5} sm={12}>
        <TextField
                    label='Your Name *'
                    variant={"filled"}
                    fullWidth
                    autoComplete='fname'
                    style={{width:"400px",borderRadius:"30px"}}
                  />
      </Grid>
      <Grid item xs={12} md={5} sm={12}>
        <TextField
                    label='Your e-mail address *'
                    fullWidth
                    autoComplete='lname'
                    style={{width:"400px",borderRadius:"30px"}}
                    variant={"filled"}
                  />
      </Grid>
     
      <Grid item xs={12} md={2} sm={12}>
              <button type="button" className="newsletbtn" style={{background:"#48509C",width:"200px",height:"4em",
                      borderRadius:"2px !important"}}> 
                YES, I WANT THIS!
              </button>
      </Grid> 

       <FormControlLabel
            control={<Checkbox color="secondary" name="newsletterOptIn"/>}
            label="Please keep me up to date with regular news."
        />*/}

       
            {/* <Newsletter variant={"row"}/> */}

        
        <div className="card">

          <Grid container spacing={0} alignContent={"center"} justify={"center"} alignItems={"center"}>

              <Grid item xs={12} md={3} sm={12}>
                <div className="image">
                  <img src="/static/images/02 Company/03-join-us/Company-graphic-shadow.png" alt="img" />
                </div>
              </Grid>
              <Grid item xs={12} md={9} sm={12}>
                <div className="subscribe" style={{fontFamily:"Montserrat", margin:"40px"}}>
                  <h4 style={{fontSize:"18px",fontWeight:"500"}}>Subscribe to our newsletter</h4>
                  <form onSubmit={sendEmail}>
                    <input type="email" name="user-email" id="email" required
                    placeholder="Enter your email address" autoComplete="off" />
                    <button type="submit">Subscribe</button>
                  </form>
                </div>
              </Grid>

          </Grid>

             {/*  <Grid item xs={12} md={12} sm={12}>
                <div className="image">
                  <img src="/static/images/02 Company/03-join-us/Company-graphic-shadow.png" alt="img" />
                </div>
              </Grid>
              <Grid item xs={12} md={12} sm={12}>
                <div className="subscribe" style={{fontFamily:"Montserrat"}}>
                  <h2>Subscribe to our newsletter</h2>
                  <form>
                    <input type="email" name="email" id="email" 
                    placeholder="Enter your email address" autoComplete="off" />
                    <button type="button">Subscribe</button>
                  </form>
                </div>
              </Grid> */}
              
             </div>

     {/* <Grid item xs={12} md={6}>
        <Card  className={classes.right}>
          <NewsletterSignup variant={"row"}/>
        </Card>
      </Grid> */}
    </Grid>

export default withStyles(styles)(IndexNewsletter);