import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import australia from '../../../assets/img/australia.png';

export default function SelectAmount({ selectDepositMethod }) {
  const [quantity, setQuantity] = useState('');

  const inputQuantity = (e) => {
    setQuantity(e.currentTarget.value);
  };

  return (
    <Box>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: '15px' }}>
          Select deposit amount
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ marginBottom: '40px' }}>
          Enter the amount you`d like to deposit into your acount balance.<br></br>
          To deposit crypto currency, tap "View wallet address" below.
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ color: '#dad9d7' }}>
        DEPOSIT
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #f6f5f1',
          marginBottom: '10px',
        }}
      >
        <Box>
          <TextField
            onChange={inputQuantity}
            variant="outlined"
            sx={{ '& fieldset': { border: 'none' }, $input: { fontSize: '30px' } }}
            inputProps={{
              style: { fontSize: '2rem' },
            }}
            placeholder="$0.00"
          >
            $
          </TextField>
        </Box>
        <Button
          sx={{
            borderRadius: '10px',
            borderBottom: '1px solid #f0f1ec',
            borderRight: '1px solid  #f0f1ec',
            borderLeft: '1px solid  #f0f1ec',
          }}
        >
          <img src={australia} alt="australia" style={{ marginRight: '10px' }} />
          <Typography>AUD</Typography>
        </Button>
      </Box>
      <Box sx={{ borderBottom: '1px solid #f6f5f1', paddingBottom: '40px', marginBottom: '30px' }}>
        <Box>
          <Typography variant="h6" sx={{ color: '#dad9d7' }}>
            FROM
          </Typography>
        </Box>
        <Box>
          <Select
            value={'AUD Bank account ending in 5701'}
            variant="standard"
            sx={{
              padding: '10px 0 10px 0',
              border: 'none',
              '&::before': {
                borderRadius: '10px',
                borderBottom: '1px solid #f6f5f1',
              },
            }}
            fullWidth
          >
            <MenuItem selected value={'AUD Bank account ending in 5701'}>
              <Typography variant="h5" sx={{ fontWeight: '600' }}>
                AUD Bank account ending in 5701
              </Typography>
            </MenuItem>
          </Select>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '50px',
        }}
      >
        <Box>
          <Typography variant="h5" sx={{ color: '#dad9d7' }}>
            I`m depositing crypto
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={() => selectDepositMethod('walletAdress')}
            sx={{
              ':hover': {
                backgroundColor: '#e8efff',
                color: '#4552a6',
              },
              color: 'black',
              fontWeight: '600',
              borderRadius: '10px',
              borderBottom: '1px solid #f0f1ec',
              borderRight: '1px solid  #f0f1ec',
              borderLeft: '1px solid  #f0f1ec',
            }}
          >
            View wallet address
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
        <Button
          onClick={() => selectDepositMethod('depositMethod')}
          disabled={!quantity}
          sx={{
            borderRadius: '10px',
            padding: '10px 20px',
            color: '#ffffff',
            backgroundColor: '#151515',
            '&.Mui-disabled': {
              background: '#eaeaea',
              color: '#c0c0c0',
            },
          }}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
