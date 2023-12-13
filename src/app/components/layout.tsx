import React, { PropsWithChildren } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Container, Box, Toolbar, AppBar } from '@mui/material';
import routes from '../routes';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              {routes.map((route) => (
                <Button component={RouterLink} to={route.path} color="inherit" key={route.name}>
                  {route.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>{children}</Container>
    </Box>
  );
};
export default Layout;
