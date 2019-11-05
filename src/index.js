import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { MyProfile, UserProfile } from './HelloWorld.component';

import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Link to="/home">Accueil</Link>
            <br />
            <Link to="/my-profile">Mon profil</Link>
            <br />
            <Link to="/user-profile/gaearon">Profil de Dan Abramov</Link>
            <br />
            <Link to="/user-profile/qchantel">Profil de qchantel</Link>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        <Switch>
          <Route exact path="/my-profile">
            <MyProfile />
          </Route>
          <Route exact path="/user-profile/:githubLogin">
            <UserProfile />
          </Route>
          <Route exact path="/home">
            <div>Ceci est l'accueil</div>
          </Route>
        </Switch>
        <br />
        <br />

        <br />

        <br />

        <div>Je suis un footer</div>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
