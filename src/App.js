import { Box, Grid, ThemeProvider } from '@mui/material';
import SideBar from './components/sideBar/sideBar';
import theme from './theme';
import Main from './components/main/main';
import { useState } from 'react';
import Activity from './components/main/activity';

function App() {
  const [activity, setActivity] = useState(false);

  const changeActivity = () => {
    setActivity(!activity);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        className="App"
        sx={{
          '@media screen and (max-width:  500px)': {
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={4}
          lg={2}
          sx={{
            height: '100vh',
            '@media screen and (max-width:  900px)': {
              height: '100%',
            },
          }}
        >
          <Box sx={{ backgroundColor: '#1e1e1e', padding: '0 15px 0 15px', height: '100%' }}>
            <SideBar changeActivity={changeActivity} />
          </Box>
        </Grid>
        <Grid item xs={12} md={8} lg={10}>
          {!activity ? <Main /> : <Activity />}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
