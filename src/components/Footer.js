import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Hidden,
  Typography,
  withStyles,
} from "@material-ui/core";
import ScaleWork from "./ScaleWork";
import NewsletterSignup from "./NewsletterSignup";
import { Link } from "./Link";

const footers = require("../../public/static/locales/en/footermenu.json");

const styles = (theme) => ({
  root: {
    a: {
      color: "inherit",
      textDecoration: "none",
    },
    "a:hover": {
      color: "inherit",
      textDecoration: "underline",
    },
  },
  footer1: {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
    padding: "0 5vw",
  },
  footer2: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    padding: "0 5vw",
  },
  inner: {
    margin: "auto",
    padding: "5em .1em 5em .1em",
    maxWidth: 1150,
  },
  headline: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left",
    },
  },
  grid: {
    textAlign: "left",
  },
  newsletterCard: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
  newsletterHeaderRoot: {
    backgroundColor: theme.palette.secondary.light,
  },
  newsletterHeaderTitle: {
    color: theme.palette.secondary.contrastText,
    fontSize: 15,
    fontWeight: theme.typography.fontWeightBold,
  },
});

function Footer({ classes }) {
  return (
    <footer className={classes.root}>
      {/* <div className={classes.footer1}>
        <div className={classes.inner}>

          <Grid container className={classes.grid}>
            <Grid item xs={12} className={classes.headline}>
              <Typography gutterBottom><ScaleWork/> is proudly supported by <b>Oxford</b> Foundry and <b>Wayra Telefonica</b></Typography>
            </Grid>
            <Grid item xs={false} md={1}/>
            <Grid item xs={12} md={3}>
              <Typography variant={"body2"} gutterBottom>Follow us on linkedin | Contact us</Typography>
              <Hidden smDown>
                <Card className={classes.newsletterCard}>
                  <CardHeader classes={{root: classes.newsletterHeaderRoot, title:classes.newsletterHeaderTitle }} title={'Sign-up for our newsletter'}></CardHeader>
                  <CardContent color={"primary"}>
                    <NewsletterSignup/>
                  </CardContent>
                </Card>
              </Hidden>
              <Hidden mdUp>
                <NewsletterSignup/>
                <br/><br/><br/>
              </Hidden>
            </Grid>
            <Grid item xs={2}/>
            <Grid item xs={12} md={4}>
              <Grid container className={classes.grid}>
                <Grid item xs={12}>
                  <Typography variant={"body2"} gutterBottom>
                    Find us in our office in one of the global tech hubs in Oxford 🇬🇧 and Munich 🇩🇪
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant={"body2"}>
                    <ScaleWork/><br/>
                    @ Oxford Foundry<br/>
                    3-5 Hythe Bridge St. Oxford<br/>
                    OX1 2EW,<br/>
                    UK
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant={"body2"}>
                    <ScaleWork/><br/>
                    @ Wayra Telefonica <br/>
                    Kaufingerstr. 15<br/>
                    80331<br/>
                    Munich, Germany
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}/>
          </Grid>
        </div>
      </div> */}

    {/*   <Hidden smDown> */}
        <div className={classes.footer2}>
          <div className={classes.inner}>
            {
              <Grid container spacing={4} className={classes.grid}>
                {footers.map((footer) => (
                  <Grid item xs={6} md={4} key={footer.title}>
                    <Typography variant={"h6"}>
                      <Link href={footer.slug || "#"}>{footer.title}</Link>
                    </Typography>
                    {footer.description.map((item, i) => (
                      <Typography key={i} variant={"body2"}>
                        <Link href={footer.links[i] || "#"}>{item}</Link>
                      </Typography>
                    ))}
                  </Grid>
                ))}
              </Grid>
            }
          </div>
        </div>
     {/*  </Hidden> */}
      <div
        className="footer"
        style={{
          background: "#DC255D",
          textAlign: "center",
          padding: "3px",
          color: "white",
        }}
      >
        <p>2022 &copy; SCALEWORK</p>
      </div>
    </footer>
  );
}

export default withStyles(styles)(Footer);
