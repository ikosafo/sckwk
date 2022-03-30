import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './Testimonials.css'
import { SectionHeadline } from '../../components/Components'

export const Testimonial = ({children, person, title}) =>
  <div>
      <Typography gutterBottom style={{fontFamily:"Montserrat"}}>"{children}"</Typography>
      <Typography variant="h5" color={"secondary"} style={{fontFamily:"Montserrat"}}>{person}</Typography>
      <Typography variant="h6" style={{fontFamily:"Montserrat"}}>{title}</Typography>
  </div>

const Testimonials = ({children, header}) =>
  <Grid container>
    {header && <Grid xs={12} item>
        <SectionHeadline style={{fontFamily:"Montserrat",fontSize:"30px"}}>{header}</SectionHeadline>
    </Grid>}
    <AliceCarousel buttonsDisabled autoPlay autoPlayInterval={6000} stopAutoPlayOnHover>
        {children}
    </AliceCarousel>
  </Grid>

export default Testimonials