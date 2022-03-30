import React from "react";
import { Grid, Hidden, withStyles } from "@material-ui/core";
import { LinkButton } from "../../components/Link";

const styles = (theme) => ({
  root: {
    "& img": {
      display: "block",
      margin: "auto",
    },
  },
});

const Contact = ({ classes }) => (
  <Grid
    container
    spacing={2}
    alignContent={"center"}
    justify={"center"}
    alignItems={"center"}
    className={classes.root}
  >
    <Hidden smUp>
      <Grid item xs={3}>
        <img src={"/static/images/01 Home/07-next-steps/message.svg"} />
      </Grid>
      <Grid item xs={9}>
        <LinkButton
          variant={"contained"}
          color={"primary"}
          href={"/company#contact"}
        >
          Get in touch
        </LinkButton>
      </Grid>
      <Grid item xs={3}>
        <img src={"/static/images/01 Home/07-next-steps/call.svg"} />
      </Grid>
      <Grid item xs={9}>
        <LinkButton
          variant={"contained"}
          color={"primary"}
          href={"/company#contact"}
        >
          Request a call
        </LinkButton>
      </Grid>
      <Grid item xs={3}>
        <img src={"/static/images/01 Home/07-next-steps/email.svg"} />
      </Grid>
      <Grid item xs={9}>
        <LinkButton
          variant={"contained"}
          color={"primary"}
          href={"/company#contact"}
        >
          <a href="mailto:engage@scalework.com">Email us</a>
        </LinkButton>
      </Grid>
    </Hidden>
    <Hidden xsDown>
      <Grid item xs={4}>
        <img src={"/static/images/01 Home/07-next-steps/message.svg"} />
      </Grid>
      <Grid item xs={4}>
        <img src={"/static/images/01 Home/07-next-steps/call.svg"} />
      </Grid>
      <Grid item xs={4}>
        <img src={"/static/images/01 Home/07-next-steps/email.svg"} />
      </Grid>
      <Grid item xs={4}>
        <LinkButton
          variant={"contained"}
          color={"primary"}
          href={"/company#contact"}
        >
          Get in touch
        </LinkButton>
      </Grid>
      <Grid item xs={4}>
        <LinkButton
          variant={"contained"}
          color={"primary"}
          href={"/company#contact"}
        >
          Request a call
        </LinkButton>
      </Grid>
      <Grid item xs={4}>
        <LinkButton
          variant={"contained"}
          color={"primary"}
          href={"mailto:engage@scalework.com"}
        >
          <a href="mailto:engage@scalework.com">Email us</a>
        </LinkButton>
      </Grid>
    </Hidden>
  </Grid>
);

export default withStyles(styles)(Contact);
