import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from './Carousel';

const useStyles = makeStyles(() => ({
  hero: {
    backgroundImage: 'url(./world.jpg)',
  },
  heroContent: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',
  },
  tagline: {
    display: 'flex',
    height: '40px',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={classes.hero}>
      <Container className={classes.heroContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: 'bold',
              marginBottom: 15,
              fontFamily: 'Manrope',
            }}
          >
            MT-Tracker
          </Typography>

          <Typography
            variant="subtitle2"
            style={{
              color: 'darkgrey',
              textTransform: 'capitalize',
              fontFamily: 'Manrope',
            }}
          >
            Get live stats about your favorite Crypto
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Hero;
