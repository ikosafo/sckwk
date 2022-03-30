/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
//import IconCard from '../../components/IconCard'
import IndustryDetails from '../../components/IndustryDetails'
//import industries from '../../data/industires'
import { withTranslation } from '../../i18n'
//import { SectionHeadline, SectionSubHeadline } from '../../components/Components'
import industries from '../../../public//static/locales/en/solutions.json'

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  list: {
    paddingTop: '30px'
  }
})

function Industry (props) {
  const { classes, t, onFieldChange, onSubmit } = props;

  //let industries = t('industries', { returnObjects: true}).sort()
  // Other should be at the end
  //let industries = onboarding.industries


  return (

    <div className={classes.root}>
      <div style={{backgroundColor:'#f7f7fc'}}>
        <h3 className="MuiTypography-root MuiTypography-h3 MuiTypography-gutterBottom" 
            style={{paddingTop:"60px"}}>{t('industry-question')}
        </h3>
        <p className="MuiTypography-root MuiTypography-body1" style={{margin:"50px",marginTop:"-50px"}}>
          {t('industry-subline')}
        </p>

        <Grid
          container
          alignContent={"center"}
          alignItems={"center"}
          justify={"center"}
          style={{ marginTop:"30px",marginLeft:"35px",
                marginRight:"35px",paddingBottom:"100px"}}
        >
            <Grid container spacing={3} className={classes.list}>
                {industries.map((i, index) =>
                    <React.Fragment key={i[0]}>
                        <Grid
                            item
                            className={classes.background}
                            style={{
                                    border: "1px solid #BFBFBF",
                                    boxShadow: "4px 4px 3px #aaaaaa",
                                    background: "#ffffff",
                                    height: "235px",
                                    width: "240px",
                                    boxShadow: "0 0 0.6px 0 rgba(0,0,0,0.25)",
                                    borderRadius:"13px",
                                    cursor:"pointer",
                                    marginLeft:"1.5%",
                                    marginBottom:"20px",
                                    paddingBottom:"6%", 
                                    textAlign:"center"
                                }}
                        >
                            <IndustryDetails
                                avatar={`/static/images/05 Solutions/04-industries/${i.icons}`}
                                title={i.title}
                                description={i.keywords}
                                onClick={e => {
                                  onFieldChange(e, i.icons.replace(".svg",""))
                                  onSubmit(e)
                                }}
                            />
      </Grid>  
        </React.Fragment>
        )}
            </Grid>
       </Grid>
      
  </div>
</div>

    /* <div className={classes.root}>
      <SectionHeadline>{t('industry-question')}</SectionHeadline>
      <SectionSubHeadline>{t('industry-subline')}</SectionSubHeadline>
      <Grid container spacing={4} className={classes.list} alignItems={'stretch'}>
        {industries.map((i, index) =>
          <Grid item md={4} xl={4} sm={6} key={index} xs={12}>
            <IconCard
              avatar={`/static/images/05 Solutions/04-industries/${i.icons}`}
              title={i.title}
              onClick={e => {
                onFieldChange(e, i.icons.replace(".svg",""))
                onSubmit(e)
              }} />
          </Grid>
        )}
      </Grid>
    </div> */
  )
}

Industry.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(withTranslation('onboarding')(Industry))
