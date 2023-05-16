import { Box, Button, MenuItem, Select, TextField, Typography, Drawer } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import australia from '../../assets/img/australia.png';
import DRAWERS from '../../drawers';
import { styles } from './drawers.styles';

export default function ExChange({ drawers, setDrawers }) {
  return (
    <>
      <Drawer
        sx={{ minWidth: '500px' }}
        anchor={'right'}
        open={drawers.exChange}
        onClose={() => setDrawers(DRAWERS)}
      >
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
              <Typography>Exchange</Typography>
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
                Exchange
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ marginBottom: '40px' }}>
                Select the currency & source of funds you'd like to transfer. Then select the
                currency & destination of the transfer.
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: '10px',
                borderBottom: '1px solid #f0f1ec',
                borderRight: '1px solid  #f0f1ec',
                borderLeft: '1px solid  #f0f1ec',
                padding: '10px',
                marginBottom: '20px',
              }}
            >
              <Box
                sx={{
                  borderBottom: '1px solid #f0f1ec',
                  marginBottom: '20px',
                }}
              >
                <Box sx={{ marginBottom: '5px' }}>
                  <Typography variant="h6" sx={{ color: '#dad9d7' }}>
                    YOU SEND
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <TextField
                    variant="outlined"
                    sx={{ '& fieldset': { border: 'none' }, $input: { fontSize: '30px' } }}
                    inputProps={{
                      style: { fontSize: '2rem' },
                    }}
                    placeholder="$0.00"
                  />
                  <Select
                    value="USD"
                    variant="standard"
                    sx={{
                      padding: '0 10px 0 10px',
                      border: 'none',
                      '&::before': {
                        borderRadius: '10px',
                        borderBottom: '1px solid #f0f1ec',
                        borderRight: '1px solid  #f0f1ec',
                        borderLeft: '1px solid  #f0f1ec',
                      },
                    }}
                  >
                    <MenuItem value="USD">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>
                          <img src={australia} alt="australia" />
                        </Box>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: '600' }}>
                            USD
                          </Typography>
                        </Box>
                      </Box>
                    </MenuItem>
                  </Select>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: '#dad9d7' }}>
                  FROM
                </Typography>
                <Select
                  value="USD"
                  variant="standard"
                  sx={{
                    padding: '0 10px 0 10px',
                    border: 'none',
                    '&::before': {
                      border: 'none',
                    },
                  }}
                  fullWidth
                >
                  <MenuItem value="USD">
                    <Box sx={{ display: 'flex' }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: '600', display: 'block', marginRight: '5px' }}
                      >
                        Account balance
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: '600', color: '#085240', display: 'block' }}
                      >
                        0 USD
                      </Typography>
                    </Box>
                  </MenuItem>
                </Select>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Button>
                <Box
                  sx={{
                    borderRadius: '50%',
                    padding: '5px',
                    backgroundColor: '#0117fe',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <SwapVertIcon />
                </Box>
              </Button>
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
                <Box sx={{ marginBottom: '5px' }}>
                  <Typography variant="h6" sx={{ color: '#dad9d7' }}>
                    YOU RECEIVE
                  </Typography>
                </Box>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                >
                  <TextField
                    variant="outlined"
                    sx={{ '& fieldset': { border: 'none' }, $input: { fontSize: '30px' } }}
                    inputProps={{
                      style: { fontSize: '2rem' },
                    }}
                    placeholder="$0.0000000"
                  />
                  <Select
                    value="USD"
                    variant="standard"
                    sx={{
                      padding: '0 10px 0 10px',
                      border: 'none',
                      '&::before': {
                        borderRadius: '10px',
                        borderBottom: '1px solid #f0f1ec',
                        borderRight: '1px solid  #f0f1ec',
                        borderLeft: '1px solid  #f0f1ec',
                      },
                    }}
                  >
                    <MenuItem value="USD" sx={{ color: 'red' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>
                          <img src={australia} alt="australia" />
                        </Box>
                        <Box>
                          <Typography variant="h5" sx={{ fontWeight: '600' }}>
                            USD
                          </Typography>
                        </Box>
                      </Box>
                    </MenuItem>
                  </Select>
                </Box>
              </Box>
              <Box>
                <Typography variant="h6" sx={{ color: '#dad9d7' }}>
                  TO
                </Typography>
                <Select
                  value="USD"
                  variant="standard"
                  sx={{
                    padding: '0 10px 0 10px',
                    color: '#bbbbbb',
                    fontWeight: '600',
                    border: 'none',
                    '&::before': {
                      border: 'none',
                    },
                  }}
                  fullWidth
                >
                  <MenuItem value="USD">
                    <Box sx={{ display: 'flex' }}>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: '600', display: 'block', marginRight: '5px' }}
                      >
                        Account balance
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontWeight: '600', color: '#085240', display: 'block' }}
                      >
                        0 USD
                      </Typography>
                    </Box>
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
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
