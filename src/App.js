import React from 'react';
import { Route, Link } from 'react-router-dom'
import RepoSearchPage from './RepoSearchPage/Main';
const About =()=><div>About</div>

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={RepoSearchPage} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App