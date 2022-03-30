import set from 'lodash/set'
import '../../../pages/styles.css'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  Grid,
  Typography,
  withStyles
} from '@material-ui/core'
import TextFieldRaw from '@material-ui/core/TextField'
//import Head from 'next/head'
import React from 'react'
//import { ValidatorForm } from 'react-form-validator-core'
import { contactUs } from '../../helpers/hubspot'
//import store from '../../services/feathers'

let TextField = withStyles({
  root: {
    marginBottom: 20,
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#eff0f6"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#eff0f6"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#eff0f6"
    }
  },
  MuiInputLabel: {
    root: {
      fontSize: "10px"
    },
    outlined: {
      transform: "translate(14px, 19px) scale(1)"
    }
  }
})(TextFieldRaw);

class Registration extends React.Component {
  state = {
    data:{},
    thankYou: false,
    thankYouData: {}
  }
  onFieldChange(event,value,deepKey) {
      let field = ""
      let val = value || event.target.value
      let data = this.state.data
      let path = (deepKey) ? field + deepKey : field
      set(data, path, val)
      this.setState({ data })
  }
  async signup(){
    //await store.service('signup').create(Object.assign({form:"contact"},this.state.data))
    await contactUs(this.state.data)
    this.setState({ thankYou: true, data:{}, thankYouData: this.state.data })
  }
  render(){

    let { data, thankYou, thankYouData } = this.state
    return (
      <div style={{backgroundColor:'#f7f7fc',margin:'10px',textAlign:"center"}}>
         <h3 className="MuiTypography-root MuiTypography-h3 MuiTypography-gutterBottom" 
            style={{paddingTop:"60px",textAlign:"center"}}>Almost Ready ...
         </h3>
         <p className="MuiTypography-root MuiTypography-body1" 
         style={{marginTop:"-50px",marginBottom:"30px",textAlign:"center"}}>
            Speak to an expert about the challenges you want to solve.
         </p>

         <iframe src="https://calendar.x.ai/ulrichbusch/virtual/?header=1" 
         style={{width: "100%", height: "100vh", border: "none"}} scrolling="auto"> </iframe>

          {/* <Head>
            <script type="text/javascript" 
            src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js">
            </script>
          </Head>
          <div class="meetings-iframe-container" 
          data-src="https://meetings.hubspot.com/ulrich-busch?embed=true"></div> */}


        </div>
     )
    }
}

const Container = ({children}) =>
        <Grid container spacing={0} style={{textAlign:"left"}} alignContent={"center"} justify={"center"}>
          <div style={{maxWidth:600}}>
            {/* <CardHeader title={"Get in touch with us"}/> */}
            <CardContent>
              {children}
            </CardContent>
          </div>
        </Grid>

const ThankYouDialog = ({open,onClose,data}) => 
  <Dialog open={open}>
        <DialogContent>
          <Typography variant="h6" gutterBottom>
            Thank You {data.name}
          </Typography>
          <Typography gutterBottom>
            We will get in touch with you.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>OK</Button>
        </DialogActions>
      </Dialog>

export default Registration