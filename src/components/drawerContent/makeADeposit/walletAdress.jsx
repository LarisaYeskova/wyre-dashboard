import { Box, Button, MenuItem, Select, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import code from '../../../assets/img/pngwing.com.png';

export default function WalletAdress({ selectDepositMethod }) {
  return (
    <Box>
      <Box>
        <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: '20px' }}>
          Your wallet adress
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid #f6f5f1',
          marginBottom: '30px',
          paddingBottom: '30px',
        }}
      >
        <Box sx={{ border: '1px solid #f6f5f1' }}>
          <img src={code} alt="code" style={{ width: '300px' }} />
        </Box>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography variant="h6" sx={{ color: '#dad9d7', textTransform: 'uppercase' }}>
          currency
        </Typography>
        <Select
          value="BTC"
          variant="standard"
          sx={{
            padding: '10px 5px 10px 5px',
            border: 'none',
            '&::before': {
              borderRadius: '10px',
              borderBottom: '1px solid #f6f5f1',
            },
          }}
          fullWidth
        >
          <MenuItem value="BTC">
            <Typography variant="h5" sx={{ fontWeight: '600' }}>
              BTC
            </Typography>
          </MenuItem>
        </Select>
      </Box>
      <Box sx={{ marginBottom: '10px' }}>
        <Typography variant="h6" sx={{ color: '#dad9d7', textTransform: 'uppercase' }}>
          wallet adress
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid #f6f5f1',
          borderRight: '1px solid  #f0f1ec',
          borderLeft: '1px solid  #f0f1ec',
          borderRadius: '10px',
          padding: '10px 0 10px 10px',
          marginBottom: '50px',
        }}
      >
        <Box>
          <Box>
            <Typography>1rqqq1yMkdla897knJHNkjlN</Typography>
          </Box>
        </Box>

        <Button sx={{ color: 'black' }}>
          <ContentCopyIcon sx={{ fontSize: 'small ' }} />
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Button
          sx={{ textTransform: 'none', color: 'black', fontSize: '16px', fontWeight: '600' }}
          onClick={() => selectDepositMethod('selectAmount')}
        >
          Back
        </Button>
        <Button
          // disabled={!acceptTerms}
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
