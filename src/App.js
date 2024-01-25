// import ReactDOM from "react-dom/client";
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from "react-router-dom"
import './App.css'
import './index.css'
import './component/budget/Budget.css'
import Props from "./component/test/Props";
import Product from "./component/pages/Product";
import FormPage from "./component/pages/FormPage";
import Home from "./component/pages/Home";
import Dashboard from "./component/dashboard/Dashboard";
import HomeDash from "./component/dashboard/HomeDash";
import Service from "./component/dashboard/Service";
import Account from "./component/dashboard/Account";
import Transaction from "./component/dashboard/Transaction";
import Wallet from "./component/dashboard/Wallet"
import HomeProduct from "./component/product/HomeProduct";
import ProductLists from "./component/product/ProductLists";
import ProductDetails from "./component/product/ProductDetails";
import TransactionList from "./component/budget/TransactionList";
import Budget from "./component/budget/Budget";
import Todo from "./component/tododList/Todo";


const router = createBrowserRouter(


  createRoutesFromElements(
    <>
    <Route path="/" element={<Home/>} />
      <Route path = "/product" element={<Product/>}/>
      <Route path = "/formPage" element={<FormPage/>}/>
      <Route path = "/props" element={<Props/>}/>
      <Route path = "/budget" element={<Budget/>}/>
      <Route path = "/transactionList" element={<TransactionList/>}></Route>
      <Route path = "/dashboard" element={<Dashboard/>}></Route>
      <Route path = "/homeDash" element={<HomeDash/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
      <Route path="/transaction" element={<Transaction/>}></Route>
      <Route path="/wallet" element={<Wallet/>}></Route>
      <Route path="/productApi" element={<HomeProduct/>}></Route>
      <Route path="/productApi/:productId" element={<ProductDetails/>}></Route>
      <Route path="/productList" element={<ProductLists/>}></Route>
      <Route path="/todolist" element={<Todo/>}></Route>
      

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
