import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";
import ScaleWork from "../../components/ScaleWork";
import { SectionHeadline } from "../../components/Components";

const styles = (theme) => ({
  root: {
    textAlign: "left",
  },
});

const CoreIdeas = ({ classes }) => (
  <Grid
    container
    spacing={2}
    alignContent={"flex-start"}
    justify={"center"}
    alignItems={"flex-start"}
  >
    <Grid xs={12} item>
      <SectionHeadline>
        We love impact, transparency and simplicity.
      </SectionHeadline>
    </Grid>
    <Grid item xs={12} md={6} className={classes.root}>
      <Typography gutterBottom>
        <b>Throughout our careers</b>, we have helped many companies scale their
        data-driven organizations, but we could also see limitless companies
        struggle to create sustainable impact from data. This has several
        reasons: Inexperience to anticipate potential impactful data science
        solutions; inability to translate project ideas into requirements;
        limited access to data experts and overly expensive and frustrating
        service providers in the market – just to name a few.
      </Typography>
    </Grid>
    <Grid item xs={12} md={6} className={classes.root}>
      <Typography gutterBottom>
        With <ScaleWork />, we want to offer all companies the chance to realize
        the power of data, irrespective of their internal level of digitization
        or analytics capability. We want to make data impact as simple and
        cost-effective as possible.
      </Typography>

      <Typography gutterBottom>
        Welcome to <ScaleWork />.
      </Typography>
    </Grid>
  </Grid>
);

export default withStyles(styles)(CoreIdeas);
