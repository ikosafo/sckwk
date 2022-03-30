import React from 'react'
import { Card, Grid, Typography, withStyles } from '@material-ui/core'
import NewsletterSignup from '../../components/NewsletterSignup'

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

const Newsletter = ({classes}) =>
    <Grid container spacing={0} alignContent={"center"} justify={"center"} alignItems={"center"} className={classes.root}>
      <Grid item xs={12} md={6}>
        <Typography variant={"h3"} className={classes.left}>
          Subscribe to our newsletter
        </Typography>
        <Typography className={classes.left}>
          Sign-up to our newsletter to stay up to date about inspiring past project learnings, or new product offerings.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card  className={classes.right}>
          <NewsletterSignup variant={"row"}/>
        </Card>
      </Grid>
    </Grid>

export default withStyles(styles)(Newsletter);