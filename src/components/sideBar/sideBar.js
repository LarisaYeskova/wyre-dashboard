import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import DRAWERS from '../../drawers';
import ExChange from '../drawers/exChange';
import MakeAdeposit from '../drawers/makeAdeposit';
import MakeAwithDrawal from '../drawers/makeAwithdrawal';
import Support from '../drawers/support';
import Transfer from '../drawers/transfer';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TextsmsIcon from '@mui/icons-material/Textsms';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styles } from './sideBar.styles';

export default function SideBar({ changeActivity }) {
  const [drawers, setDrawers] = useState(DRAWERS);
  return (
    <Box sx={styles.sideBarContainer}>
      {/* wyre */}
      <Box sx={styles.sideBarTitleBox}>
        <Box sx={[styles.flex, styles.alignItems]}>
          <BackupTableIcon />
          <Typography variant="h2" sx={styles.bold}>
            wyre
          </Typography>
        </Box>
        <Box sx={[styles.flex, styles.alignItems, styles.pointer]}>
          <Box sx={styles.buttonBoxBigCirсle}>
            <PersonIcon sx={{ color: '#3e3e3d' }} />
          </Box>
          <ArrowDropDownIcon />
        </Box>
      </Box>

      {/* Dashboard */}
      <Box sx={[styles.paddingBottom30, styles.flex, styles.flexDirection]}>
        <Button onClick={changeActivity} sx={styles.dashBoardButton}>
          <Typography variant="h2" sx={{ lineHeight: '2' }}>
            Dashboard<br></br>
          </Typography>
        </Button>
        <Button
          onClick={changeActivity}
          sx={[
            styles.dashBoardButton,
            { display: 'flex', justifyContent: 'flex-start', width: '100%' },
          ]}
        >
          <Typography variant="h2" sx={{ lineHeight: '1' }}>
            Activity
          </Typography>
        </Button>
      </Box>
      <Box>
        <Box sx={styles.paddingBottom10}>
          <Typography variant="h6" sx={{ fontWeight: '700' }}>
            TOOLS
          </Typography>
        </Box>
        <Box sx={styles.paddingBottom30}>
          <Button sx={styles.dashBoardButton}>
            <Typography variant="h2">Developers</Typography>
          </Button>
        </Box>
      </Box>

      {/* Actions */}
      <Box>
        <Box sx={styles.paddingBottom10}>
          <Typography variant="h6" sx={{ fontWeight: '700' }}>
            ACTIONS
          </Typography>
        </Box>
        <Box sx={[styles.flex, styles.flexDirection]}>
          <Button
            sx={styles.actionsButton}
            onClick={() => {
              setDrawers({ ...drawers, makeAdeposit: true });
            }}
          >
            <Box sx={styles.actionsBox}>
              <AddIcon sx={{ fontSize: 'small' }} />
            </Box>
            Make A deposit
          </Button>
          <Button
            sx={styles.actionsButton}
            onClick={() => {
              setDrawers({ ...drawers, makeAwithdrawal: true });
            }}
          >
            <Box sx={styles.actionsBox}>
              <RemoveIcon sx={{ fontSize: 'small' }} />
            </Box>
            make A withDrawal
          </Button>
          <Button
            sx={styles.actionsButton}
            onClick={() => {
              setDrawers({ ...drawers, transfer: true });
            }}
          >
            <Box sx={styles.actionsBox}>
              <SyncAltIcon sx={{ fontSize: 'small' }} />
            </Box>
            transfer
          </Button>
          <Button
            sx={styles.actionsButton}
            onClick={() => {
              setDrawers({ ...drawers, exChange: true });
            }}
          >
            <Box sx={styles.actionsBox}>
              <CurrencyExchangeIcon sx={{ fontSize: 'small' }} />
            </Box>
            exChange
          </Button>
          <Button
            sx={styles.actionsButton}
            onClick={() => {
              setDrawers({ ...drawers, support: true });
            }}
          >
            <Box sx={styles.actionsBox}>
              <TextsmsIcon sx={{ fontSize: 'small' }} />
            </Box>
            support
          </Button>
          <MakeAdeposit drawers={drawers} setDrawers={setDrawers} />
          <MakeAwithDrawal drawers={drawers} setDrawers={setDrawers} />
          <Transfer drawers={drawers} setDrawers={setDrawers} />
          <Support drawers={drawers} setDrawers={setDrawers} />
          <ExChange drawers={drawers} setDrawers={setDrawers} />
        </Box>
      </Box>
    </Box>
  );
}
