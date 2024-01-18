// import ReactDOM from "react-dom/client";
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import './App.css'
import './index.css'
import Props from "./component/test/Props";
import AddForm from "./component/budget/AddForm";
import Product from "./component/pages/Product";
import FormPage from "./component/pages/FormPage";
import Home from "./component/pages/Home";
import Dashboard from "./component/dashboard/Dashboard";
import HomeDash from "./component/dashboard/HomeDash";
import Service from "./component/dashboard/Service";
import Account from "./component/dashboard/Account";
import Transaction from "./component/dashboard/Transaction";
import Wallet from "./component/dashboard/Wallet"






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
