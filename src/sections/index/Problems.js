import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import Graph from '../../components/Graph' 
import VGraph from '../../components/VGraph'
import { SectionHeadline } from '../../components/Components'
import GraphSlide, { Sliding } from '../../../src/sections/index/GraphSlide'
import Section from '../../../src/components/Section'


const styles = theme => ({
  paragraph: {
    maxWidth:"380px",
    margin: "1em auto"
  }
});

const Problems = ({classes}) =>

<div>
    {/* <Grid container spacing={12} alignContent={"center"} justify="space-evenly">
      <SectionHeadline>The Challenge We Solve</SectionHeadline>
      <Grid item xs={12}><Typography variant={"h5"} gutterBottom  
      className={classes.subline} style={{color:"#48509C"}}>Companies deploying Data Science and AI already outperform the market – 
      <b style={{fontWeight:700, whiteSpace:'nowrap'}}> are you ready to get ahead of the curve?</b>
      </Typography></Grid>
      <Grid item md={12} xs={12}>
      </Grid>
    </Grid> */}

    <Grid container spacing={10} alignContent={"center"} justify="space-evenly" 
    style={{marginBottom:"10%"}}>
      {/* <SectionHeadline>The Challenge We Solve</SectionHeadline> */}
      <Grid item xs={12} md={5} sm={12} lg={5}>
        <Typography variant={"h5"} gutterBottom 
        style={{color:"#48509C",fontFamily:"Montserrat",textTransform:"uppercase",fontSize:"30px",
        marginTop:"90px",fontWeight:"600"}}>
          Companies deploying Data Science and AI already outperform the market<br/></Typography>
          <Typography variant={"h5"} style={{color:"#48509C",fontFamily:"Montserrat",fontSize:"20px",
        marginTop:"30px",fontWeight:"300"}}>
        Are you ready to get ahead of the curve?
        </Typography>
      </Grid>
      <Grid item xs={12} md={7} sm={12} lg={7} style={{boxShadow:"5px 5px 5px 5px rgba(0, 0, 0, 0.2)"}}>
     
        <GraphSlide>
              <Sliding>
                {/* <Graph/> */}
                <img src={'/static/images/01 Home/03-problem-icons/chart 2.png'} style={{width:"100%"}}/>
              </Sliding>
              <Sliding>
                  {/* <VGraph/> */}
                  <img src={'/static/images/01 Home/03-problem-icons/chart 1.png'} style={{width:"100%"}}/>
              </Sliding>  
        </GraphSlide>
   

      </Grid>
    
    </Grid>

   

</div>
  
  
export default withStyles(styles)(Problems);