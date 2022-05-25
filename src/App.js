import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReviews from './Pages/Dashboard/MyReviews';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequierAuth from './Pages/Login/RequierAuth';
import RequierAdmin from './Pages/Login/RequierAdmin'
import Signup from './Pages/Login/Signup';
import ToolDetails from './Pages/ToolsDetails/ToolDetails';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUsers from './Pages/Dashboard/AllUsers';
import Blogs from './Pages/Blogs/Blogs';
import AddProducets from './Pages/Dashboard/AddProducets';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import Profile from './Pages/Dashboard/Profile';

function App() {
  return (
    <div className='px-10 bg-base-200'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
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
          <Route path='profile' element={<Profile></Profile>}></Route>
          <Route path='users' element={<RequierAdmin><AllUsers></AllUsers></RequierAdmin>}></Route>
          <Route path='addproducts' element={<RequierAdmin><AddProducets></AddProducets></RequierAdmin>}></Route>
          <Route path='manage' element={<RequierAdmin><ManageProducts></ManageProducts></RequierAdmin>}></Route>
        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
