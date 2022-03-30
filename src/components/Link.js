import React from 'react'
import NextLink from 'next/link'
import withStyles from '@material-ui/core/styles/withStyles'
import { Button } from '@material-ui/core'

const styles = theme => ({
  "purple": {
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightBold,
    textDecoration: 'none',
    display: 'inline-block',
    "&:after": {
      content: "''",
      display: 'block',
      height: 3,
      width: 0,
      background: 'transparent',
      transition: 'width .5s ease, background-color .5s ease'
    },
    '&:hover': {
      textDecoration: 'none'
    },
    '&:hover:after': {
      width: '100%',
      background: theme.palette.primary.main
    }
  },
  "navigation": {
    color: "#000",
    fontWeight: 500,
    textDecoration: 'none',
    marginRight: "2em",
    display: 'inline-block',
    "&:after": {
      content: "''",
      display: 'block',
      height: 3,
      width: 0,
      background: 'transparent',
      transition: 'width .5s ease, background-color .5s ease'
    },
    '&:hover': {
      textDecoration: 'none'
    },
    '&:hover:after': {
      width: '100%',
      background: theme.palette.primary.main
    }
  }
});
export const Link = withStyles(styles)(({name,classes,href, ...rest}) => <NextLink href={href || ''}><a {...rest}/></NextLink>);

export const NavigationLink = withStyles(styles)(({name,classes,href, ...rest}) => <NextLink href={href}><a className={classes.navigation} {...rest}/></NextLink>);
export const PurpleLink = withStyles(styles)(({name,classes,href, ...rest}) => <NextLink href={href}><a className={classes.purple} {...rest}/></NextLink>);
export const LinkButton = ({href,...props}) => <NextLink href={href}><Button {...props}/></NextLink>