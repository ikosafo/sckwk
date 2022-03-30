import set from 'lodash/set'
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
import React from 'react'
import { ValidatorForm } from 'react-form-validator-core'
import { contactUs } from '../../helpers/hubspot'
//import store from '../../services/feathers'

let TextField = withStyles({
  root: {
    marginBottom: 20
  },
})(TextFieldRaw);

class ContactForm extends React.Component {
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
      <ValidatorForm onSubmit={ e=> this.signup()} >
          <Container> 
            <ThankYouDialog open={thankYou} data={thankYouData} onClose={e => this.setState({thankYou:false})}/>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='firstName'
                  name='firstName'
                  label='First name'
                  fullWidth
                  variant={"outlined"}
                  value={data.firstName || ''}
                  autoComplete='fname'
                  onChange={e => this.onFieldChange(e, undefined, 'firstName')}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='lastName'
                  name='lastName'
                  label='Last name'
                  fullWidth
                  autoComplete='lname'
                  variant={"outlined"}
                  value={data.lastName || ''}
                  onChange={e => this.onFieldChange(e, undefined, 'lastName')}
                />
              </Grid>
            </Grid>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  type="email"
                  autoComplete="email"
                  //validators={['required', 'isEmail']}
                  //errorMessages={['Please enter a valid email address.', 'Please enter a valid email address.', 'This provider ist not allowed - Please use a different email address.']}
                  value={data.email || ""}
                  variant={"outlined"}
                  onChange={e => this.onFieldChange(e, undefined, 'email')}
                />
                <TextField
                  required
                  id="company"
                  name="company"
                  label="Company"
                  fullWidth
                  autoComplete="company"
                  value={data.company || ""}
                  variant={"outlined"}
                  onChange={e => this.onFieldChange(e, undefined, 'company')}
                />
                <TextField
                  required
                  id="position"
                  name="position"
                  label="Position"
                  fullWidth
                  autoComplete="position"
                  value={data.position || ""}
                  variant={"outlined"}
                  onChange={e => this.onFieldChange(e, undefined, 'position')}
                />
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  placeholder={'+49 89 123456789'}
                  fullWidth
                  autoComplete="phone"
                  value={data.phone || ""}
                  variant={"outlined"}
                  onChange={e => this.onFieldChange(e, undefined, 'phone')}
                />
              <TextField
                multiline
                id="comment"
                name="comment"
                label="Your query"
                fullWidth
                value={data.comment || ""}
                variant={"outlined"}
                onChange={e => this.onFieldChange(e, undefined, 'comment')}
              />
              <FormControlLabel
                control={<Checkbox color="secondary" name="newsletterOptIn" checked={data.newsletterOptIn || false}/>}
                label="Please keep me up to date with regular news."
                onChange={(e, checked) => this.onFieldChange(e, checked, 'newsletterOptIn')}
              />
              <Button type='submit' variant={"outlined"} color={'secondary'}>Send</Button>
        </Container>
      </ValidatorForm>
    )
    }
}

const Container = ({children}) =>
        <Grid container spacing={0} style={{textAlign:"left"}} alignContent={"center"} justify={"center"}>
          <Card style={{maxWidth:600}}>
            <CardHeader title={"Get in touch with us"}/>
            <CardContent>
              {children}
            </CardContent>
          </Card>
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

export default ContactForm