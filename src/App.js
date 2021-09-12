import {BrowserRouter, Route, Switch} from "react-router-dom"
import Home from "./pages/Home/Index"
import About from "./pages/About/About"
import Projects from "./pages/Projects/Projects"
import './App.css';
import Nav from "./pages/Nav/Nav";
import Footer from "./pages/Footer/footer";
import Contact from "./pages/Contact/index";

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Switch >
        {}
        <Route pages={Home} path='/' exact/>
        <Route pages={About} path='/about'/>
        <Route pages={Projects} path='/projects'  />
        <Route pages={Contact} path='/contact'/>
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App; 