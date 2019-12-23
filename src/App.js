import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import FinalRankProcessing from './routes/private/finalRankProcessing/view';
import UserSuggestion from './routes/public/userSuggestion/view';
import Layout from './shared/components/layout';

function App() {

  const PublicRoutes = () => (
    <React.Fragment >
      <Route path="/sugestoes" component={UserSuggestion} />
    </React.Fragment>
  );

  const PrivateRoutes = () => (
    <React.Fragment >
      <Route path="/admin" component={FinalRankProcessing} />
    </React.Fragment>
  );

  return (
    <Router>
        <Layout>
          <Switch>
            <PrivateRoutes />
          </Switch>
          <Switch>
            <PublicRoutes />
          </Switch>
      </Layout>
    </Router>
  );
}

export default App;