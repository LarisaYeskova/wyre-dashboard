import Tether from '../../assets/img/tether.png';
import Yuan from '../../assets/img/yuan.png';
import Usd from '../../assets/img/money.png';
import { Box, Typography } from '@mui/material';
import { styles } from './main.styles';

export default function Currency() {
  return (
    <>
      <Box sx={styles.currencyBox}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ marginRight: '10px' }}>
            <img src={Tether} alt="tether" />
          </Box>
          <Typography sx={{ marginRight: '10px' }}>Tether</Typography>
          <Typography sx={{ color: '#9c9b99' }}>USDT</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ marginRight: '10px', color: '#9c9b99' }}>$1.99</Typography>
          <Typography>2.00000 USDT</Typography>
        </Box>
      </Box>
      <Box sx={styles.currencyBox}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ marginRight: '10px' }}>
            <img src={Yuan} alt="Yuan" />
          </Box>
          <Typography sx={{ marginRight: '10px' }}>Chinese Yuan</Typography>
          <Typography sx={{ color: '#9c9b99' }}>CNY</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ marginRight: '10px', color: '#9c9b99' }}>$1.99</Typography>
          <Typography>2.00000 USDT</Typography>
        </Box>
      </Box>
      <Box sx={styles.currencyBox}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ marginRight: '10px' }}>
            <img src={Usd} alt="Usd" />
          </Box>
          <Typography sx={{ marginRight: '10px' }}>USD Coin</Typography>
          <Typography sx={{ color: '#9c9b99' }}>USDC</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ marginRight: '10px', color: '#9c9b99' }}>$1.99</Typography>
          <Typography>2.00000 USDT</Typography>
        </Box>
      </Box>
    </>
  );
}
