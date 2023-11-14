import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import MyState from './context/MyState';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Saved from './pages/Saved';
import Login from './pages/Login'
import Signup from './pages/Signup'
import AdminDashboard from './pages/admin/dashboard/Dashboard';
import AddProduct from './pages/admin/pages/AddJob'
import ProductInfo from './pages/JobInfo';

function App() {
  // console.log = console.warn = console.error = () => {};
  return (
    <div className="App">
      <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/auth/dashboard' element={<AdminDashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path='/saved' element={<Saved />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/productinfo/:id' element={<ProductInfo />} />
        </Routes>
      </Router>
      </MyState>
    </div>
  );
}

export default App;
