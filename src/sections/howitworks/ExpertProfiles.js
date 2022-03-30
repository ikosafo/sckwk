import React from 'react'
import { Grid, withStyles, } from '@material-ui/core'
import 'react-alice-carousel/lib/alice-carousel.css'
import { AvatarTile, SectionHeadline } from '../../components/Components'
import ScaleWork from '../../components/ScaleWork'

const styles = theme => ({
});


const ExpertProfiles = () =>
  <Grid container spacing={4}>
    <Grid xs={12} item>
      <SectionHeadline style={{fontSize:"30px"}}> Some of our experts.</SectionHeadline>
    </Grid>
    <AvatarTile headline={'Markus, Senior Data Scientist & Translator'} imgSrc={'/static/images/06 How it works/03-experts/man.png'}>Markus holds a PhD in Statistics and has worked in Data Science for 8 years. He has been a data science lead for a major management consultancy firm and has managed data science projects across multiple industries such as telco, retail and energy. His clients benefit from his scientific background, his hands-on experience and the deep understanding of business problems and the ability to translate between business side and data science.</AvatarTile>
    <AvatarTile headline={'Thomas, Senior Data Engineer & Translator'} imgSrc={'/static/images/06 How it works/03-experts/man taking a walk.png'}>Thomas is an experienced computer scientist with deep experience in IT infrastructure and big data technology. For the last 7 years he has worked as CTO in several tech start-ups building the IT stack from scratch and adapting it to the requirements of the developing businesses. Thomas helps his clients building secure and performant data platforms and production ready pipelines.</AvatarTile>
    <AvatarTile headline={'Frank, Translator'} imgSrc={'/static/images/06 How it works/03-experts/man getting breakfast.png'}>Frank holds a Master in software engineering and a BSc in Machine Learning. His professional experience includes technology consulting, private equity and management of data operations. Frank’s ability to deeply understand business problem and knowing how to solve them using data science helps his clients to find the right methodology and resources they need. He is brilliant at managing data science projects and achieving the business goals.</AvatarTile>
    <AvatarTile headline={'Tim, AI Engineer'} imgSrc={'/static/images/06 How it works/03-experts/man going upstairs.png'}>Tim holds a Master of Computational Neuroscience and has been working as a machine learning engineer at various start-ups and as a freelancer. He is an expert in natural language processing with a deep understanding of the latest developments in this rapidly developing field of artificial intelligence. With his unique expertise Tim is able to support his client solving some of the hardest problems in AI.</AvatarTile>
    <AvatarTile headline={'David, Junior Data Scientist'} imgSrc={'/static/images/06 How it works/03-experts/teacher.png'}>David holds a BSc in Computer Science with a specialization in analytics. He has been working as a data analyst in a consultancy company serving clients across Europe. His field of expertise is data analysis and machine learning.</AvatarTile>
    <AvatarTile headline={'Eva, Junior Data Engineer'} imgSrc={'/static/images/06 How it works/03-experts/woman.png'}>Eva has a BSc in Computer Science. She has been working as data analyst and engineer in consulting. Her specialization are big data technologies and ETL pipelines.</AvatarTile>
  </Grid>

export default withStyles(styles)(ExpertProfiles);