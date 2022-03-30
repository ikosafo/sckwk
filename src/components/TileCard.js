import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
  withTheme
} from '@material-ui/core'
import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
import { LinkButton } from './Link'

const styles = theme => ({
  cardRoot: {
    margin: "0.3em",
    borderBottomColor: theme.palette.primary.main,
    borderBottomWidth: 5,
    borderBottomStyle: 'solid',
    "&:hover":{
      boxShadow: "0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 16px 24px 2px rgba(0, 0, 0, 0.14)"
    }
  },
  cardHeader:{
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  cardContent:{
    padding: "2em",
    "& p": {
      textAlign: "left"
    },
    "& li": {
      paddingLeft:0
    }
  },
  cardPoint: {
    "&:before": {
      content: "url('/static/images/05 Solutions/03-data-experts/check24.svg')",
      color: theme.palette.primary.main
    }
  }
});

const TileCard = ({content : solution, link, classes, color="primary", variant = "main", theme}) => {
  color = theme.palette[color] ? theme.palette[color][variant] : color
  return (
  <Card className={classes.cardRoot} style={{borderBottomColor:color}}>
    <CardHeader title={solution.title} className={classes.cardHeader} titleTypographyProps={{variant:"h6"}}  style={{backgroundColor:color}}/>
    <CardContent className={classes.cardContent}>
      {solution.price && <Typography color={"primary"} variant={'h6'} gutterBottom>{solution.price}</Typography>}
      <Typography>{solution.desc}</Typography>
      <List>
        {solution.points && solution.points.map( (p,i) =>
          <ListItem key={i}>
            <ListItemIcon>
              <CheckIcon color={"primary"} />
            </ListItemIcon>
            <ListItemText secondary={p} />
          </ListItem>
        )}
      </List>
      {link && <LinkButton color={"primary"} variant={"contained"} href={"/"}>Request now</LinkButton>}
    </CardContent>
  </Card>
  )
}

export default withTheme(withStyles(styles)(TileCard))