import logo from './logo.svg';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/home'
import Mission from './components/mission'
import Resources from './components/resources'
import Gallery from './components/gallery'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  return (
    
    <div className="App">
<Router>
<Navbar />
<Routes>
<Route path='home' element= {<Home />}/>
<Route path='mission' element= {<Mission />}/>
<Route path='resources' element= {<Resources />}/>
<Route path='gallery' element= {<Gallery />}/>
<Route path='about' element= {<About />}/>
<Route path='contact' element= {<Contact />}/>

</Routes>

    <Footer />
      </Router>
    </div>
  );
}

export default App;
