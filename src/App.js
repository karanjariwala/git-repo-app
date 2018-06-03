import React from 'react';
import { Route, Link } from 'react-router-dom'
import RepoSearchPage from './RepoSearchPage/Main';
import ContributorsPage from './ContributorsPage/Main'
const App = () => (
  <div>
    <main>
      <Route exact path="/" component={RepoSearchPage} />
      <Route exact path="/:accountName/:repositoryName/contributors" component={ContributorsPage} />
    </main>
  </div>
)

export default App