import React from 'react'
import { Divider, Grid, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
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

const StepByStep2 = ({classes}) =>
  <Grid container alignItems={"flex-start"} style={{marginTop:"-70px"}}>
    <Grid item xs={12}></Grid>
    <Item headline={1}><React.Fragment>Tell us your business requirements via our 4-click 
      <PurpleLink href="/finder">Solution finder</PurpleLink> and make an appointment with one of our 
      <PurpleLink href="/finder"> data experts</PurpleLink>.</React.Fragment></Item>
    <Item headline={2}>Get immediate suggestions from a data expert on solution 
    design and book a 1-day workshop.</Item>
    <Item headline={3}>Receive ideal set-up and roadmap on how to improve decision-making in 
    the next few days through <ScaleWork/> templates.</Item>
    <Item headline={4}>Receive your solution or get it hosted and maintained by <ScaleWork/>.</Item>
   {/*  <Item headline={5}>Receive your solution or get it hosted and maintained by SCALEWORK.</Item> */}
    <Grid item xs={12}></Grid>
  </Grid>


const ItemRaw = ({children, classes, headline}) =>
  <Grid md={6} xs={12} item className={classes.item} style={{backgroundImage:`url('/static/images/01 Home/04-intro-to-scalework/steps/step-${headline}.svg')`}}>
    <Typography color={"primary"} variant={"h1"}>{headline}</Typography>
    <Divider className={classes.divider}/>
    <Typography className={classes.content}>{children}</Typography>
  </Grid>

const Item = withStyles(styles)(ItemRaw)

export default withStyles(styles)(StepByStep2);