/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { withTranslation } from '../../i18n'
import { FormControl, FormControlLabel, Grid, Radio, RadioGroup } from '@material-ui/core'
import { SectionHeadline, SectionSubHeadline } from '../../components/Components'

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  list: {
    marginTop: '50px'
  }
});

function Involvement(props) {
  const { classes, t, data, onFieldChange, onSubmit } = props;
  const involvements = t("involvements",{ returnObjects: true})
  if(typeof involvements === "string") return null

  return (
    <section className={classes.root}>
      <SectionHeadline>{t('involvement-question')}</SectionHeadline>
      <SectionSubHeadline>{t('involvement-subline')}</SectionSubHeadline>
        <Grid container spacing={24} className={classes.list}>
          <Grid item xs={12}>
            <FormControl component="fieldset" >
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                value={data}
                onChange={ (event,value) => {
                  onFieldChange(event,value)
                  onSubmit(event)
                }}
              >
                {Object.entries(involvements).map( ([key,value]) =>
                  <FormControlLabel value={key} key={key} control={<Radio />} label={value} /> )}
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
    </section>
  );
}

Involvement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withTranslation('onboarding')(Involvement));
