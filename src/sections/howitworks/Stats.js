import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { SectionHeadline } from '../../components/Components'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  subGrid:{
    textAlign:"left",
  },
  text:{
    textAlign:"left",
    padding: " 1rem 2rem ",
    maxHeight: 300,
    "& p ":{
      margin: '0.5em 0',
    }
  },
  stats:{
    backgroundRepeat: "no-repeat, no-repeat",
    backgroundPosition: "center center, center center",
    backgroundSize: "80% auto",
    alignSelf: "stretch",
    padding:"30%",
    "& img":{
      width: "80%",
    }
  }
});

const Stats = ({classes}) =>
  <Grid container spacing={0} alignContent={"flex-start"} justify={"center"} alignItems={"center"}>
    <Grid xs={12} md={12} item>
      <SectionHeadline> Competencies</SectionHeadline>
    </Grid>
    <Grid xs={5} sm={4} md={2} item>
      <div className={classes.stats} style={{backgroundImage:"url('/static/images/06 How it works/04-expert-numbers/Pie-chart-01.svg')"}}>
        <img src={'/static/images/06 How it works/04-expert-numbers/icon-tech.svg'}/>
      </div>
    </Grid>
    <Grid xs={7} sm={8} md={4} item className={classes.text}>
      <Typography variant={"h6"}>Technologies</Typography>
      <Typography><span style={{color:"#df265e"}}>⬤</span> {/* <b>+5000</b> |  */}Python</Typography>
      <Typography><span style={{color:"#212121"}}>⬤</span> {/* <b>+4200</b> | */} R</Typography>
      <Typography><span style={{color:"#6a1b9a"}}>⬤</span> {/* <b>+3370</b> | */} SQL</Typography>
    </Grid>
    <Grid xs={5} sm={4} md={2} item>
      <div className={classes.stats} style={{backgroundImage:"url('/static/images/06 How it works/04-expert-numbers/Pie-chart-02.svg')"}}>
        <img src={'/static/images/06 How it works/04-expert-numbers/icon-methodology.svg'}/>
      </div>
    </Grid>
    <Grid xs={7} sm={8} md={4} item className={classes.text}>
      <Typography variant={"h6"}>Methodologies</Typography>
      <Typography><span style={{color:"#df265e"}}>⬤</span> {/* <b>+1560</b> | */} Data Visualization</Typography>
      <Typography><span style={{color:"#212121"}}>⬤</span> {/* <b>+5300</b> | */} Machine Learning</Typography>
      <Typography><span style={{color:"#6a1b9a"}}>⬤</span> {/* <b>+750</b> | */} Natural Language Processing</Typography>
    </Grid>
    <Grid xs={5} sm={4} md={2} item>
      <div className={classes.stats} style={{backgroundImage:"url('/static/images/06 How it works/04-expert-numbers/Pie-chart-03.svg')"}}>
        <img src={'/static/images/06 How it works/04-expert-numbers/icon-profiles.svg'}/>
      </div>
    </Grid>
    <Grid xs={7} sm={8} md={10} item className={classes.text}>
      <Typography variant={"h6"}>Methodologies</Typography>
      <Grid container className={classes.subGrid} spacing={0}>
        <Grid item sm={12} md={5}>
          <Typography><span style={{color:"#df265e"}}>⬤</span>{/*  <b>+4800</b> | */} Data Scientists</Typography>
          <Typography><span style={{color:"#212121"}}>⬤</span> {/* <b>+390</b> | */} Data Engineers</Typography>
          <Typography><span style={{color:"#6a1b9a"}}>⬤</span> {/* <b>+130</b> | */} AI Engineers</Typography>
          <Typography><span style={{color:"#ba68c8"}}>⬤</span> {/* <b>+100</b> | */} Data Architects</Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography><span style={{color:"#0097a7"}}>⬤</span> {/* <b>+700</b> | */} Designers</Typography>
          <Typography><span style={{color:"#01bcd4"}}>⬤</span> {/* <b>+130</b> | */} Translators</Typography>
          <Typography><span style={{color:"#979797"}}>⬤</span> {/* <b>+130</b> | */} Implementers</Typography>
        </Grid>
      </Grid>
    </Grid>
    <Button href={"/finder"} variant={"contained"} color={"primary"}>Get Started</Button>
  </Grid>


export default withStyles(styles)(Stats);