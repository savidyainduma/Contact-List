
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import NameList from './components/NameList';
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderBar from './components/HeaderBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderBar />
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/namelist' element={<NameList />}></Route> 
        <Route path='/' element={<Home />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
