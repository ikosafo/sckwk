import React from 'react'
import PropTypes from 'prop-types'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Goal from './goal'
import Industry from './industry'
import Usecase from './usecase'
import Registration from './registration'
import set from 'lodash/set'
import Signup from './signup'
import { /* i18n,  */Trans, withTranslation } from '../../i18n'
import Router from 'next/dist/client/router'
import { Dialog, DialogActions, DialogContent, Typography, Grid} from '@material-ui/core'
import { Link, NavigationLink } from "../../components/Link";
import '../../../pages/finderstyles.css'
import '../../../pages/styles.css'

import { onboardingSignup } from '../../helpers/hubspot'
import InvolvementCards from './involvementCards'

const styles = theme => ({
  root: {
    margin: "auto"
  },
  button: {
    //marginRight: theme.spacing(1),
    background:"#ffffff",
    color:"#DF265E",
    minWidth:"100px",
    textTransform:"capitalize",
    //boxShadow: 'rgba(0, 0, 0, 0.35) 0px 0.9px 1.5px',
    //border:"0.1px solid #DF265E",
    fontSize:"16px"
  },
  logo: {
    margin: "15px",
    marginRight: "3vw",
    height: 40,
    //paddingLeft: '7vw',
    [theme.breakpoints.down("xs")]: {
      height: 60,
      padding: 10,
      margin: 0,
    },
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  step: {
    minHeight:'400px',
    marginLeft:"1em",
    marginRight:"1em"
  },
  stepperBig:{
    background: 'none',
    maxWidth:1000,
    margin: "auto",

  },
  grow: {
    flexGrow: 1,
  },
  secondNav:{
    background: 'none',
    maxWidth:"100%",
    //boxShadow: "0 3px 5px -1px rgba(0, 0, 0, 0.2)",
    //backgroundColor: "#fafafa",
    //marginTop: 75,
    fontWeight:'bold'
  },
  nav: {
    width: '100%',
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between'
  },
  profiles:{
    textAlign: 'right '
  },
  container:{
    marginTop: "3em",
    marginBottom: "200px",
    marginLeft:"auto",
    marginRight:"auto",
    maxWidth: 1400
  },
  usps: {
    //flexGrow: 1
  },
  appBar: {
    //position: 'relative',
  },
  toolbar: {
    //justifyContent:'space-between',
  },
});


class SolutionFinder2 extends React.Component {
  constructor(props){
    super(props)
    this.onFieldChange = this.onFieldChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  state = {
    activeStep: 0,
    skipped: new Set(),
    profiles: [],
    data: {
    }
  };

  isStepOptional = step => step === 2;

  handleNext = (skipSteps = undefined) => {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values());
      skipped.delete(activeStep);
    }

    if(skipSteps){
      for (let i = 1; i < skipSteps; i++) {
        skipped.add(activeStep+1+i)
      }
      this.setState({
        activeStep: activeStep + 1 + skipSteps,
        skipped,
      });
    }else{
      this.setState({
        activeStep: activeStep + 1,
        skipped,
      });
    }
  };

  handleBack = () => {
    if(this.state.activeStep === 0){
      //Router.back()
      Router.push("/")
    } else {
      this.setState(state => ({
        activeStep: state.activeStep - 1,
      }));
    }
  };

  handleSkip = () => {
    const { activeStep } = this.state;
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values());
      skipped.add(activeStep);
      return {
        activeStep: state.activeStep + 1,
        skipped,
      };
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  isStepSkipped(step) {
    return this.state.skipped.has(step);
  }

  onFieldChange(field){
    return (event,value,deepKey) => {
      let val = value || event.target.value
      let data = this.state.data
      let path = (deepKey) ? field + deepKey : field
      set(data, path, val)
      this.setState({ data })
    }
  }

  onSubmit(event, skipSteps = undefined){
    this.handleNext(skipSteps)
  }

  async onSignup(){
    //console.log('signup',this.state.data)
    //await store.service('signup').create(Object.assign({form:"onboardingFlow"},this.state.data))
    let { user, ...flowData } = this.state.data
    await onboardingSignup(user,flowData)
    this.handleNext()
  }

  render() {
    const { classes,t } = this.props;
    const { activeStep } = this.state;

    const numProfiles = this.state.profilesCount || parseInt(5000/(activeStep+1) - (Math.random()*500))
    const progress = activeStep*25;
    
    return (
      <React.Fragment>
       <div className={classes.root}>
          <div className={classes.secondNav}>
          <AppBar color={"inherit"}>
            <Toolbar>
              <Grid md={1}></Grid>
              <Grid md={2}>
                <Link href={"/"}>
                    <img
                      className={classes.logo}
                      src={"/static/images/01 Home/01-header/newlogo.png"}
                    />
                  </Link>
              </Grid>
              <Grid md={1}>
                  <div className={classes.nav}>
                        <Button
                          onClick={this.handleBack}
                          className={classes.button}
                        >
                          <Trans i18nKey={'common:back'}/>
                        </Button>
                  </div>
              </Grid>
              <Grid md={6}>
                  <Stepper activeStep={activeStep} className={classes.stepperBig}>
                        <Step key={0} ><StepLabel><Trans i18nKey='goal'/></StepLabel></Step>
                        <Step key={1} ><StepLabel><Trans i18nKey='industry'/></StepLabel></Step>
                        <Step key={2} ><StepLabel><Trans i18nKey='usecase'/></StepLabel></Step>
                        {/* <Step key={3} ><StepLabel><Trans i18nKey='registration'/></StepLabel></Step> */}
                  </Stepper>
              </Grid>
              <Grid md={1}>
                <div className={classes.nav}>
                {activeStep !== 0 &&
                      <div>
                        {activeStep === 2 &&
                        <Button className={classes.button} onClick={this.handleSkip}>
                          <Trans i18nKey='common:skip'/>
                        </Button>}
                      </div>
                      }
                </div>
              </Grid>
              </Toolbar>
           </AppBar>
            
            
          </div>
          <div className={classes.container}>
              <div className={classes.step}>
                  {activeStep === 0 && <Goal data={this.state.data.goal} onSubmit={this.onSubmit} onFieldChange={this.onFieldChange('goal')}/>}
                  {activeStep === 1 && <Industry data={this.state.data.industry} onSubmit={this.onSubmit} onFieldChange={this.onFieldChange('industry')}/>}
                  {activeStep === 2 && <Usecase data={this.state.data.usecase} industry={this.state.data.industry} onSubmit={this.onSubmit} onFieldChange={this.onFieldChange('usecase')}/>}
                  {activeStep === 3 && <Registration data={this.state.data.registration} onSubmit={this.onSubmit} onFieldChange={this.onFieldChange('registration')}/>}
                  {/* {activeStep === 4 && <Signup data={this.state.data.user || {}} onSubmit={this.onSubmit} onClose={this.handleBack} onFieldChange={this.onFieldChange("user")} onSignup={ _ => this.onSignup()}/>}
                  {activeStep === 5 && <ThankYou onClose={e => { location.href="/" }}/>} */}
              </div>
          </div>
              
          {/*<pre>{JSON.stringify(this.state.data,null,4)}</pre>
          <Typography color="inherit" align="center" variant="h4">
            Unsere Versprechen
          </Typography>
          <USPs/>*/}
          
        </div>
      </React.Fragment>
    );
  }
}

function ThankYou({onClose}){
  return   <Dialog open={true}>
    <DialogContent>
      <Typography variant="h6" gutterBottom>
        Success!
      </Typography>
      <Typography gutterBottom>
        We will send you your project details in the next 24 hours.
      </Typography>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose}>Close</Button>
    </DialogActions>
  </Dialog>
}

SolutionFinder2.propTypes = {
  classes: PropTypes.object,
};



export default withTranslation('onboarding')(withStyles(styles)(SolutionFinder2));
