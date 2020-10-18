import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from './layout/Alert';
import PrivateRoute from './common/PrivateRoute';
import Register from './auth/Register';
import Login from './auth/Login';
import Dashboard from './mydashboard/Mydashboard';
import DetailPost from './posts/details/DetailPost';

import Gallery from './posts/details/PostsList';
import Posts from './posts/Posts';
import PostForm from './posts/PostForm';
import NotFound from './not-found/NotFound';

const Routes = (props) => {
  return (
    <div>
      <Alert />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />

      <Route exact path="/not-found" component={NotFound} />
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />

        <PrivateRoute exact path="/post/:id" component={DetailPost} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/gallery" component={Gallery} />
        <PrivateRoute exact path="/add-photo" component={PostForm} />
      </Switch>
    </div>
  );
};
export default Routes;
