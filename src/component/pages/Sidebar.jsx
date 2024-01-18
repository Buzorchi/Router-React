import React from 'react'
import logo from "../../assets/Primary.svg"
import home from "../../assets/home 1.svg"
import service from "../../assets/clipboard 1.svg"
import transaction from "../../assets/credit-card (2) 1.svg"
import wallet from "../../assets/wallet 1.svg"
import account from "../../assets/user (8) 2.svg"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <div className="w-[236px] h-[900px] bg-white shadow">
        <img src={logo} alt="logo" className="ml-10 pt-6 w-[130px] h-[32.29px" />

        <NavLink to ="/homeDash" className={({isActive}) => `inline-flex gap-5 ml-4 mt-14 justify-start pl-6 items-center ${isActive && " w-[219px] h-[45px] bg-white rounded-tl-[10px] rounded-bl-[10px] shadow"}`}>
            <img src={home} alt="" className="w-[18px] h-[18px] "/>
            <p className="text-indigo-950 text-[13px] font-medium font-['Poppins']">Home</p>
        </NavLink>

        <NavLink to ="/service" className={({isActive}) => `inline-flex gap-5 ml-4 mt-14 justify-start pl-6 items-center ${isActive && " w-[219px] h-[45px] bg-white rounded-tl-[10px] rounded-bl-[10px] shadow"}`}>
            <img src={service} alt="" className="w-[18px] h-[18px] "/>
            <p className="text-indigo-950 text-[13px] font-medium font-['Poppins']">Service</p>
        </NavLink>

        <NavLink to ="/transaction" className={({isActive}) => `inline-flex gap-5 ml-4 mt-14 justify-start pl-6 items-center ${isActive && " w-[219px] h-[45px] bg-white rounded-tl-[10px] rounded-bl-[10px] shadow"}`}>
            <img src={transaction} alt="" className="w-[18px] h-[18px] "/>
            <p className="text-indigo-950 text-[13px] font-medium font-['Poppins']">Transaction</p>
        </NavLink>

        <NavLink to ="/wallet" className={({isActive}) => `inline-flex gap-5 ml-4 mt-14 justify-start pl-6 items-center ${isActive && " w-[219px] h-[45px] bg-white rounded-tl-[10px] rounded-bl-[10px] shadow"}`}>
            <img src={service} alt="" className="w-[18px] h-[18px] "/>
            <p className="text-indigo-950 text-[13px] font-medium font-['Poppins']">Wallet</p>
        </NavLink>

        <NavLink to ="/account" className={({isActive}) => `inline-flex gap-5 ml-4 mt-14 justify-start pl-6 items-center ${isActive && " w-[219px] h-[45px] bg-white rounded-tl-[10px] rounded-bl-[10px] shadow"}`}>
            <img src={service} alt="" className="w-[18px] h-[18px] "/>
            <p className="text-indigo-950 text-[13px] font-medium font-['Poppins']">Account Setting</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
