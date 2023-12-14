import React, { PropsWithChildren } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Button, Container, Box, Toolbar, AppBar } from '@mui/material';
import NotificationsBadge from './notifications/badge';
import routes from '../routes';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  return (
    <Box>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              {routes.map((route) => (
                <Button
                  component={RouterLink}
                  to={route.path}
                  color="inherit"
                  key={route.name}
                  sx={{ fontWeight: location.pathname === route.path ? 'bold' : 'lighter' }}
                >
                  {route.name}
                </Button>
              ))}
            </Box>
            <NotificationsBadge />
          </Toolbar>
        </Container>
      </AppBar>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>{children}</Container>
    </Box>
  );
};

export default Layout;
