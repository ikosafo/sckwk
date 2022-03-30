import React from 'react'
import { Grid, withStyles } from '@material-ui/core'

const styles = theme => ({
  root:{
    [theme.breakpoints.up('md')]: {
      marginTop: "-15em",
    },
  },
  image: {
    width: "100%"
  }
});

const TechnicalDescriptionImage = ({classes}) =>
  <Grid container justify={"center"} className={classes.root}>
    <Grid item>
      <img src="/static/images/06 How it works/06-technical-description/Diagram-Light.png" className={classes.image}/>
    </Grid>
  </Grid>

export default withStyles(styles)(TechnicalDescriptionImage);