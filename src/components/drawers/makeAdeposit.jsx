import { Box, Button, Drawer, Typography } from '@mui/material';
import DRAWERS from '../../drawers';
import CloseIcon from '@mui/icons-material/Close';
import SelectAmount from '../drawerContent/makeADeposit/selectAmount';
import SelectMethod from '../drawerContent/makeADeposit/selectMethod';
import DRAWERSCONTENTSELECT from '../drawerContent/makeADeposit/drawerContentSelect';
import { useEffect, useState } from 'react';
import SelectManualBankWire from '../drawerContent/makeADeposit/selectManualBankWire';
import WalletAdress from '../drawerContent/makeADeposit/walletAdress';
import { styles } from './drawers.styles';

export default function MakeAdeposit({ drawers, setDrawers }) {
  const [drawersContent, setDrawersContent] = useState(DRAWERSCONTENTSELECT);

  const selectDepositMethod = (drawerName) => {
    setDrawersContent({ ...DRAWERSCONTENTSELECT, [drawerName]: true });
  };
  useEffect(() => {
    selectDepositMethod('selectAmount');
  }, []);

  return (
    <Drawer anchor={'right'} open={drawers.makeAdeposit} onClose={() => setDrawers(DRAWERS)}>
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
            <Typography>Make a Deposit</Typography>
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
        {drawersContent.selectAmount && <SelectAmount selectDepositMethod={selectDepositMethod} />}
        {drawersContent.depositMethod && <SelectMethod selectDepositMethod={selectDepositMethod} />}
        {drawersContent.manualWireBank && (
          <SelectManualBankWire selectDepositMethod={selectDepositMethod} />
        )}
        {drawersContent.walletAdress && <WalletAdress selectDepositMethod={selectDepositMethod} />}
      </Box>
    </Drawer>
  );
}
