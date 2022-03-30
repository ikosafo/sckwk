import React from "react";
import { Grid } from "@material-ui/core";
import { SectionHeadline } from "../../components/Components";

const Partners = () => (
  <Grid container spacing={3} justify="space-evenly" alignItems="center">
    <Grid item xs={12}>
      <SectionHeadline variant={"h3"}  style={{fontSize:"30px", fontFamily:"Montserrat"}}>Endorsed By</SectionHeadline>
    </Grid>
    <Grid item> 
      <a target={"_blank"} href={"https://azure.microsoft.com/"}>
        <img src={"/static/images/page1/azure2.png"} />
      </a>
    </Grid>
    <Grid item>
      <a target={"_blank"} href={"https://de.wayra.co/"}>
        <img src={"/static/images/page1/wayra-logo.jpg"} />
      </a>
    </Grid>
    <Grid item>
      <a target={"_blank"} href={"http://www.ox.ac.uk/"}>
        <img src={"/static/images/page1/university-of-oxford-logo.jpg"} />
      </a>
    </Grid>
    <Grid item>
      <a target={"_blank"} href={"https://www.oxfordfoundry.ox.ac.uk/"}>
        <img src={"/static/images/page1/oxfoundry-logo.jpg"} />
      </a>
    </Grid>
    <Grid item>
      <a target={"_blank"} href={"https://aws.amazon.com/de/"}>
        <img src={"/static/images/page1/aws-logo.jpg"} />
      </a>
    </Grid>
    <Grid item>
      <a target={"_blank"} href={"https://www.unternehmertum.de/"}>
        <img src={"/static/images/page1/unternehmer-tum-logo.jpg"} />
      </a>
    </Grid>
  </Grid>
);

export default Partners;
