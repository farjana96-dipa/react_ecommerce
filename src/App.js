import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/header.js'
import Footer from './components/footer/footer.js'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/home/index.js'
import About from './pages/about/index.js'

function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path='/' element={<Home />}></Route>
        <Route exact={true} path='/about' element={<About />}></Route>
        
      </Routes>
   </BrowserRouter>
  );
}

export default App;
