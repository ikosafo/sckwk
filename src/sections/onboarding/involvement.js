/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/lab/Slider'
import { withStyles } from '@material-ui/core/styles'
import { Trans, withTranslation } from '../../i18n'
import { Grid } from '@material-ui/core'
import { SectionHeadline, SectionSubHeadline } from '../../components/Components'

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  list: {
    marginTop: '150px'
  }
});

function Involvement(props) {
  const { classes, t } = props;

  return (
    <section className={classes.root}>
      <SectionHeadline>{t('involvement-question')}</SectionHeadline>
      <SectionSubHeadline>{t('involvement-subline')}</SectionSubHeadline>
        <Grid container spacing={24} className={classes.list}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom align="left">
              <Trans i18nKey='involvement-yes'/>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="subtitle1" gutterBottom align="left">
              <Trans i18nKey='involvement-internal'/>
            </Typography>
          </Grid>
          <Grid item xs={6}/>
          <Grid item xs={3} >
            <Typography variant="subtitle1" align="right">
              <Trans i18nKey='involvement-external'/>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Slider
              value={props.data || 50}
              aria-labelledby="label"
              onChange={ (event,value) => props.onFieldChange(event,value )}
            />
          </Grid>
        </Grid>
    </section>
  );
}

Involvement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withTranslation('onboarding')(Involvement));
