import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable'; 
import './App.scss';

const loading = () => <div className="d-flex justify-content-center mt-52">
<div className="spinner-grow" role="status">
  <span className="sr-only align-middle">Loading...</span>
</div>
</div>

// Containers
const DefaultLayout = Loadable({
  loader: () => import('./containers/DefaultLayout'),
  loading
});



class App extends Component {

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route path="/" name="Home" component={DefaultLayout} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;
