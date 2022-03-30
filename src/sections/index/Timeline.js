import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { SectionHeadline } from '../../components/Components'
import ScaleWork from '../../components/ScaleWork'
import { PurpleLink } from '../../components/Link'

const styles = theme => ({
  item: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top left",
    "&:nth-child(2n+1)": {
      backgroundPosition: "top right",
      textAlign: 'right'
    },
    backgroundSize: " auto 100%",
    padding: "2em",
    textAlign: 'left',
    [theme.breakpoints.up('md')]: {
      backgroundPosition: "30% top",
      minHeight:400,
      "&:nth-child(2n+1)": {
        marginTop: theme.spacing(10),
        textAlign: 'left'
      },
      "&:nth-child(2n)": {
        borderRight: "2px solid #d8d8d8",
        textAlign: 'right'
      },
      "&:nth-child(3)": {
        //marginTop: theme.spacing.unit * 15,
      },
      "&:nth-child(2n+4)": {
        //marginTop: -theme.spacing.unit * 15,
      },
    },
    //
  },
  divider: {
    height:2,
    backgroundColor:theme.palette.primary.main,
    margin: "10px 0"
  },
  content: {
    textAlign:"left"
  }

});

const Timeline = ({classes}) =>
  <Grid container alignItems={"flex-start"}>
    <Grid xs={12} item><SectionHeadline>Quick introduction to SCALEWORK:</SectionHeadline></Grid>
    <Item headline={1}>Define a fitting solution via our <PurpleLink href="/finder">Solution finder</PurpleLink>, chose from our <PurpleLink href="/solutions#services">Services</PurpleLink> or get inspired by our <PurpleLink href="/solutions#past-solutions">Past solutions</PurpleLink>.</Item>
    <Item headline={2}>We match and suggest the best experts from our vetted and profiled experts pool to your requirements.</Item>
    <Item headline={3}>You select an expert and agree to a simple and attractive daily pricing rate between you and the expert.</Item>
    <Item headline={4}>You and the expert start collaborating in our encrypted, secure remote environment.</Item>
    <Item headline={5}><React.Fragment>The expert delivers your solution and <ScaleWork/> acts as your trusted partner and settles all legal, infrastructure and support topics throughout.</React.Fragment></Item>
    <Item headline={6}>Done. You just launched a new Data Science application that drives your bottom-line profitability.</Item>
  </Grid>


const ItemRaw = ({children, classes, headline}) =>
  <Grid md={6} xs={12} item className={classes.item} style={{backgroundImage:`url('/static/images/01 Home/04-intro-to-scalework/steps/step-${headline}.svg')`}}>
    <Typography color={"primary"} variant={"h1"}>{headline}</Typography>
    <Divider className={classes.divider}/>
    <Typography className={classes.content}>{children}</Typography>
  </Grid>

const Item = withStyles(styles)(ItemRaw)

export default withStyles(styles)(Timeline);