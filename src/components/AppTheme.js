import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  "@global": {
    html: {
      scrollBehavior: 'smooth'
    },
    main: {
      overflow:"hidden"
    },
    "a": {
      color: "inherit",
      textDecoration: "none"
    },
    "a:hover": {
      color: "inherit"
    }
  }
});

const AppTheme = ({children}) => <React.Fragment/>

export default withStyles(styles)(AppTheme);