import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import routes from './routes';

const root = createRoot(document.body);
root.render(
  <Router>
    <Layout>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Layout>
  </Router>
);
