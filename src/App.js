

import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Newletter from './components/Newletter';
import Topdeal from './components/Topdeal';
import video1 from './images/video1.mp4'
function App() {
  return (
    <div className='bg-black'>
  <Menu />
 
        <Outlet />
        <Footer />
    </div>
    
  );
}

export default App;
