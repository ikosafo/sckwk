/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import QuestionAutosuggest from '../../components/QuestionAutosuggest'
import { withTranslation } from '../../i18n'
import { SectionHeadline, SectionSubHeadline } from '../../components/Components'

const styles = theme => ({
  root: {
    textAlign: 'center',
  },
  list: {
    marginTop: '150px'
  }
});

function Question(props) {
  const { classes, t } = props;
  const suggestions = t("questions",{ returnObjects: true}).map(q => { return { label: q } })

  return (
    <section className={classes.root}>
      <SectionHeadline>{t('question-question')}</SectionHeadline>
      <SectionSubHeadline>{t('question-subline')}</SectionSubHeadline>
      <div className={classes.list}>
        <QuestionAutosuggest
          onChange={ (event,{newValue}) => props.onFieldChange(event,newValue )}
          onEnter={props.onSubmit}
          value={props.data}
          suggestions={suggestions}
          placeholder={t('question-placeholder')}/>
      </div>
    </section>
  );
}

Question.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(withTranslation('onboarding')(Question));
