import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import parse from 'html-react-parser';
import { display } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CryptoState } from '../AppContext';
import CoinInfo from '../components/CoinInfo';
import { SingleCoin } from '../config/api';
import { numberWithCommas } from '../components/Hero/Carousel';

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setCoin(data);
  };

  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    sidebar: {
      width: '30%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 25,
      borderRight: '2px solid grey',
    },
    heading: {
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily: 'Manrope',
    },
    description: {
      width: '100%',
      fontFamily: 'Manrope',
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: 'justify',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading}>
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description}>
          {coin?.description.en.split('. ')[0]}.
        </Typography>

        <div className={classes.marketData}>
          <span style={{ display: 'flex' }}>
            <Typography variant="h5" className={classes.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: 'Manrope' }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>

          <span style={{ display: 'flex' }}>
            <Typography variant="h5" className={classes.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: 'Manrope' }}>
              {symbol}
              {''}
              {/* Bug */}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>

          <span style={{ display: 'flex' }}>
            <Typography variant="h5" className={classes.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant="h5" style={{ fontFamily: 'Manrope' }}>
              {coin?.market_cap_rank}
            </Typography>
          </span>
        </div>
      </div>

      {/* chart */}
      <div>
        <CoinInfo coin={coin} />
      </div>
    </div>
  );
};

export default CoinPage;
