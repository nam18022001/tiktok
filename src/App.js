import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((publicR, index) => {
            let Layout = DefaultLayout;
            if (publicR.layout !== null) {
              Layout = publicR.layout ? publicR.layout : DefaultLayout;
            } else {
              Layout = Fragment;
            }

            const Page = publicR.component;
            return (
              <Route
                key={index}
                path={publicR.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
