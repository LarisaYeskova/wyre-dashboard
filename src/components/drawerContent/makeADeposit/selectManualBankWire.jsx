import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';

export default function SelectManualBankWire({ selectDepositMethod }) {
  const [acceptTerms, setAcceptTerms] = useState(false);

  const acceptTermsChange = () => {
    setAcceptTerms(!acceptTerms);
  };
  return (
    <Box>
      <Box sx={{ marginBottom: '50px' }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: '15px' }}>
            Manual Bank Wire
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ marginBottom: '40px' }}>
            Review the details below and then follow the inctructions on the
            <br></br>next screen to send a manual bank wire
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #f6f5f1',
            marginBottom: '20px',
            paddingBottom: '30px',
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              AUD Bank account ending in 5701
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">-----5701</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <Box sx={{ display: 'flex' }}>
            <Typography variant="h6" sx={{ marginRight: '10px', color: '#dad9d7' }}>
              NOTE
            </Typography>
            <Typography variant="h6" sx={{ marginRight: '10px', color: '#dad9d7' }}>
              FOR
            </Typography>
            <Typography variant="h6" sx={{ marginRight: '10px', color: '#dad9d7' }}>
              OUR
            </Typography>
            <Typography variant="h6" sx={{ marginRight: '10px', color: '#dad9d7' }}>
              TEAM
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: '#dad9d7' }}>
              OPTIONAL
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            borderBottom: '1px solid #f6f5f1',
            borderRight: '1px solid  #f0f1ec',
            borderLeft: '1px solid  #f0f1ec',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        >
          <TextField
            placeholder="Enter message..."
            fullWidth
            variant="outlined"
            sx={{
              '& fieldset': { border: 'none' },
              $input: {
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'black',
              },
            }}
            inputProps={{
              style: { fontSize: '16px' },
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid #f6f5f1',
            marginBottom: '20px',
            paddingBottom: '30px',
          }}
        >
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Nivasan <br></br>Babu <br></br>Srinivasan
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ color: '#dad9d7' }}>
              rivasan.babusrinivasan@marketplace.com
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ color: '#dad9d7' }}>
              +61481320052
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '50px' }}>
          <Box>
            <Typography variant="h6" sx={{ color: '#dad9d7', textTransform: 'uppercase' }}>
              Estinadet Arrival{' '}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              Invalid Date{' '}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ color: '#dad9d7', textTransform: 'uppercase' }}>
              Wyre fee{' '}
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              0.00 USD{' '}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox
            onClick={acceptTermsChange}
            checked={acceptTerms}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon sx={{ color: '#085240' }} />}
          />
          <Box>
            <Typography>I accept Terms of Use</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button
          sx={{ textTransform: 'none', color: 'black', fontSize: '16px', fontWeight: '600' }}
          onClick={() => selectDepositMethod('depositMethod')}
        >
          Back
        </Button>
        <Button
          disabled={!acceptTerms}
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
          onClick={() => selectDepositMethod('selectAmount')}
        >
          Continue
        </Button>
      </Box>
    </Box>
  );
}
