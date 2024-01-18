import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

const Dashboard = ({Children}) => {
  return (
    <div className='flex'>
        <div>
      <Sidebar/>
        </div>
      <div className=' bg-[#F8F8FF] '>
        <Header />
        {Children}
      </div>
    </div>
  )
}

export default Dashboard
