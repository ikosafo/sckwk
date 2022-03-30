import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    display: 'flex',
    cursor: 'pointer',
    height: '100%',
    boxShadow: false,
  },
  avatar: {
    flexShrink: 1
  },
  chips: {
    flexShrink: 1,
  },
  profile: {
    flexGrow: 2
  },
  content: {
    padding: "10px 25px" ,
    display: 'flex',
    alignItems: 'center',
    textAlign:'left',
    "&:hover":{
      borderRadius: 4,
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14)",
      color: theme.palette.primary.main
    }
  },
  cover: {
    width: 25,
    margin: "0 15px"
  },
  bigAvatar: {
    margin: 20,
    width: 80,
  },
});

function IconCard(props) {
  const { classes, theme, avatar, title,description,more, ...rest } = props;

  return (
    <div className={classes.card} onClick={props.onClick} {...rest}>
      <img
        className={classes.cover}
        src={avatar}
      />
      <div className={classes.content}>
        <div className={classes.profile}>
          <Typography variant="body1">
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
}

IconCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(IconCard);
