import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout';
import FactsContextProvider from './context/facts';
import routes from './routes';

const root = createRoot(document.body);
root.render(
  <FactsContextProvider>
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.component} />
          ))}
        </Routes>
      </Layout>
    </Router>
  </FactsContextProvider>
);
