import set from 'lodash/set'
import { Button, FormControl, Typography,Checkbox,FormControlLabel,Grid } from '@material-ui/core'
import React from 'react'

import { ValidatorForm, TextValidator } from 'react-form-validator-components'
import { newsletterSignup } from '../helpers/hubspot'


class NewsletterSignup extends React.PureComponent {
  state = {
    data:{},
    thankYou:false
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
    //await store.service('signup').create(Object.assign({form:"newsletter"},this.state.data))
    await newsletterSignup(this.state.data.email)
    this.setState({ thankYou: true, data:{}, thankYouData: this.state.data })
  }
  render(){
    let { data,thankYou } = this.state
    let { classes, variant } = this.props
    let isHorizontal = variant === "row"


    return (

      <ValidatorForm onSubmit={ e=> this.signup()} >
          {thankYou ? 
            <Typography color={"primary"} gutterBottom>
              Thank you for signing up to our newsletter. We will keep you posted.</Typography>
            :
            
            <div className="parent-wrapper">
            <div className="subscribe-wrapper">
                <Typography variant={"h3"} style={{fontFamily:"Montserrat",fontSize:"35px"}}>
                    Subscribe to our newsletter
                </Typography>
                <input 
                type="email" 
                id="email"
                name="email"
                className="subscribe-input" 
                placeholder="Your e-mail address *"
                autoComplete="email"
                value={data.email}
                onChange={e => this.onFieldChange(e, undefined, 'email')} />
                
                <div className="submit-btn" type='submit' style={{fontFamily:"Montserrat"}}>SUBMIT</div>
                
                <FormControlLabel style={{marginTop:"150px",paddingTop:"13px",paddingLeft:"13px",color:"#ffffff",fontFamily:"Montserrat"}}
                control={<Checkbox name="newsletterOptIn" style={{color:"#ffffff",fontFamily:"Montserrat"}}/>}
                label="Please keep me up to date with regular news."
            />
                
                </div>
            </div>
          }
      </ValidatorForm>
    )
    }
}

export default NewsletterSignup









