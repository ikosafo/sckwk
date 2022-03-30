import React from 'react';
import {Grid,Card,CardHeader,CardContent} from '@material-ui/core';


const Datawebinar = () =>

<Grid container spacing={4} style={{marginTop:"80px",background:"#f4f4f4"}}>
  <Grid container spacing={0} style={{textAlign:"center"}} alignContent={"center"} justify={"center"}>
    <Card style={{maxWidth:700, width:"100%",margin:"40px"}}>
    <CardHeader title={"SIGN UP TO JOIN THE FREE WEBINAR"}/>
      <CardContent>
          <iframe id="wbn-25212-iframe" width="100%" height="817" 
            src="https://14167.webinaris.co/25212/i/9866.html?mode=N" 
            frameborder="0" allowfullscreen></iframe>
      </CardContent>
    </Card>
  </Grid>
</Grid>
        
    

export default Datawebinar;