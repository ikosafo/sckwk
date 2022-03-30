/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'
import { Grid, withStyles } from "@material-ui/core";
//import Goal from "../../sections/index/Goal";
import FinderDetails from '../../components/FinderDetails'
import { withTranslation } from '../../i18n'
//import { SectionHeadline, SectionSubHeadline } from '../../components/Components'

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  list: {
    paddingTop: '30px'
  }
})

function Goals (props) {
  const { classes, t, onFieldChange, onSubmit } = props
  const goals = t('goals', { returnObjects: true})

  if (typeof goals === 'string') return null

  return (
    <div className={classes.root}>
      <div style={{backgroundColor:'#f7f7fc'}}>
      <h3 className="MuiTypography-root MuiTypography-h3 MuiTypography-gutterBottom" 
      style={{paddingTop:"60px"}}>{t('goal-question')}</h3>
      <p className="MuiTypography-root MuiTypography-body1" style={{marginTop:"-50px"}}>
        {t('goal-subline')}
      </p>

        <Grid
          container
          alignContent={"center"}
          alignItems={"center"}
          justify={"center"}
          style={{ marginTop:"30px",marginLeft:"35px",
                marginRight:"35px",paddingBottom:"100px" }}
        >
    <Grid container spacing={3} className={classes.list}>
        {goals.map((i, index) =>
          <React.Fragment key={i[0]}>
            <Grid
              item
              className={classes.background}
              style={{
                      border: "1px solid #BFBFBF",
                      background: "#ffffff",
                      height: "410px",
                      width: "240px",
                      boxShadow: "0 0 0.6px 0 rgba(0,0,0,0.25)",
                      borderRadius:"13px",
                      cursor:"pointer",
                      marginLeft:"1.5%",
                      textAlign:"center"
                    }}
          >
            <FinderDetails
                avatar={`/static/images/icons/finder/${i[0].toLowerCase().replace(/\//, '-')}.png`}
                /* numlogo={`/static/images/icons/goalsnum/${i[0].toLowerCase().replace(/\//, '-')}.jpg`} */
                title={i[0]}
                description={i[1]} 
                more={i[2]} onClick={e => {
                  onFieldChange(e, i[0].toLowerCase())
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
  )
}

Goals.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(withTranslation('onboarding')(Goals))
