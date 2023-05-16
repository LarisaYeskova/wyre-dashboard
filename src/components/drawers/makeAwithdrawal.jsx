import { Box, Button, Drawer, MenuItem, Select, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DRAWERS from '../../drawers';
import { styles } from './drawers.styles';

export default function MakeAwithDrawal({ drawers, setDrawers }) {
  return (
    <Drawer anchor={'right'} open={drawers.makeAwithdrawal} onClose={() => setDrawers(DRAWERS)}>
      <Box sx={styles.drawerBox}>
        <Box
          sx={{
            paddingBottom: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #f6f5f1',
            marginBottom: '40px',
          }}
        >
          <Box>
            <Typography>Withdraw</Typography>
          </Box>
          <Box
            sx={{
              width: '35px',
              height: '35px',
              borderRadius: '50%',
              border: '1px solid #f6f5f1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button onClick={() => setDrawers(DRAWERS)} sx={{ color: '#605f5b' }}>
              <CloseIcon />
            </Button>
          </Box>
        </Box>

        <Box>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: '20px' }}>
              Select withdraw amount
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5" sx={{ marginBottom: '40px' }}>
              Select the amount you`d like to withdraw into one of your linked payment<br></br>
              methods. To withdraw other wallets, please use the Transer action.
            </Typography>
          </Box>
          <Box
            sx={{
              borderRadius: '10px',
              borderBottom: '1px solid #f0f1ec',
              borderRight: '1px solid  #f0f1ec',
              borderLeft: '1px solid  #f0f1ec',
              padding: '10px',
              marginBottom: '50px',
            }}
          >
            <Box
              sx={{
                borderBottom: '1px solid #f0f1ec',
                marginBottom: '20px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '5px',
                }}
              >
                <Typography variant="h6" sx={{ color: '#dad9d7' }}>
                  WITHDRAW
                </Typography>
                <Typography variant="h6" sx={{ color: '#085240', fontWeight: 'bold' }}>
                  You have 1.816823832812e-9 ETH available
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <TextField
                  variant="outlined"
                  sx={{ '& fieldset': { border: 'none' }, $input: { fontSize: '30px' } }}
                  inputProps={{
                    style: { fontSize: '2rem' },
                  }}
                  placeholder="≡00000000"
                />
                <Select
                  value="ETH"
                  variant="standard"
                  sx={{
                    border: 'none',
                    '&::before': {
                      borderRadius: '10px',
                      borderBottom: '1px solid #f0f1ec',
                      borderRight: '1px solid  #f0f1ec',
                      borderLeft: '1px solid  #f0f1ec',
                    },
                  }}
                >
                  <MenuItem value="ETH">
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box>
                        <ArrowForwardIcon sx={{ color: '#151515', fontSize: 'small' }} />
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: '600' }}>
                          ETH
                        </Typography>
                      </Box>
                    </Box>
                  </MenuItem>
                </Select>
              </Box>
            </Box>
            <Box>
              <Typography>To</Typography>
              <Select
                value="AUD Bank account ending in 5701"
                variant="standard"
                sx={{
                  border: 'none',
                  '&::before': {
                    border: 'none',
                  },
                }}
                fullWidth
              >
                <MenuItem value="AUD Bank account ending in 5701">
                  <Typography variant="h5" sx={{ fontWeight: '600' }}>
                    AUD Bank account ending in 5701
                  </Typography>
                </MenuItem>
              </Select>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Button
              disabled
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
              Review
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
