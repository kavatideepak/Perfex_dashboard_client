import {Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Admin from './components/Admin';

function App() {
  return(
    <>
      <Routes>
        <Route exact path = "/login" element={<Login/>} />
        <Route exact path = "/admin" element={<Admin/>}/>
      </Routes>
    </>
  )
}

export default App;