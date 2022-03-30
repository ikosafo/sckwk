import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'

const styles = theme => ({
  imgstyle:{
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
  },
  card: {
    display: 'flex',
    cursor: 'pointer',
    height: '100%',
    boxShadow: false,
    "&:hover":{
      boxShadow: "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",

    },
    "&:hover .MuiCardMedia-root": {
      backgroundColor: "#df265e",
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column"
    }
  },
  avatar: {
    flexShrink: 1
  },
  chips: {
    flexShrink: 1,
  },
  profile: {
    flexGrow: 2
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    textAlign:'left'
  },
  cover: {
    flex: "0 0 20%",
    minWidth: 200,
    backgroundColor: "#e3e3e3",
    [theme.breakpoints.down('sm')]: {
      minWidth: "auto",
      minHeight: 100
    }
  },
  bigAvatar: {
    margin: 20,
    width: 80,
    height: 80,
  },
});


function IndustryDetails(props) {
  const { classes, numlogo,theme, avatar, title,description,more, ...rest } = props;

  return (
    <div onClick={props.onClick} elevation={0} {...rest}>

      <div style={{textAlign:"left"}}>
        <img src={avatar} align="right" 
        className="imgsvgcolor"
        style={{ 
        marginBottom: "0.1%",
        background: "#eff0f6",
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "28px",
        verticalAlign: "middle",
        padding: "5px"
        }}/>
        <h4 style={{marginRight:"10px"}}>{title}</h4>
        <p style={{color: "#777",fontSize:"13px"}}>{description}</p>
      </div>
       
        <Typography
          variant={"h5"}
          style={{ color: "#000",fontSize:"15px",textAlign:"left"}}
          gutterBottom
          className={classes.subline}
        >
         
          <p style={{color: "#777",fontSize:"13px"}}>{more}</p>
        </Typography>
     </div>

    /* <Grid style={{padding:"25px"}}>
       {/* <Grid item sm={12} md={12} xs={12}>
          <img src={numlogo}/>
      </Grid> 
      <Grid item sm={12} md={12} xs={12}>
      <img src={avatar} style={{borderRadius: "5%", marginBottom: "1rem",
                    width:"350px", height:"350px", textAlign:"center"}}/>
         {/*  <Typography variant={"h4"} color={"primary"}>{profile}</Typography> 
         <Typography variant={"h4"} gutterBottom style={{color:'#DF265E'}}>{title}</Typography>
         <div style={{textAlign:"center",fontSize:'20px'}}>
           {description} {more}
         </div>
      </Grid> 
   </Grid> */
   
  );
}



IndustryDetails.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IndustryDetails);
