/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import { withTranslation } from '../../i18n'
import { Grid } from '@material-ui/core'
import { SectionHeadline, SectionSubHeadline } from '../../components/Components'
import IndustryCard from '../../components/IndustryCard'

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  list: {
    marginTop: '50px'
  },
  cover: {
    backgroundSize: 'auto 50% '
  }
});

function InvolvementCards(props) {
  const { classes, t, data, onFieldChange, onSubmit } = props;
  const involvements = t("involvements",{ returnObjects: true})
  if(typeof involvements === "string") return null

  return (
    <section className={classes.root}>
      <SectionHeadline>{t('involvement-question')}</SectionHeadline>
      <SectionSubHeadline>{t('involvement-subline')}</SectionSubHeadline>
      <Grid container spacing={8} className={classes.list}>
        {involvements.map((i, index) =>
          <React.Fragment key={i[0]}>
            <Grid item xs={6}>
              <IndustryCard
                classes={{cover: classes.cover}}
                avatar={`/static/images/07 Solution finder/${i[0].toLowerCase().replace(/\//, '-')}.png`}
                title={i[0]}
                description={i[1]} more={i[2]}
                onClick={e => {
                  onFieldChange(e, i[0].toLowerCase())
                  onSubmit(e)
              }} />

            </Grid>

          </React.Fragment>
        )}
      </Grid>
    </section>
  );
}

InvolvementCards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withTranslation('onboarding')(InvolvementCards));
