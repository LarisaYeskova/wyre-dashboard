import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState } from 'react';
import { Box, Button, Switch, Typography } from '@mui/material';
import Currency from './curency';

export default function Main() {
  const [amountArrow, setAmountArrow] = useState(true);
  const [showAll, setShowAll] = useState(true);

  const changeAmountArrow = () => setAmountArrow(!amountArrow);
  const changeShowAll = () => setShowAll(!showAll);
  return (
    <Box
      sx={{
        padding: '25px 50px',
        '@media screen and (max-width:  500px)': {
          padding: '5px 15px',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <Typography sx={{ display: 'block' }}>Test</Typography>
        <Switch defaultChecked color="default" />
        <Typography sx={{ display: 'block' }}>Production</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #f0f1ec',
          paddingBottom: '30px',
          marginBottom: '60px',
        }}
      >
        <Typography variant="h2" sx={{ display: 'block' }}>
          Hello, Nivasan!
        </Typography>
        <Box
          sx={{
            '@media screen and (max-width:  500px)': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          <Button
            sx={{
              '@media screen and (max-width:  500px)': {
                marginRight: '0',
              },
              marginRight: '25px',
              padding: '8px 25px',
              borderRadius: '8px',
              borderBottom: '1px solid #f0f1ec',
              borderRight: '1px solid  #f0f1ec',
              borderLeft: '1px solid  #f0f1ec',
              color: '#151515',
            }}
          >
            WITHDRAW
          </Button>
          <Button
            sx={{
              padding: '8px 25px',
              color: '#ffff',
              borderRadius: '8px',
              backgroundColor: '#151515',
            }}
          >
            DEPOSIT
          </Button>
        </Box>
      </Box>

      <Box>
        <Box sx={{ marginBottom: '20px' }}>
          <Typography variant="h3">Account Balances</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <Typography variant="h6" sx={{ display: 'block', color: '#cecbca' }}>
            CURRENCY
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              variant="h6"
              sx={{ display: 'block', marginRight: '10px', color: '#cecbca' }}
            >
              TOTAL
            </Typography>
            <Button sx={{ display: 'flex', alignItems: 'center' }} onClick={changeAmountArrow}>
              <Typography variant="h6" sx={{ color: '#cecbca', marginRight: '10px' }}>
                Amount
              </Typography>
              {amountArrow ? (
                <ArrowDownwardIcon sx={{ fontSize: 'small', color: '#cecbca' }} />
              ) : (
                <ArrowUpwardIcon sx={{ fontSize: 'small', color: '#cecbca' }} />
              )}
            </Button>
          </Box>
        </Box>
        <Box
          sx={[
            { display: 'flex', flexDirection: 'column' },
            amountArrow
              ? { display: 'flex', flexDirection: 'column' }
              : { display: 'flex', flexDirection: 'column-reverse' },
          ]}
        >
          {showAll && <Currency />}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
        <Button onClick={changeShowAll} sx={{ textTransform: 'none', marginRight: '20px' }}>
          <Typography variant="h5" sx={{ color: '#151515', marginRight: '10px' }}>
            Show all
            <Box></Box>
          </Typography>
          {showAll ? (
            <ArrowUpwardIcon sx={{ color: '#151515', fontSize: 'small' }} />
          ) : (
            <ArrowDownwardIcon sx={{ color: '#151515', fontSize: 'small' }} />
          )}
        </Button>
        <Button sx={{ textTransform: 'none' }}>
          <Typography variant="h5" sx={{ color: '#151515', marginRight: '10px' }}>
            View all Account Transactions
          </Typography>
          <ArrowForwardIcon sx={{ color: '#151515', fontSize: 'small' }} />
        </Button>
      </Box>
    </Box>
  );
}
