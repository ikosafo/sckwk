import React from 'react'
import { Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  font: {
    fontFamily: theme.typography.ibm,
    fontWeight: theme.typography.fontWeightLight
  }
});

const ScaleWork = ({classes, variant, ...restProps}) => {
  return (

    <Typography className={classes.font} component={"span"} variant={variant || "inherit"} {...restProps}><b>SCALE</b>WORK</Typography>
  )
}

export default withStyles(styles)(ScaleWork);