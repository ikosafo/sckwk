import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { SectionHeadline } from '../../components/Components'

const styles = theme => ({
  founder:{
    "& > img:first-of-type": {
      borderRadius: "50%",
      /* filter: "grayscale(100%)", */
      marginBottom: "1rem",
      width:"300px",
      height:"300px",
     /*  maxWidth: "50%", */
      textAlign:"center"
    },
    "& a": {
      textAlign:"left"
    }
  }
});



const Finder = ({imgSrc,name,title,children,mail, linkedin,className}) =>
    <Grid item sm={6} xs={12} className={className}>
          <img src={imgSrc}/>
          <Typography variant={"h4"} color={"primary"}>{name}</Typography>
          <Typography variant={"h6"}  gutterBottom>{title}</Typography>
          <div style={{textAlign:"left"}}>
            {children}
          </div>
    </Grid>

const Finders = ({classes}) =>
  <Grid container spacing={6} alignContent={"flex-start"} justify={"center"} alignItems={"flex-start"}>
     <Grid xs={12} item>
      <SectionHeadline style={{fontSize:"30px"}}>First, let’s briefly assess where you stand in terms of your data application life cycle.</SectionHeadline>
    </Grid>
    <Finder
    name={"Explore"}
     imgSrc={"/static/images/icons/goals/explore2.jpg"} className={classes.founder}>
      <Typography gutterBottom>
          Learn about new valuable data applications for my company. Choose this option, if you want to find your first opportunities to drive your business effectiveness with data.
      </Typography>
    </Finder>
   
    <Finder
    name={"Demonstrate"} 
    imgSrc={"/static/images/icons/goals/demonstrate2.jpg"}  Width="50px" className={classes.founder}>
      <Typography gutterBottom>
        Build prototypes of data application to showcase business value. Choose this option, if you already have a 
        data application in mind and want to build a prototype to 
        approximate the business value.
      </Typography>
    </Finder>
    
    <Finder 
    name={"Scale"} 
    imgSrc={"/static/images/icons/goals/scale2.jpg"} className={classes.founder}>
      <Typography gutterBottom>
        Build, update and integrate your data application into your daily operations. Choose this option, if 
        you want to build a robust and integrated application that constantly helps optimize your business 
        decisions.
      </Typography>
    </Finder>
   
    <Finder
    name={"Source"} 
    imgSrc={"/static/images/icons/goals/source2.jpg"} className={classes.founder}>
      <Typography gutterBottom>
        Get tailored suggestions from the best data experts around the world to work on your challenges. Choose 
        this option if you already know your skill requirements and want to source additional on-demand data experts.
      </Typography>
    </Finder>
    
  </Grid>

export default withStyles(styles)(Finders);