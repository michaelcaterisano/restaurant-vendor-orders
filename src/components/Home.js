import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
  },
  hero: {
    marginBottom: 10,
  },
  paragraph: {
    textAlign: 'center',
  },
};

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        className={classes.root}
        alignItems={'center'}
        direction={'column'}
      >
        <Grid item xs={12}>
          <Typography variant="display2" className={classes.hero}>
            Hi! Testing github.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1" className={classes.paragraph}>
            Go add some categories, vendors, units, and delivery locations on
            the <Link to="/settings">settings page</Link>.
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);
