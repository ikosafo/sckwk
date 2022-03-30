import set from 'lodash/set'
import { Button, FormControl, Typography, withStyles } from '@material-ui/core'
import React from 'react'

import { ValidatorForm, TextValidator } from 'react-form-validator-components'
import { newsletterSignup } from '../helpers/hubspot'

const styles = theme => ({
    textField: {
      color: "inherit",
      paddingBottom: "1em",
      '.MuiInputBase-root': {
        borderBottomColor: 'inherit',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'inherit',
      },
      '& .MuiInput-underline:before': {
        borderBottomColor: 'inherit',
      },
      '& .MuiInput-underline:hover': {
        borderBottomColor: 'inherit',
      },
      '& .MuiInput': {
        borderBottomColor: 'inherit',
      },
    },
    whiteTextColor: {
      //color: theme.palette.primary.contrastText,
      color: 'inherit'
    },
    textFieldHorizontal: {
      paddingLeft: "1em",
      paddingBottom: 0
    },
    formControlHorizontal:{
      display: "flex",
      flexDirection: "row",
      color: 'inherit'
    },
    inputBaseHorizontal:{
      height: "100%",
      color: 'inherit'
    },
    squareButton:{
      borderRadius: 0,
      [theme.breakpoints.down('xs')]: {
        minWidth: "auto"
      }
    }

})

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
            <Typography color={"primary"} gutterBottom>Thank you for signing up to our newsletter. We will keep you posted.</Typography>
            :
            <FormControl className={isHorizontal ? classes.formControlHorizontal : ""} fullWidth>
              <TextValidator
                fullWidth
                required
                id="email"
                name="email"
                placeholder="email address"
                type="email"
                autoComplete="email"
                classes={{root:`${classes.textField} ${isHorizontal ? classes.textFieldHorizontal : ''}`}}
                InputProps={{
                  classes:{
                    root:classes.inputBaseHorizontal,
                    underline:classes.underline,
                  },
                  disableUnderline: isHorizontal
                }}
                InputLabelProps={{
                  classes:{
                    root: isHorizontal ? classes.formControlHorizontal : classes.whiteTextColor,
                    focused:classes.whiteTextColor
                  }
                }}
                value={data.email}
                onChange={e => this.onFieldChange(e, undefined, 'email')}
              />
              <Button variant={"contained"} color={'primary'} type='submit' size="large" className={classes.squareButton}>Send</Button>
            </FormControl>
          }
      </ValidatorForm>
    )
    }
}

export default withStyles(styles)(NewsletterSignup)









