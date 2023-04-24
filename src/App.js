import './App.css';
import Header from "./components/Header"; 
import Footer from "./components/Footer";
import  Experiences from './components/Experiences';
import  Projets  from './components/Projets';
import  Formations  from './components/Formations';
import  Accueil  from './components/Accueil';

import  Certificates from './components/Certificates';
import { Navbar,Nav,Container } from 'react-bootstrap';
import {
 
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import {FaUniversity,FaCopy,FaClipboardCheck,FaHotel} from 'react-icons/fa'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className='side-content'>
      <Header />
      </div>
      
      
      <div class="content-body">

      <Navbar   variant="light" expand="lg" ms-auto style={{backgroundColor:"#1581b3"}}> 
        <Container  >
      
          <Nav  className=" py-3  mx-auto" >
            
            <Nav.Link as={Link} to="/" className='nav-item-title'><FaHotel style={{paddingBottom:"5px"}}/> Formations</Nav.Link>
            <Nav.Link as={Link} to="/experiences" className='nav-item-title'><FaClipboardCheck style={{paddingBottom:"5px"}}/> Experiences</Nav.Link>
            <Nav.Link as={Link} to="/projets" className='nav-item-title'><FaCopy style={{paddingBottom:"5px"}}/> Projets</Nav.Link>
            <Nav.Link as={Link} to="/certificates" className='nav-item-title'><FaUniversity style={{paddingBottom:"3px"}}/> Certifications</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        <Routes>
         
          <Route  path="/" element={<Formations/>}/>
          <Route  path="/certificates" element={<Certificates/>}/>
          <Route  path="/experiences" element={<Experiences/>}/>
          <Route  path="/projets" element={<Projets/>}/>
        </Routes>

        <Footer />


        </div>
      
        
    </div>
    </BrowserRouter>
  );
}

export default App;
