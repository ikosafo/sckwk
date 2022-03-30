import React from 'react'
import { Card, CardContent, CardHeader, Grid, withStyles } from '@material-ui/core'
import { SectionHeadline } from '../../components/Components'
import Link from 'next/link'

const styles = theme => ({
  root:{
  },
  item:{
    textAlign:"left",
  },
  content:{
    paddingRight:"20%"
  },
  card:{
    backgroundRepeat: "no-repeat",
    backgroundPosition: " 120% center",
    backgroundSize: " auto 50% ",
    height: "100%",
    cursor: 'pointer'
  },
  cardTitle:{
    fontFamily: theme.typography.oswald,
    fontWeight: theme.typography.fontWeightExtraLight
  },
  cardSubtitle:{
    fontFamily: theme.typography.oswald,
    fontWeight: theme.typography.fontWeightBold,
    paddingRight: "30%",
    color: "#000",
    marginLeft: 25,
    "&::before": {
      content: '"— "',
      marginLeft: -25,
      color: theme.palette.primary.dark
    }

  }
});




export const Usecase = withStyles(styles)(({classes,usecase, onClick, ...rest})=>
  <Card className={classes.card} style={{backgroundImage:`url('${usecase.image}')`}} onClick={onClick} {...rest}>
    <CardHeader classes={{title:classes.cardTitle, subheader:classes.cardSubtitle}} title={usecase.headline} subheader={usecase.subline}></CardHeader>
    <CardContent className={classes.content}>{usecase.text}</CardContent>
  </Card>
)

const Usecases = ({classes,content}) =>
  <React.Fragment>
    <Grid container spacing={4} className={classes.root} alignItems={"stretch"}>
      <Grid xs={12} item>
        <SectionHeadline>Performance Drivers</SectionHeadline>
      </Grid>
        {content.map( (usecase,i) =>
          <Grid item xs={12} md={6} className={classes.item} key={i}>
            <Link href={'/finder'}><Usecase usecase={usecase}/></Link>
          </Grid>
        )}
    </Grid>
  </React.Fragment>

export default withStyles(styles)(Usecases);
