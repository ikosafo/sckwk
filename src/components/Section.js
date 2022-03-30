import React from 'react'
import { withStyles } from '@material-ui/core'

const styles = theme => ({
  section: {
    "display": "block",
    "&:last-of-type > div": {
      paddingBottom: "5em"
    },
    "&:first-of-type": {
      //paddingTop: "5em"
    }
  },
  gray: {
    backgroundColor: '#f3f3f3'
  },
  gradient: {
    backgroundColor: '#f3f3f3',
    background: 'linear-gradient(#f3f3f3, #FFFFFF)'
  },
  gradient2: {
    backgroundColor: '#f3f3f3',
    background: 'linear-gradient(#f3f3f3, #FFFFFF)',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "10% 10%, 50% 20%, 80% 20%, 40% 80%, 80% 80%",
    backgroundImage: "url('/static/images/01 Home/06-clients/01 Pink circles/SW-Ring-pink-01.svg')," +
      "url('/static/images/01 Home/06-clients/01 Pink circles/SW-Ring-pink-02.svg')," +
      "url('/static/images/01 Home/06-clients/01 Pink circles/SW-Ring-pink-03.svg')," +
      "url('/static/images/01 Home/06-clients/01 Pink circles/SW-Ring-pink-04.svg')," +
      "url('/static/images/01 Home/06-clients/01 Pink circles/SW-Ring-pink-05.svg')," +
      "linear-gradient(#f3f3f3, #FFFFFF)"
  },
  inner:{
    margin: "auto",
    paddingTop: '5rem',
    paddingBottom: '2.5rem',
    paddingLeft: 16,
    paddingRight: 16,
    maxWidth: 1150
  },

  
  hero: {
    background: 
    `linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ),
    url('static/images/01 Home/01-header/rock-731140.jpg')`,
    height:"600px",
    marginTop:"5.63%",
    //backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(0, 0, 0, 0.5)), 
    //url('/static/images/01 Home/01-header/rock-731140.jpg'), 
    //url('${require('../..//static/images/01 Home/01-header/rock-731140.jpg?webp')}')`,
    //backgroundColor:"#48509C",
    //backgroundImage: "linear-gradient(#6473FF, #48509C)",
    //background:"linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('/static/images/01 Home/01-header/rock-731140.jpg')",
    //backgroundColor: "#48509C",
    //backgroundRepeat: "no-repeat",
    //height:"600px",
    //backgroundPosition: "top center, center 5% ",
    //backgroundSize: "cover",
    //backgroundSize: " 100% auto",
    [theme.breakpoints.down('xs')]: {
      //backgroundImage: `url('${require('../..///static/images/01 Home/01-header/rock-731140.jpg?webp')}')`,
      //backgroundPosition: "70% -30%",
      //backgroundRepeat: "no-repeat",
      //backgroundSize: "1200px",
    } 
  },
  companyhero: {
    backgroundImage: `url('/static/images/01 Home/01-header/large-cut-grey-circle.svg'), url('/static/images/01 Home/01-header/SCALEWORK-Vid-Header-Static.png')`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center, center 5% ",
    backgroundSize: " 100% auto",
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `url('/static/images/01 Home/01-header/SCALEWORK-Vid-Header-Static.png')}')`,
      backgroundPosition: "70% -30%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "1200px",
    }
  },
  companygray: {
    backgroundColor: '#ffffff',
    backgroundImage: "linear-gradient(to right,#E1E1E10D, #FFFFFF)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    height:"650px",
  },
  grayLogo: {
    backgroundColor: '#eaeaea',
    backgroundImage: "url('/static/images/01 Home/05-why-scale-work/why-scalework-background.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: " 100% auto",
  },
  secondaryLogo: {
    backgroundImage: "url('/static/images/02 Company/03-join-us/SW-Ring-purple-1.svg'), url('/static/images/02 Company/03-join-us/SW-Ring-purple-2.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right, -30% 50vh",
    backgroundSize: "20% auto, 50vw",
  },
  whiteLogo: {
    backgroundColor: '#FFFFFF',
    backgroundImage: "url('/static/images/01 Home/06-clients/01 Pink circles/SW-Ring-pink-large.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left bottom",
    backgroundSize: " 50% auto",
  },
  blackComputer: {
    backgroundColor: '#212121',
    backgroundImage: "url('/static/images/05 Solutions/05-ondemand/data-analysis-experts-on-demand-graphic.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-40% center, 140% center",
    backgroundSize: " 40vw auto,40vw auto",
    color: theme.palette.common.white
  },
  redbg: {
    backgroundColor: '#DF265E',
    color: theme.palette.common.white
  },
  black: {
    backgroundColor: '#212121',
    color: theme.palette.common.white
  },
  bottomGray: {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+93,ffffff+93,eaeaea+94,eaeaea+100 */
    //background: "#ffffff", /* Old browsers */
    //background: "-moz-linear-gradient(top,  #ffffff 0%, #ffffff 93%, #ffffff 93%, #eaeaea 94%, #eaeaea 100%)", /* FF3.6-15 */
    //background: "-webkit-linear-gradient(top,  #ffffff 0%,#ffffff 93%,#ffffff 93%,#eaeaea 94%,#eaeaea 100%); /* Chrome10-25,Safari5.1-6 */
    background: "linear-gradient(to bottom,  #ffffff 0%,#ffffff 90%,#ffffff 90%,#f3f3f3 90%,#f3f3f3 100%)", /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    //filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eaeaea',GradientType=0 ); /* IE6-9 */
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  secondary: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText
  }

});

const Section = ({classes, children, variant, fullWidth, id : scrollableSectionId}) => {
  const inner =
    <section className={`${classes.section} ${classes[variant]}`} id={scrollableSectionId}>
      {fullWidth ? children : React.Children.map(children, (i) => <div className={classes.inner}>{i}</div>)}
    </section>

  return  inner
}

export default withStyles(styles)(Section);