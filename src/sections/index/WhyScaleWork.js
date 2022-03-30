import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import { SectionHeadline } from "../../components/Components";

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
    margin: "20px auto",
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

const WhyScaleWork = ({ classes }) => (
  <React.Fragment>
    <Grid
      container
      spacing={4}
      alignContent={"center"}
      alignItems={"center"}
      justify={"center"}
    >
      <Grid item xs={12}>
        <SectionHeadline>
          Why SCALEWORK?
        </SectionHeadline>
      </Grid>

      <Grid item xs={12} md={6} className={classes.background}>
        <img
          src="/static/images/01 Home/05-why-scale-work/5000-experts.png"
        />
      </Grid>
      <Grid item xs={12} md={6} className={classes.expertsContainer}>
        <Typography variant={"h3"} color={"secondary"}>
          The Power of AI
        </Typography>
        <Typography variant={"h5"} gutterBottom className={classes.subline}>
          Better insights through application of data science – fast, ​
          measurable and highly effective.
        </Typography>
      </Grid>
    </Grid>
    <Grid
      container
      spacing={4}
      alignContent={"center"}
      alignItems={"baseline"}
      className={classes.root}
    >
      <Grid item md={3} xs={6}>
        <img
          src={"/static/images/01 Home/05-why-scale-work/new/n1.png"}
          style={{ width: "35%" }}
        />
        <Typography color={"secondary"} variant={"h5"}>
          Fast
        </Typography>
        <Typography>
          79% of our installations go-live and produce results within the first
          <br />
          4-6 weeks.
        </Typography>
      </Grid>
      <Grid item md={3} xs={6} className={classes.items}>
        <img
          src={"/static/images/01 Home/05-why-scale-work/new/n2.png"}
          style={{ width: "35%" }}
        />
        <Typography color={"secondary"} variant={"h5"}>
          Highly effective
        </Typography>
        <Typography>
          90% of our Customer realize a positive Return on Invest after 3 month
          from go-live.
        </Typography>
      </Grid>
      <Grid item md={3} xs={6}>
        <img
          src={"/static/images/01 Home/05-why-scale-work/new/n3.png"}
          style={{ width: "35%" }}
        />
        <Typography color={"secondary"} variant={"h5"}>
          Measurable
        </Typography>
        <Typography>
          36% performance improvement on average per deployed installation.
        </Typography>
      </Grid>
      <Grid item md={3} xs={6}>
        <img
          src={"/static/images/01 Home/05-why-scale-work/new/n4.png"}
          style={{ width: "35%" }}
        />
        <Typography color={"secondary"} variant={"h5"}>
          Secure
        </Typography>
        <Typography>
          You own your data and we anonymize everything we are not supposed to
          see prior to injecting on our secured environment.
        </Typography>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default withStyles(styles)(WhyScaleWork);
