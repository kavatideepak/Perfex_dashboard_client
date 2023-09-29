import {Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Admin from './components/Admin';
import AllEmployee from './components/AllEmploye';
import EmployeFeedback from './components/EmployeFeedback';
import Trainee from './components/Trainee';
import Trainer from './components/Trainer';

function App() {
  return(
    <>
      <Routes>
        <Route exact path = "/" element={<Login/>} />
        <Route exact path = "/admin" element={<Admin/>}/>
        <Route exact path = "/allEmploye" element={<AllEmployee />}/>
        <Route exact path = "/employeFeedback" element={<EmployeFeedback />} />
        <Route exact path = "/trainer" element={<Trainer />}/>
        <Route exact path = "/trainee" element={<Trainee />}/>

      </Routes>
    </>
  )
}

export default App;