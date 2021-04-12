import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './pages/Home';
import Incubator from './pages/Incubator';
import ViewIncubator from './pages/ViewIncubator';
import ViewCourse from './pages/ViewCourse';
import Learn from './pages/Learn';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/incubators' exact component={Incubator} />
          <Route path='/incubator/:incubatorId' component={ViewIncubator} />
          <Route path='/learn' exact component={Learn} />
          <Route path='/course/:courseId' exact component={ViewCourse} />
        </Switch>

      </Router>
      
    </>
  );
}

export default App;
