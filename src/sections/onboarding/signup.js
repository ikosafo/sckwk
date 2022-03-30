/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel
} from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'

import { ValidatorForm } from 'react-form-validator-core'
import { TextValidator } from 'react-material-ui-form-validator'

const styles = theme => ({
  root: {
    textAlign: 'center'
  },
  nav: {
    marginTop: theme.spacing.unit,
    textAlign: 'right'
  },
  box: {
    display: 'flex',
    alignItems: 'flex-center',
    textAlign: 'left',
    cursor: 'pointer'
  },
  card: {
    flexGrow: 1
  }
})

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: []
    }
  }

  render () {
    const { classes, onFieldChange, data} = this.props
    let variant = 'outlined'
    return (
      <Dialog open onClose={this.props.onClose}>
        <DialogTitle id="max-width-dialog-title">One step away from your specific proposal</DialogTitle>
        <ValidatorForm
          onSubmit={this.props.onSignup}
          onError={errors => this.setState({submitTriggered: true})}
          >
          <DialogContent>
            <DialogContentText>
              We appreciate and value your trust! Leave us your contact details to get your tailored Complimentary setup offer.
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='firstName'
                  name='firstName'
                  label='First name'
                  fullWidth
                  value={data.firstName || ''}
                  autoComplete='fname'
                  variant={variant}
                  onChange={e => onFieldChange(e, undefined, '.firstName')}
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
                  value={data.lastName || ''}
                  variant={variant}
                  onChange={e => onFieldChange(e, undefined, '.lastName')}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='position'
                  name='position'
                  label='Position'
                  fullWidth
                  value={data.position || ''}
                  autoComplete='fname'
                  variant={variant}
                  onChange={e => onFieldChange(e, undefined, '.position')}
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id='company'
                  name='company'
                  label='Company'
                  fullWidth
                  autoComplete='company'
                  value={data.company || ''}
                  variant={variant}
                  onChange={e => onFieldChange(e, undefined, '.company')}
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id='phone'
                  name='phone'
                  label='Phone'
                  placeholder={'+49 89 123456789'}
                  fullWidth
                  autoComplete='phone'
                  value={data.phone || ''}
                  variant={variant}
                  onChange={e => onFieldChange(e, undefined, '.phone')}
              />
              </Grid>
              <Grid item xs={12}>
                <TextValidator
                  required
                  id='email'
                  name='email'
                  label='Email'
                  fullWidth
                  type='email'
                  autoComplete='email'
                  value={data.email || ''}
                  validators={['required', 'isEmail']}
                  variant={variant}
                  errorMessages={['Please enter a valid email address.', 'Please enter a valid email address.', 'This provider ist not allowed - Please use a different email address.']}
                  onChange={e => onFieldChange(e, undefined, '.email')}
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  id='comment'
                  name='comment'
                  label='Comment'
                  placeholder='add more information here, if required...'
                  fullWidth
                  value={data.comment || ''}
                  variant={variant}
                  onChange={e => onFieldChange(e, undefined, '.comment')}
              />
              </Grid>

              {<Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color='secondary' name='newsletterOptIn' checked={data.newsletterOptIn || false} />}
                  label='Please keep me up to date with regular news.'
                  onChange={(e, checked) => onFieldChange(e, checked, '.newsletterOptIn')}
              />
              </Grid>}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button type='submit'>submit</Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    )
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Signup)
