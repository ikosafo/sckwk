/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Checkbox, Grid } from '@material-ui/core'

import ProfileCard from '../../components/ProfileCard'
import { Trans, withTranslation } from '../../i18n'

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  nav: {
    marginTop: theme.spacing.unit,
    textAlign: 'right'
  },
  box:{
    display: 'flex',
    alignItems: 'flex-center',
    textAlign: 'left',
    cursor: 'pointer'
  },
  card: {
    flexGrow: 1
  }
});

class Profiles extends React.Component {

  static defaultProps = {
    datasources: []
  }

  constructor(props){
    super(props)
    this.state={
      selected: [],
      profiles: []
    }
  }

  async componentDidMount () {

  }

  onChange(id){

    let indexOccured = this.state.selected.indexOf(id)
    let selected = this.state.selected
    if(indexOccured === -1){
      selected.push(id)
    } else {
      this.state.selected.splice(indexOccured,1)
    }
    this.setState({selected})
    this.props.onFieldChange(null,selected)
  }

  render(){
    const { classes, onFieldChange } = this.props;
    return (
      <React.Fragment>
        <section className={classes.root}>
          <Typography variant="h4" gutterBottom>
            <Trans i18nKey='profiles-question'/>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <Trans i18nKey='profiles-subline'/>
          </Typography>
          <Grid container spacing={24} className={classes.list}>
            {this.props.profiles.slice(0,6).map( (profile) =>
              <Grid item xs={6} key={profile._id}>
                <div className={classes.box} onClick={e => this.onChange(profile._id)}>
                  <Checkbox checked={this.state.selected.indexOf(profile._id) !== -1}/>
                  <ProfileCard className={classes.card} avatar={profile._source.portrait} headline={profile._source.shortName} subline={profile._source.title} chips={profile._source.skills2}/>
                </div>
              </Grid>
            )}
          </Grid>
        </section>
      </React.Fragment>
    );
  }
}

Profiles.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withTranslation('onboarding')(Profiles));