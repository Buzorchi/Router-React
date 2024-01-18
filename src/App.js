// import ReactDOM from "react-dom/client";
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import './App.css'
import './index.css'
import Props from "./component/test/Props";
import AddForm from "./component/budget/AddForm";
import Product from "./component/pages/Product";
import FormPage from "./component/pages/FormPage";
import Dashboard from "./component/pages/Dashboard";
import Home from "./component/pages/Home";
import HomeDash from "./component/pages/HomeDash";
import Service from "./component/pages/Service";
import Account from "./component/pages/Account";
import Transaction from "./component/pages/Transaction";
import Wallet from "./component/pages/Wallet";




const router = createBrowserRouter(
  createRoutesFromElements(
   
    <>
    <Route path="/" element={<Home/>} />
      <Route path = "/product" element={<Product/>}/>
      <Route path = "/formPage" element={<FormPage/>}/>
      <Route path = "/props" element={<Props/>}/>
      <Route path = "/addForm" element={<AddForm/>}/>
      <Route path = "/dashboard" element={<Dashboard/>}></Route>
      <Route path = "/homeDash" element={<HomeDash/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      <Route path="/transaction" element={<Transaction/>}></Route>
      <Route path="/wallet" element={<Wallet/>}></Route>


    </>
  )
)

function App(){
  return (
    <>
  <RouterProvider router={router}/>
    </>
 
  )
}

export default App
