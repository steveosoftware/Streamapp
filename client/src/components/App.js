import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './Streams/StreamList';
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamShow from './Streams/StreamShow';
import StreamDelete from './Streams/StreamDelete';
import Header from './Header';
import history from '../history';




const App = () => {
  return (
    <div className ="ui container">
      <Router history={history}>
        <div>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/:id" exact component={StreamShow} />
          <Route path="/streams/delete/:id" exact component={StreamDelete} />
        </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;