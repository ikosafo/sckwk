import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { SectionHeadline } from '../../components/Components'

const styles = theme => ({
  founder:{
    "& > img:first-of-type": {
      borderRadius: "50%",
      filter: "grayscale(100%)",
      marginBottom: "1rem",
      maxWidth: "90%",
      textAlign:"center"
    },
    "& a": {
      textAlign:"left"
    }
  }
});



const Founder = ({imgSrc,name,title,children,mail, linkedin,className}) =>
    <Grid item sm={6} xs={12} className={className}>
          <img src={imgSrc}/>
          <Typography variant={"h4"} color={"primary"}>{name}</Typography>
          <Typography variant={"h6"}  gutterBottom>{title}</Typography>
          <div style={{textAlign:"left"}}>
            {children}
            <a href={`mailto:${mail}`}><img src={"/static/images/02 Company/02-description/email-at.svg"}/></a>&nbsp;
            <a href={linkedin}><img src={"/static/images/02 Company/02-description/linkedin.svg"}/></a>
          </div>
    </Grid>

const Founders = ({classes}) =>
  <Grid container spacing={6} alignContent={"flex-start"} justify={"center"} alignItems={"flex-start"}>
     <Grid xs={12} item>
      <SectionHeadline>Meet the Founders</SectionHeadline>
    </Grid>
    <Founder mail={'ulrich.busch@scalework.com'} 
    linkedin={"https://www.linkedin.com/in/ulrichbusch/"} 
    title={"BUSINESS ANALYTICS"} name={"Ulrich Busch"}
     imgSrc={"/static/images/06 How it works/ub website.jpg"} className={classes.founder}>
      <Typography gutterBottom>
        Ulrich is a true believer when it comes to data-driven insights and has been on a mission to make better 
        decisions through data his entire career.
      </Typography>
      <Typography gutterBottom>
        Previously, he supported CDOs and CFOs of matured companies 
        to build Digital units and explore data-driven business models. He has also built one of the leading 
        capacity builders for Cloud Engineers and Data Scientists in the Sub-Sahara region.
      </Typography>
    </Founder>
   
    <Founder mail={'tobias.nendel@scalework.com'} 
    linkedin={"https://www.linkedin.com/in/nendel/"} 
    title={"CLOUD TECHNOLOGY"} name={"Tobias Nendel"} 
    imgSrc={"/static/images/06 How it works/tn website.jpg"} className={classes.founder}>
      <Typography gutterBottom>
        Tobias is passionate about building secure, high-performance big data infrastructures. He is also a 
        serial entrepreneur of four successful businesses.
      </Typography>
      <Typography gutterBottom>
        He developed the tech organizations for a big data 
        pharma SaaS business as well as for one of the most successful fashion e-commerce retailers in Germany. 
      </Typography>
      <Typography gutterBottom>
        His university background is in BioInformatics and Information Systems.
      </Typography>
    </Founder>
    
    <Founder mail={'michael.buecker@scalework.com'} 
    linkedin={"https://www.linkedin.com/in/michaelbuecker/"}  
    title={"DATA SCIENCE"} name={"Michael Bücker (Prof. Dr.)"} 
    imgSrc={"/static/images/06 How it works/mb website.jpg"} className={classes.founder}>
      <Typography gutterBottom>
        Michael loves a tough problem to solve. As a mathematician at heart, he sources from his deep fundamental 
        understanding of today’s analytics and AI methods. He also loves to share his wisdom as acting Professor 
        for Data Science.
      </Typography>
      <Typography gutterBottom>
        In his past career, he developed custom data science solutions for hundreds of clients 
        worldwide at one of the leading global strategy consultancies.
      </Typography>
    </Founder>

    <Founder mail={'frederic.krahforst@scalework.com'} 
    linkedin={"https://www.linkedin.com/in/frederickrahforst/"} 
    title={"DATA GOVERNANCE"} name={"Frederic Krahforst"} 
    imgSrc={"/static/images/06 How it works/fk website.jpg"} className={classes.founder}>
      <Typography gutterBottom>
        Frederic loves to scale businesses on data. He has a engineering background in 
        machine learning and cybersecurity, but spent most of his career on the management side.
      </Typography>
      <Typography gutterBottom>
        He was responsible for data strategy and operations of one of Europe’s largest media 
        conglomerates and co-founded a company to detect money laundering patterns in banking data.
      </Typography>
      <Typography gutterBottom>
        He is also one of the leading figures behind the creation of Europe’s largest data joint 
        venture between Germany’s three leading media companies.
      </Typography>
    </Founder>
   
    
  </Grid>

export default withStyles(styles)(Founders);