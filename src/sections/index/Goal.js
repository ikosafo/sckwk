import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { SectionHeadline } from "../../components/Components";
import { Link } from "../../components/Link";

const styles = (theme) => ({
  root: {
    textAlign: "left",
    "& h5": {
      marginTop: "1em",
      marginBottom: 5,
      fontWeight: theme.typography.fontWeightBold,
    },
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(0),
  },
  background: {
    margin: "14px",
    padding: "7px",
    /*background: "url('/static/images/01 Home/05-why-scale-work/5000-experts.png')",*/
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center right",
    backgroundSize: " 80% auto",
    overflow: "",
    "& img": {
      maxWidth: "100%",
      marginBottom: -100,
      [theme.breakpoints.up("md")]: {
        marginBottom: 0,
      },
    },
  },
  expertsContainer: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "left",
      paddingTop: 0,
    },
  },
  subline: {
    marginTop: "10%",
    fontSize: "22px",
    [theme.breakpoints.up("md")]: {
      marginLeft: "0px",
    },
    maxWidth: 470,
    color: "rgba(0, 0, 0, 0.6)",
    "& b": {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
});


const Goal = ({ classes }) => (
  <React.Fragment>
    <Grid
      container
      alignContent={"center"}
      alignItems={"center"}
      justify={"center"}
      style={{ marginBottom: "40px",marginTop:"30px",paddingBottom:"100px",margin:"0 auto" }}
    >

      <Grid
        item
        className={classes.background}
        style={{
          border: "1px solid #BFBFBF",
          boxShadow: "4px 4px 3px #aaaaaa",
          background: "#ffffff",
          height: "410px",
          width: "240px",
          boxShadow: "0 0 0.6px 0 rgba(0,0,0,0.25)",
          borderRadius:"13px",
          cursor:"pointer"
        }}
      >
        <img
          src="/static/images/08 Finder/22.png"
          style={{ marginBottom: "0.1%",width:"60%" }}
        />
        <Typography
          variant={"h5"}
          style={{ color: "#000",fontSize:"14px",textAlign:"left",marginLeft:"5px" }}
          gutterBottom
          className={classes.subline}
        >
          <h2>Explore</h2>
          <p>Learn about new new valuable data applications for your company.​</p>
          <p style={{color: "#777",fontSize:"12px"}}>
            Choose this option, if you want to find your first opportunities to drive your business
            effectiveness with data
          </p>
        </Typography>
      </Grid>  
    
      <Grid
        item
        className={classes.background}
        style={{
          border: "1px solid #BFBFBF",
          boxShadow: "4px 4px 3px #aaaaaa",
          background: "#ffffff",
          height: "410px",
          width: "240px",
          boxShadow: "0 0 0.6px 0 rgba(0,0,0,0.25)",
          borderRadius:"13px"
        }}
      >
        <img
          src={require("/static/images/08 Finder/13.png")}
          style={{ marginBottom: "0.1%",width:"60%" }}
        />
        <Typography
          variant={"h5"}
          style={{ color: "#000",fontSize:"14px",textAlign:"left",marginLeft:"5px" }}
          gutterBottom
          className={classes.subline}
        >
          <h2>Demonstrate</h2>
          <p>Build prototypes of data applications to showcase business value.​</p>
          <p style={{color: "#777",fontSize:"12px"}}>
            Choose this option, if you already have a data application in mind and want to build a 
            a prototype to approximate the business value.
          </p>
        </Typography>
      </Grid>  
      <Grid
        item
        className={classes.background}
        style={{
          border: "1px solid #BFBFBF",
          boxShadow: "4px 4px 3px #aaaaaa",
          background: "#ffffff",
          height: "410px",
          width: "240px",
          boxShadow: "0 0 0.6px 0 rgba(0,0,0,0.25)",
          borderRadius:"13px"
        }}
      >
        <img
          src={require("/static/images/08 Finder/16.png")}
          style={{ marginBottom: "0.1%",width:"60%" }}
        />
        <Typography
          variant={"h5"}
          style={{ color: "#000",fontSize:"14px",textAlign:"left",marginLeft:"5px" }}
          gutterBottom
          className={classes.subline}
        >
          <h2>Scale</h2>
          <p>Build,update and integrate your data application into your daily operations.​</p>
          <p style={{color: "#777",fontSize:"13px"}}>
            Choose this option, if you want to build a robust and integrated application that constantly helps 
            optimize your business decisions.
          </p>
        </Typography>
      </Grid>  
      <Grid
        item
        className={classes.background}
        style={{
          border: "1px solid #BFBFBF",
          boxShadow: "4px 4px 3px #aaaaaa",
          background: "#ffffff",
          height: "410px",
          width: "240px",
          boxShadow: "0 0 0.6px 0 rgba(0,0,0,0.25)",
          borderRadius:"13px"
        }}
      >
        <img
          src={require("/static/images/08 Finder/03.png")}
          style={{ marginBottom: "0.1%",width:"60%" }}
        />
        <Typography
          variant={"h5"}
          style={{ color: "#000",fontSize:"14px",textAlign:"left",marginLeft:"5px" }}
          gutterBottom
          className={classes.subline}
        >
          <h2>Source</h2>
          <p>Get tailored suggestions from the best data exports around the world to work on your challenges.​</p>
          <p style={{color: "#777",fontSize:"13px"}}>
            Choose this option if you already your skill requirements and want to source additional on-demand data 
            exports
          </p>
        </Typography>
      </Grid>  
      
    </Grid>
  </React.Fragment>
);

export default withStyles(styles)(Goal);
