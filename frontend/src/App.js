import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateList from './components/UpdateList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/employee' element={<EmployeeList />} />
        <Route path='/add' element={<AddEmployee />} />
        <Route path='/update/:id' element={<UpdateList />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
