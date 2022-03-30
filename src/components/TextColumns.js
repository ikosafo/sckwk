import React from 'react'
import { Grid, Typography, withStyles } from '@material-ui/core'
import { SectionHeadline } from './Components'

const chunk = require('lodash/chunk');

const styles = theme => ({
  root:{
    textAlign:"left"
  }
});

const TextColumnsRaw = ({classes,children, headline}) => {
  let ch = React.Children.toArray(children)
  let half = Math.ceil(ch.length/2)
  let chunk1 = ch.slice(ch,half)
  let chunk2 = ch.slice(half,ch.length)
  return <Grid container spacing={2} alignContent={"flex-start"} justify={"center"} alignItems={"flex-start"} className={classes.root}>
    {headline && <Grid item xs={12} style={{textAlign:"center"}}><SectionHeadline>{headline}</SectionHeadline></Grid>}
      <Grid item xs={12} md={6}>
        {chunk1}
      </Grid>
      <Grid item xs={12} md={6}>
        {chunk2}
      </Grid>
    </Grid>
}
const TextColumns = withStyles(styles)(TextColumnsRaw);

export default withStyles(styles)(TextColumns);


export function DataSecurityText() {
  return <TextColumns>
    <Typography gutterBottom>
      In addition, we offer tools to ensure that you apply the right degree of anonymization or 
      pseudonymization to your data to comply with any legal and confidentiality requirements.
    </Typography>
    <Typography gutterBottom>
      Finally, we offer an infrastructure that keeps all sensitive data in your jurisdiction and 
      on our secure servers. Data experts can only work on the data on our secure environment. Our 
      infrastructure disables any downloading, copying or forwarding of your data beyond our environment.
    </Typography>
    <Typography gutterBottom>
      You remain in full control of the data at all times and can grant and revoke access to the 
      encrypted data for individual experts at all times.
    </Typography>
    <Typography gutterBottom>
      As well as deleting the data without any copy left.
      So no matter which data expert you grant access via our platform, they can only perform your 
      analysis or build your solution without taking your data with them.
      That’s how we make remote work secure.
    </Typography>
  </TextColumns>
}
export function TechnicalDescriptionText() {
  return <TextColumns headline={"Technical description of our remote set-up"}>
    <Typography gutterBottom>
      Experts work remotely on our secured machines. They only get access via an encrypted video-stream from their local computer and our machine only receive keyboard commands. The video stream is encrypted and ensures that no data can leak. The experts cannot download any information from the virtual machine.
    </Typography>
    <Typography gutterBottom>
      The work environment for each project that is delivered through SCALEWORK consists of its own VPC (Virtual Private Cloud) with strong security and encryption settings beyond market standard. The environment contains a powerful virtual machine, the client data for which the client granted access, preinstalled data tools like R, Jupyter Notebook, and additional services for data processing and visualization. All hard-drives and volumes are encrypted at rest.
    </Typography>
    <Typography gutterBottom>
      The environment has no open connection to the internet to ensure compliance. Only client selected data experts can connect to the machine and work on the data. Experts cannot download or upload any of the data from the secured environment.
    </Typography>
    <Typography gutterBottom>
      Our remote data experts are trained to work in these environments to deliver impactful solutions and powerful presentations.
    </Typography>
  </TextColumns>
}
export function CareerRolesText() {
  return <TextColumns>
    <Typography gutterBottom>
      <ul>
      <li>For data scientists</li>
      <li>For data experts</li>
      <li>For data engineers</li>
      <li>For machine learning engineers</li>
      <li>For data engineers</li>
      </ul>
    </Typography>
    <Typography gutterBottom>
      <ul>
        <li>For data project managers</li>
        <li>For project managers</li>
        <li>Technology</li>
        <li>Business</li>
        <li>Internships / working students</li>
      </ul>
    </Typography>
  </TextColumns>
}

export function PastSolutionText() {
  return <TextColumns headline={"Performance template repository"}>
    <Typography>
        Analytics & Machine Learning have already transformed many industries and helped to 
        increase profitability and growth of companies.
    </Typography>
    <Typography>
        Our performance templates leverage Machine Learning for solving domain specific 
        industrial problems. The goal of each template is to enable business owners to leverage 
        data science for their operations and quickly deploy Machine Learning solutions that add 
        value to their business.
    </Typography>
    <Typography>
          Each performance template includes the following: <br/>
      - A data schema (based on sample dataset) applicable to the specific domain <br/>
      - Domain specific data processing and feature engineering steps <br/>
      - Models training algorithms suited to the specific domain <br/>
      - Domain specific evaluation metrics (if applicable) <br/>
      - Pre-defined automation flows that trigger actions based on observed data patterns <br/>
      - Deployment of models and automation flows as a web service <br/>

    </Typography>
    
  </TextColumns>
}