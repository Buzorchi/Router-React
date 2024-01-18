import React from 'react'

const Navbar = (props) => {

    
  const buttonStyle = {
    padding: '10px',
    marginTop: '15px ',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#4CAF50',  
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    
    
  };
  return (
    <div style={{display: "flex", gap: "10px", justifyContent: "center", alignItems: "center"}} >
      <button onClick= {props.increment} style={buttonStyle} >+</button>
      <button onClick= {props.decrement} style={buttonStyle}>-</button>
    
    </div>
  )
}

export default Navbar
