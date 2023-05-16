import { Box, Button, Drawer, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DRAWERS from '../../drawers';
import { styles } from './drawers.styles';

export default function Support({ drawers, setDrawers }) {
  return (
    <Drawer anchor={'right'} open={drawers.support} onClose={() => setDrawers(DRAWERS)}>
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
            <Typography>Support</Typography>
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
          <Typography variant="h4" sx={{ fontWeight: '600', marginBottom: '20px' }}>
            Support
          </Typography>
        </Box>
      </Box>
    </Drawer>
  );
}
