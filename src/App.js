import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import FinalRankProcessing from './routes/private/finalRankProcessing/view';
import UserSuggestion from './routes/public/userSuggestion/view';
import Layout from './shared/components/layout';

function SelectRouter(isAutenticate) {
  if (isAutenticate)
    return (
      <Switch>
        <Route path='/sugestoes' exact component={UserSuggestion} />
        <Route path='/admin' exact component={FinalRankProcessing} />
        <Redirect to='/sugestoes' />
      </Switch>
    );
  return (
    <Switch>
      <Route path='/sugestoes' exact component={UserSuggestion} />
      <Redirect to='/sugestoes' />
    </Switch>
  );
}

function App() {
  const routers = SelectRouter(true);

  return <Layout>{routers}</Layout>;
}

export default App;
