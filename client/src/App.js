import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from './3-components/2-Home/HomePage/Home'
import LandingPage from './3-components/1-Landing/Landing.jsx';
import Create from './3-components/2-Home/FormCreate/Form'
import DetailCard from './3-components/6-DetailCard/DetailCard'


function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      <Route path="/create" component={Create}/>
      <Route path='/videogame/:id' component={DetailCard}></Route>
      </Switch>
    </div>
  );
}

export default App;
