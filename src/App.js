import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNewItem from './Pages/AddNewItem/AddNewItem';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Warehouse from './Pages/Warehouse/Warehouse';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/products/:id' element={
          <RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>
        }></Route>
        <Route path='/warehouse' element={<Warehouse></Warehouse>}></Route>
        <Route path='/addnewitem' element={<AddNewItem></AddNewItem>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
