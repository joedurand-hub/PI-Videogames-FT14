import './App.css';
import { Route } from "react-router-dom";
import Home from './3-components/2-Home/HomePage/Home'
import LandingPage from './3-components/1-Landing/Landing.jsx';
import Create from './3-components/2-Home/FormCreate/Form'

// Va a renderizar las rutas y traer los componentes principales
// Landing Page
// Home
// NavBar
// Form Videogames

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage}/>
      <Route path="/home" component={Home}/>
      <Route path="/create" component={Create}/>
    </div>
  );
}

export default App;
