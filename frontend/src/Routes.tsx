import { Router, Route, Switch } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Login from 'pages/Login';
import PrivateRoute from 'components/PrivateRoute';
import EventsForm from 'pages/EventsForm';
import NewsForm from 'pages/NewsForm';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <PrivateRoute path="/events">
        <Route path="/events/:eventId" exact>
          <EventsForm />
        </Route>
        <Route path="/events/news/:newsId" exact>
          <NewsForm />
        </Route>
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
