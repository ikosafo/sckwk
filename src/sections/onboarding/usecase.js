/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Button, Grid } from '@material-ui/core'
//import IndustryCard from '../../components/IndustryCard'
//import UsecaseDetails from '../../components/UsecaseDetails'
import IndustryDetails from '../../components/IndustryDetails'
import UsecaseShow from '../../components/UsecaseShow'
import { Trans, withTranslation } from '../../i18n'
//import { ArrowDropDown } from '@material-ui/icons'
//import { SectionHeadline, SectionSubHeadline } from '../../components/Components'

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  list:{
    paddingTop:"30px"
  }
});

  function Usecase(props) {
    const [showMore, setShowMore] = useState(false);
    const { classes, t, onFieldChange, onSubmit, industry } = props;
    const usecasesMap = t("usecases",{ returnObjects: true})
    const usecase2industry = t("usecase2industry",{ returnObjects: true})
    const usecases = Object.keys(usecasesMap).sort()
    const usecasesForIndustry = usecases.filter(u => usecase2industry[industry].includes(u))
    const usecasesNotForIndustry = usecases.filter(u => !usecase2industry[industry].includes(u))

    return (
      <div className={classes.root}>
         <div style={{backgroundColor:'#f7f7fc'}}>
            <h3 className="MuiTypography-root MuiTypography-h3 MuiTypography-gutterBottom" 
                style={{paddingTop:"60px"}}>{t('usecase-question')}
            </h3>
            <p className="MuiTypography-root MuiTypography-body1" 
              style={{marginTop:"-50px",marginLeft:"10px",marginRight:"10px"}}>
            {t('usecase-subline')}
            </p>


              <Grid
                container
                alignContent={"center"}
                alignItems={"center"}
                justify={"center"}
                style={{ marginTop:"30px",marginLeft:"14%",
                      marginRight:"14%",paddingBottom:"100px"}}
              >
                  <Grid container spacing={3} className={classes.list}>
                      {usecasesForIndustry.map(i =>
                        <React.Fragment key={i[0]}>
                              <Grid
                                item
                                className={classes.background}
                                style={{
                                border: "1px solid #BFBFBF",
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
                                        avatar={`/static/images/icons/usecases/${i.toLowerCase().replace(/\//,"-")}.svg`}
                                        /* numlogo={`/static/images/icons/goalsnum/${i[0].toLowerCase().replace(/\//, '-')}.jpg`}*/
                                        title={i} 
                                        description={usecasesMap[i]} 
                                        onClick={ e => {
                                          onFieldChange(e, i)
                                          onSubmit(e)
                                        }}
                                  />
                            </Grid>  
                      </React.Fragment>
               )}

{!showMore ?        
              <Grid xs={10}  onClick={() => setShowMore(true)} style={{
                              border: "1px solid #BFBFBF",
                              boxShadow: "4px 4px 3px #aaaaaa",borderRadius:"6px",
                              marginLeft:"-60px",
                              width:"80%",textAlign:"center",
                              boxShadow:"2px",fontWeight:"600",
                              cursor:"pointer",
                              }}>
                  <Grid item>
                  
                    <div style={{paddingTop:"16px"}}>
                        <span style={{float:"left",marginLeft:"10px"}}>Show More</span>
                        <span style={{float:"right",marginRight:"10px"}}>+</span>
                    </div>
                    
                  </Grid>

                  <Grid container spacing={3} className={classes.list}>
                  {showMore && usecasesNotForIndustry.map( i =>
                        <React.Fragment key={i[0]}>
                            <Grid
                                item
                                className={classes.background}
                                style={{
                                        border: "1px solid #BFBFBF",
                                        boxShadow: "4px 4px 3px #aaaaaa",
                                        background: "#ffffff",
                                        height: "30px",
                                        width: "214px",
                                        boxShadow: "0 0 0.6px 0 rgba(0,0,0,0.25)",
                                        borderRadius:"13px",
                                        cursor:"pointer",
                                        marginLeft:"1.93%",
                                        marginBottom:"20px",
                                        paddingBottom:"6%", 
                                        textAlign:"center"
                                    }}
                            >
                                <UsecaseShow
                                    avatar={`/static/images/icons/usecases/tab/${i.toLowerCase().replace(/\//,"-")}.svg`}
                                    title={i}
                                    onClick={e => {
                                      onFieldChange(e, i)
                                      onSubmit(e)
                                    }}
                                />
          </Grid>  
            </React.Fragment>
            )}
                </Grid>
          
              </Grid>
              : 
              <Grid xs={10}  onClick={() => setShowMore(false)} style={{
                border: "1px solid #BFBFBF",
                boxShadow: "4px 4px 3px #aaaaaa",borderRadius:"6px",
                marginLeft:"-60px",
                width:"80%",textAlign:"center",
                boxShadow:"2px",fontWeight:"600",
                cursor:"pointer",
                }}>
    <Grid item>
    
      <div style={{paddingTop:"16px"}}>
          <span style={{float:"left",marginLeft:"10px"}}>Show Less</span>
          <span style={{float:"right",marginRight:"10px"}}>-</span>
      </div>
      
    </Grid>

    <Grid container spacing={3} className={classes.list}>
    {showMore && usecasesNotForIndustry.map( i =>
          <React.Fragment key={i[0]}>
              <Grid
                  item
                  className={classes.background}
                  style={{
                          border: "1px solid #BFBFBF",
                          boxShadow: "4px 4px 3px #aaaaaa",
                          background: "#ffffff",
                          height: "30px",
                          width: "214px",
                          boxShadow: "0 0 0.6px 0 rgba(0,0,0,0.25)",
                          borderRadius:"13px",
                          cursor:"pointer",
                          marginLeft:"1.93%",
                          marginBottom:"20px",
                          paddingBottom:"6%", 
                          textAlign:"center"
                      }}
              >
                  <UsecaseShow
                      avatar={`/static/images/icons/usecases/tab/${i.toLowerCase().replace(/\//,"-")}.svg`}
                      title={i}
                      onClick={e => {
                        onFieldChange(e, i)
                        onSubmit(e)
                      }}
                  />
</Grid>  
</React.Fragment>
)}
  </Grid>

</Grid>
              }

            </Grid>
        </Grid>
      

          </div>
        </div>
    );
}

Usecase.propTypes = {
  classes: PropTypes.object.isRequired,
};

Usecase.defaultProps = {
  industry: "Other"
};

export default withStyles(styles)(withTranslation('onboarding')(Usecase));
