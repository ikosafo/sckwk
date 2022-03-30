/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import DataSourceTable from '../../components/DataSourceTable'
import { i18n, Link, Trans, withTranslation } from '../../i18n'

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  list: {
    marginTop: '80px'
  }
});

function Datasources(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Typography variant="h4" gutterBottom>
        <Trans i18nKey='datasource-question'/>
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <Trans i18nKey='datasource-subline'/>
      </Typography>
      <div className={classes.list}>
        <DataSourceTable onFieldChange={props.onFieldChange} data={props.data}/>
      </div>
    </section>
  );
}

Datasources.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withTranslation('onboarding')(withStyles(styles)(Datasources));
