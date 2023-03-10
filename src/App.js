import './App.css';
import { NavBar } from './components/Navbar';
import {Banner} from "./components/Banner"
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import "bootstrap/dist/css/bootstrap.min.css"
import { Footer } from './Footer';


function App() {
  return (
    <div className="App">
     <NavBar />
     <Banner/>
     <Skills/>
     <Project/>
<Footer/>
    </div>
  );
}

export default App;
