import React from 'react';
import {
  AppBar,
  Container,
  makeStyles,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../AppContext';

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    // color: '#00008b',
    color: '#fff',
    fontFamily: 'Manrope',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();

  const { currency, setCurrency } = CryptoState();

  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push('/')}
              className={classes.title}
              variant="h6"
            >
              MT-Tracker
            </Typography>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={'USD'}>USD</MenuItem>
              <MenuItem value={'EUR'}>EUR</MenuItem>
              <MenuItem value={'NGN'}>NGN</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
