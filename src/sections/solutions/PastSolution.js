import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import industries from '../../../public/static/locales/en/solutions.json'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Link } from '../../components/Link'

const styles = theme => ({
  root:{
    textAlign:"left"
  },
  center:{
    textAlign:"center"
  },
  icon: {
    border: '2px solid #e8e8e8',
    textAlign: "center",
    borderRadius: "50%",
    margin: 5,
    padding: 20,
    cursor: "pointer",
    "& img":{
      width:50,
      height:50,
      //fill: "red"
    },
    "&:hover":{
      boxShadow: "0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 3px -2px rgba(0, 0, 0, 0.12), 0 3px 4px 0 rgba(0, 0, 0, 0.14);"
    },
    "&:hover img":{
      fill: "DF265E",
      filter: "invert(.5)"
    }
  },
  headline:{
    fontWeight:200,
    paddingBottom:10
  },
  more: {
    marginBottom: 100,
    textAlign: "center"
  }
});



let filteredIndustries = industries.filter(s => !s.hidden)
filteredIndustries.forEach(s => s.anchor = s.title.toLowerCase().replace(/ /g,"-"));

const PastSolution = ({classes}) =>
  <Grid container spacing={2} alignContent={"flex-start"} justify={"center"} 
  alignItems={"flex-start"} className={classes.root}>
    <Grid xs={12} item className={classes.center}>
      <Typography gutterBottom>Click on an industry to jump to its solutions</Typography>
    </Grid>
    {filteredIndustries.map( (i,index) =>
      <Grid item key={index}>
        <div className={classes.icon}>
          <Link href={`#${i.anchor}`}>
            <img src={`/static/images/05 Solutions/04-industries/${i.icons}`}/>
          </Link>
        </div>
      </Grid>)}
    <Grid xs={12} item className={classes.center}>
      <Typography gutterBottom>&nbsp;</Typography>
    </Grid>
    {filteredIndustries.map( (i,index) =>
      <div id={i.anchor} key={index}>
        <Grid container spacing={2} alignContent={"flex-start"} justify={"center"} style={{marginTop:"70px"}}
        alignItems={"flex-start"} className={classes.root}>
          <Grid xs={1} item>
              <img src={`/static/images/05 Solutions/04-industries/${i.icons}`}/>
          </Grid>
          <Grid xs={11} item>
            <Typography variant={'h4'} className={classes.headline}>{i.title}</Typography>
            <Typography>{i.keywords}</Typography>
          </Grid>
          <Grid xs={1} item/>
          <Grid xs={11} item>
            <SolutionTable industry={i}/>
          </Grid>
          <Grid xs={12} item className={classes.more}>
            {/*<PurpleLink color={"secondary"} href="/industry">show more</PurpleLink>*/}
          </Grid>
        </Grid>
      </div>
    )}
  </Grid>

export default withStyles(styles)(PastSolution);

const StyledTableCell = withStyles(theme => ({
  head: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: "1.2em",
    borderBottomColor: theme.palette.secondary.main,
    borderBottomWidth: 2,
  },
  body: {
  },
}))(TableCell);

const SolutionTableRaw = ({industry,classes}) =>
  <Table className={classes.table}>
    <TableHead>
      <TableRow>
        <StyledTableCell>Solution</StyledTableCell>
        <StyledTableCell>Impact</StyledTableCell>
        <StyledTableCell>Description</StyledTableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {industry.solutions.map( (solution,i) => (
        <TableRow key={i}>
          <StyledTableCell>{solution.solution}</StyledTableCell>
          <StyledTableCell>{solution.impact}</StyledTableCell>
          <StyledTableCell>{solution.description}</StyledTableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>

const SolutionTable = withStyles(styles)(SolutionTableRaw);