import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Nav/>
    <Switch >
        {}
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={Projects} path='/projects'  />
        <Route component={Contact} path='/contact'/>
    </Switch>
    <Footer/>
    </BrowserRouter>
  );
}

export default App; 