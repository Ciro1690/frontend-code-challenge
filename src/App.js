import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Admin from './components/Admin';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route exact path = "/">
            <Home/>
          </Route>
          <Route exact path = "/signup.html">
            <Signup/>
          </Route>
          <Route exact path = "/admin.html">
            <Admin/>
          </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
