import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Store from './Store';
import PrivateRoute from './components/PrivateRoute';
import Loader from './components/Loader';

import Login from './Views/Login';
import Home from './Views/Home';

const App = () => {
  const { isLogged, changeStore } = useContext(Store);
  const [isLoading, setLoading] = useState(isLogged);

  useEffect(() => {
    if (!isLogged) return;
    /*
    (async () => {
      try {
        const response = await fetch('/api/login/me', setHeaders());
        if (response.status === 400) {
          localStorage.removeItem('token');
          changeStore('isLogged', false);
          changeStore('me', null);
          return;
        }
        const data = await response.json();
        changeStore('isLogged', true);
        changeStore('me', data);
      } catch (ex) {
        console.error('Serwer nie odpowiada'); //Tu wyświetlić coś userowi że nie ma połączenia z serwerem
        console.error('Error', ex);
      }
    })();
    */
    setLoading(false);
  }, [changeStore, isLogged]);
  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
