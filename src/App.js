import React from 'react';
import { Route } from 'react-router-dom'
import RepoSearchPage from './RepoSearchPage/Main';
import ContributorsPage from './ContributorsPage/Main'
const App = () => (
  <div>
    <main>
      <Route exact path={process.env.PUBLIC_URL+"/"} component={RepoSearchPage} />
      <Route exact path={process.env.PUBLIC_URL+"/:accountName/:repositoryName/contributors"} component={ContributorsPage} />
    </main>
  </div>
)

export default App