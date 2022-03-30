import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'

const styles = theme => ({
  root:{
    textAlign:"left"
  }
});

const TextColumns = ({classes}) =>
  <Grid container spacing={2} alignContent={"flex-start"} justify={"center"} alignItems={"flex-start"} className={classes.root}>
    <Grid item xs={12} md={6}>
      <Typography>
        Value-creating functions of the retail sector are providing an assortment of products and services, breaking bulk, holding inventory and providing services. The sector is undergoing rapid change: customers scrutinize retailers today under a new set of value standards, including social responsibility, environmental impact, workplace safety and diversity, and the forces of globalization and trade.
      </Typography>
      <Typography>
        Digital disruption continues to have a big influence on the retail sector - Amazon being a symbol of this threat to the incumbents.
      </Typography>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography>
        The challenge for retailers is responding to the economic, technological, and customer disruptions with sound retail management strategy.
      </Typography>
      <Typography>
        E-commerce is the one getting the most media coverage. However, technology and online customer behavior are not a threat to retail but should be a part of the strategy, so the economic and technological trends from e-commerce still are a driver for the need to innovate in the retail sector.
      </Typography>
    </Grid>
  </Grid>

export default withStyles(styles)(TextColumns);