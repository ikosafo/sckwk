import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import ScaleWork from './ScaleWork'


export function SectionHeadline({classes,children,...rest}) {
  return <Typography  gutterBottom variant={'h3'} color={"primary"} {...rest}>{children}</Typography>
}

export function SectionSubHeadline({classes,children,...rest}) {
  return <Typography style={{marginBottom:"4rem",maxWidth:872,marginLeft:'auto',marginRight:'auto',color:"rgba(0, 0, 0, 0.6)"}} {...rest}>{children}</Typography>
}

export function AvatarTile({classes,children, imgSrc, headline,color='primary' ,...rest}) {
  return <React.Fragment>
    <Grid xs={4} md={2} item>
      <img src={imgSrc}></img>
    </Grid>
    <Grid xs={8} md={4} style={{textAlign:'left'}} item>
      <Typography variant={'h6'} gutterBottom color={color}>{headline}</Typography>
      <Typography>{children}</Typography>
    </Grid>
  </React.Fragment>
}


export function TryNowCTA({classes,children,...rest}) {
  return <Grid container alignItems={"center"} alignContent={"center"}>
    <Grid item xs={12}>
      <Typography variant={"h3"} gutterBottom>Try <ScaleWork/> now</Typography>
    </Grid>
  </Grid>
}
