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
    margin: "5px",
    padding: "10px",
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

const PreConfigured = ({ classes }) => (
  <React.Fragment>
    <Grid
      container
      alignContent={"center"}
      alignItems={"center"}
      justify={"center"}
      style={{ marginBottom: "40px" }}
    >
      <Grid item>
        <SectionHeadline>
          Pre-configured Analytics & Machine Learning systems​
        </SectionHeadline>
      </Grid>

      <Grid
        item
        className={classes.background}
        style={{
          background: "#48509C",
          height: "470px",
          width: "260px",
          boxShadow: "0 0 4px 2px rgba(0,0,0,0.25)",
        }}
      >
        <img
          src={require("../../../public/static/images/04 Retail Solutions/02-solutions/innovation.png")}
          style={{ marginBottom: "0.1%" }}
        />
        <Typography
          variant={"h5"}
          style={{ color: "#ffffff" }}
          gutterBottom
          className={classes.subline}
        >
          <b>Complexity of adressing business-specifics</b> is often underestimated while 
          technological requirements are overestimated
        </Typography>
      </Grid>
      <Grid
        item
        className={classes.background}
        style={{
          background: "#ffffff",
          height: "470px",
          width: "260px",
          boxShadow: "0 0 4px 2px rgba(0,0,0,0.25)",
          /* background: "#ffffff",
          height: "450px",
          width: "250px",
          boxShadow: "7px 7px 4px 0px rgba(0,0,0,0.25)", */
        }}
      >
        <img
          src={require("../../../public/static/images/04 Retail Solutions/02-solutions/files_and_folder.png")}
          style={{ marginBottom: "0.1%" }}
        />
        <Typography variant={"h5"} gutterBottom className={classes.subline}>
          <b>Lack of understanding in business units</b> on how to utilize Advanced Analytics and Machine Learning
        </Typography>
      </Grid>
      <Grid
        item
        className={classes.background}
        style={{
          background: "#48509C",
          height: "470px",
          width: "260px",
          boxShadow: "0 0 4px 2px rgba(0,0,0,0.25)",
        }}
      >
        <img
          src={require("../../../public/static/images/04 Retail Solutions/02-solutions/data_visualization.png")}
          style={{ marginBottom: "0.1%" }}
        />
        <Typography
          variant={"h5"}
          style={{ color: "#ffffff" }}
          gutterBottom
          className={classes.subline}
        >
           <b>Access to experts</b> with the right set of competencies across different domains 
        </Typography>
      </Grid>
      <Grid
        item
        className={classes.background}
        style={{
          background: "#FFFFFF",
          height: "470px",
          width: "260px",
          boxShadow: "0 0 4px 2px rgba(0,0,0,0.25)",
        }}
      >
        <img
          src={require("../../../public/static/images/04 Retail Solutions/02-solutions/graphic_chart.png")}
          style={{ marginBottom: "0.1%" }}
        />
        <Typography variant={"h5"} gutterBottom className={classes.subline}>
             <b>Availability of data</b> at sufficient quality and quantity
        </Typography>
      </Grid>

      <button
        className="MuiButtonBase-root MuiButton-root 
        MuiButton-contained MuiButton-containedPrimary"
        type="button"
        style={{ marginTop: "55px" }}
      >
        <Link href="/finder">
          <span className="MuiButton-label">GET STARTED</span>
        </Link>
      </button>
    </Grid>
  </React.Fragment>
);

export default withStyles(styles)(PreConfigured);
