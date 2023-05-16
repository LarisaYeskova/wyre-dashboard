import { Box, Button, Checkbox, Typography } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

export default function SelectMethod({ selectDepositMethod }) {
  const [select, setSelect] = useState('');
  const changeSelect = () => {
    setSelect(!select);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box sx={{ marginBottom: '50px' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: '15px' }}>
            Select deposit method
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ marginBottom: '40px' }}>
            Direct Withdrawal (ACH) is easier and fee-free, while Manual Wire<br></br>
            Transfer is faster and unlimited, but requires you to manually send<br></br>
            money from your bank, which may change fees.
          </Typography>
        </Box>
        <Box>
          <Button
            onClick={changeSelect}
            fullWidth
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'start',
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: '600', color: 'black', textTransform: 'none' }}
              >
                Direct Withdrawal
              </Typography>
              <Typography variant="h5" sx={{ color: 'black', textTransform: 'none' }}>
                Use ACH to withdrawal from bank (US only)
              </Typography>
            </Box>
            <Box>
              <Checkbox
                checked={select}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon sx={{ color: '#085240' }} />}
              />
            </Box>
          </Button>
        </Box>
        <Box>
          <Button
            onClick={changeSelect}
            fullWidth
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textAlign: 'start',
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: '600', color: 'black', textTransform: 'none' }}
              >
                Manual Wire Tranfer
              </Typography>
              <Typography variant="h5" sx={{ color: 'black', textTransform: 'none' }}>
                Send a wire through your online banking
              </Typography>
            </Box>
            <Box>
              <Checkbox
                checked={select}
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<CheckCircleIcon sx={{ color: '#085240' }} />}
              />
            </Box>
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button
          sx={{ textTransform: 'none', color: 'black', fontSize: '16px', fontWeight: '600' }}
          onClick={() => selectDepositMethod('selectAmount')}
        >
          Back
        </Button>
        <Button
          disabled={!select}
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
          onClick={() => selectDepositMethod('manualWireBank')}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
