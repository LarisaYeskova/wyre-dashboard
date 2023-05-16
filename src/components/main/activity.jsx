import {
  Box,
  Button,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

export default function Activity() {
  const rows = ['rows', 'rows', 'rows', 'rows', 'rows', 'rows'];
  return (
    <Box
      sx={{
        padding: '25px 50px',
        '@media screen and (max-width:  500px)': {
          padding: '5px 15px',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <Typography sx={{ display: 'block' }}>Test</Typography>
        <Switch defaultChecked color="default" />
        <Typography sx={{ display: 'block' }}>Production</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #f0f1ec',
          paddingBottom: '30px',
          marginBottom: '60px',
        }}
      >
        <Typography variant="h2" sx={{ display: 'block' }}>
          Activity
        </Typography>
        <Box
          sx={{
            '@media screen and (max-width:  500px)': {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          <Button
            sx={{
              padding: '8px 25px',
              color: '#ffff',
              borderRadius: '8px',
              backgroundColor: '#151515',
            }}
          >
            EXPORT
          </Button>
        </Box>
      </Box>
      <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Transition ID</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Sent</TableCell>
                <TableCell align="right">Currency</TableCell>
                <TableCell align="right">Received</TableCell>
                <TableCell align="right">Wallet ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.transition}
                  </TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="right">{row.date}</TableCell>
                  <TableCell align="right">{row.sent}</TableCell>
                  <TableCell align="right">{row.currency}</TableCell>
                  <TableCell align="right">{row.received}</TableCell>
                  <TableCell align="right">{row.wallet}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
