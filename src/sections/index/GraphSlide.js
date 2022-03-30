import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './GraphSlide.css'
import { SectionHeadline } from '../../components/Components'

export const Sliding = ({children, person, title}) =>
  <div>
      <Typography gutterBottom>{children}</Typography>
      <Typography variant="h5" color={"secondary"}>{person}</Typography>
      <Typography variant="h6">{title}</Typography>
  </div>

const GraphSlide = ({children, header}) =>
  <Grid container>
    {header && <Grid xs={12} item>
        <SectionHeadline>{header}</SectionHeadline>
    </Grid>}
    <AliceCarousel buttonsDisabled autoPlay autoPlayInterval={6000} stopAutoPlayOnHover>
        {children}
    </AliceCarousel>
  </Grid>

export default GraphSlide