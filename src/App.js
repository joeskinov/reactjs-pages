import './App.css';
import NavBar from './components/navBar/NavBar';
import Incubator from './pages/Incubator';
import Learn from './pages/Learn';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact >
            <Redirect to="/incubator" />
          </Route>
          <Route path='/incubator' exact component={Incubator} />
          <Route path='/learn' exact component={Learn} />
        </Switch>

      </Router>
      
    </>
  );
}

export default App;
