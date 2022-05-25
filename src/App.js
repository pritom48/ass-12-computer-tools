import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReviews from './Pages/Dashboard/MyReviews';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequierAuth from './Pages/Login/RequierAuth';
import Signup from './Pages/Login/Signup';
import ToolDetails from './Pages/ToolsDetails/ToolDetails';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsers from './Pages/Dashboard/AllUsers';

function App() {
  return (
    <div className='px-10 bg-base-200'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/tool/:toolId' element={
          <RequierAuth>
            <ToolDetails></ToolDetails>
          </RequierAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequierAuth>
            <Dashboard></Dashboard>
          </RequierAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='reviews' element={<MyReviews></MyReviews>}></Route>
          <Route path='users' element={<AllUsers></AllUsers>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
