import React from 'react'
import { Grid, withStyles, } from '@material-ui/core'
import 'react-alice-carousel/lib/alice-carousel.css'
import { AvatarTile, SectionSubHeadline } from '../../components/Components'
import ScaleWork from '../../components/ScaleWork'
import { SectionHeadline} from '../../components/Components'

const styles = theme => ({
});


const Roles = () =>
  <Grid container spacing={4}>
    <Grid xs={12} item>
    <SectionHeadline style={{fontSize:"30px"}}> <ScaleWork/> has the right profiles for your specific needs.</SectionHeadline>
    </Grid>
    <AvatarTile headline={'Data Scientists'} imgSrc={'/static/images/06 How it works/03-experts/Ds.svg'}>Experts in methodology, processes, algorithms and systems to extract knowledge and insights from data. They specify analytics methodology and data requirements for a business problem, compile the required data set and then build, evaluate and interpret mathematical models to solve a business problem.</AvatarTile>
    <AvatarTile headline={'AI Engineers'} imgSrc={'/static/images/06 How it works/03-experts/Ae.svg'}>Experts in AI methodologies building systems that solve complex problems creating technology and machines that function in an intelligent manner. They use newest methodology from the fields of computer vision, natural language processing and robotics.</AvatarTile>
    <AvatarTile headline={'Data Engineers'} imgSrc={'/static/images/06 How it works/03-experts/De.svg'}>Experts in AI methodologies building systems that solve complex problems creating technology and machines that function in an intelligent manner. They use newest methodology from the fields of computer vision, natural language processing and robotics.Experts in the setup, maintenance, and management  of ETL processes and data pipelines. They are responsible for the generation, storage, maintenance, preparation, enrichment and transfer of data.</AvatarTile>
    <AvatarTile headline={'Data Architects'} imgSrc={'/static/images/06 How it works/03-experts/Da.svg'}>Experts in designing, building, deploying, and managing (cloud) infrastructures for data warehouses, big data and data-intensive applications. They are responsible identifying requirements for the IT infrastructure, setting up a big data IT stack, and managing the platform and tools.</AvatarTile>
    <AvatarTile headline={'Translators'} imgSrc={'/static/images/06 How it works/03-experts/Tr.svg'}>Project managers and experts in communication between data and business experts. They manage data projects end-to-end, translate between business requirements and analytics experts and back and steer communication between business owner and technical experts.</AvatarTile>
    <AvatarTile headline={'Designers'} imgSrc={'/static/images/06 How it works/03-experts/Da.svg'}>Data visualization experts. They build customized visualizations and dashboards to create immediate insights into existing data pools and to generate recommendations for our clients’ tactical and strategic activities.</AvatarTile>
    <AvatarTile headline={'Implementers'} imgSrc={'/static/images/06 How it works/03-experts/Im.svg'}>Experts in sustainable implementation of data-driven projects and business applications. They are responsible for ensuring the long-term integration of the results of a data project technically (i.e. into the existing IT infrastructure) and organizationally (i.e. helping to adapt existing business processes and establish a new way of working).</AvatarTile>
  </Grid>

export default withStyles(styles)(Roles);