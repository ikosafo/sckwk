import React from 'react'
import { Grid, Typography, withStyles, } from '@material-ui/core'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import './SolutionSlider.css'
import TileCard from '../../components/TileCard'

const solutions = [{
    title: 'Data strategy workshop',
    price: 'from EUR 2000',
    desc: 'One day workshop to learn about your potential with data science, analytics and AI.',
    points: [
        'Outside-In perspective from AI-leaders in your industry / function.',
        'Experience sharing with a leading expert for a quick assessment.',
        'Data Readiness check to lift potential from your existing data.',
    ],
    color:"primary",
    variant:"main"
},
{
    title: 'Pre-built AI templates',
    price: 'from EUR 6,500 per month',
    desc: 'Leverage or pre-built solutions and customize to your specific needs.',
    points: [
        'Fast results through pre-built templates.',
        'Deployed within your existing infrastructure.',
        'Get most out of the data that you already have.',
    ],
    color:"secondary",
    variant:"main"
},
{
    title: 'Data Sprint',
    price: 'from EUR 9,500',
    desc: 'Get your data potential quantified, just give us access and 2 weeks later you know how to get to smarter decisions.',
    points: [
        'Provide us with any data that you have in whatever format is easy to access.',
        'Our dataHUB will move you lightning-fast from data input to insights.',
        'As a result, you will get hard evidence of where to get the most value out of your data.',
    ],
    color:"secondary",
    variant:"light"
},
{
    title: 'Analytics as a Service',
    price: 'from EUR 2000',
    desc: 'Extent your analytics capabilities through our full-service model.',
    points: [
        'Focus on your business, we help you to make data-driven decisions',
        'Do not waste your time on Data Engineering & Analytics Visualization',
        'Scale your analytics team up and down as you require'
    ],
    color:"primary",
    variant:"light"
},
]

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

const SolutionSlider = () =>

  <Grid container spacing={4}>
      <Grid xs={12} item>
          <AliceCarousel buttonsDisabled autoPlayInterval={6000} stopAutoPlayOnHover fadeOutAnimation dotsDisabled={false} mouseDragEnabled responsive={  {
              0: {
                  items: 1
              },
              800: {
                  items: 2
              },
              1024: {
                  items: 3
              }}}>
              {solutions.map((solution,index) => <TileCard key={index} content={solution} color={solution.color} variant={solution.variant} link={"/finder"} />)}
          </AliceCarousel>
      </Grid>
      <Grid item sm={3} xs={false}/>
      <Grid item sm={6} xs={12}>
          <Typography gutterBottom>
              We want to be judged by the impact we generate. If we fail to generate any impact for your organization, we will voluntarily refund your money.
          </Typography>
      </Grid>
      <Grid item sm={3} xs={false}/>
  </Grid>

export default withStyles(styles)(SolutionSlider);