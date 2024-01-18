import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

const Product = () => {
  const [data, setData] = useState([]);
  console.log("data", data);

  const [loading, setLoading] = useState(false)

  const getProductList = async () => {
    setLoading(!loading)
    try{
      const response = await axios.get("https://dummyjson.com/products");
      // console.log("res", response.data.products);
      setData(response.data.products);
      setLoading (false)
      
    } catch (err){
        console.log(err)
        setLoading(false)
    }

  };

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div>
      <Link to ="/" style={{textDecoration: "none"}}>
        <p style={{marginTop: "30px", marginLeft: "40px"}}>Back</p>
      </Link>
      <h2>Product List</h2>
      {loading ? <p>Loading...</p>
        :  
      data.map((item, index) => (
        <ul key={index} >
          <li>{item.title}</li>
          <li>{item.brand}</li>
          <li>{item.description}</li>
          <div className="product"> 
            {item.images.map((x) => (
              <div key={x} >
                <img src={x} alt=""/>
                </div>
            ))}
          </div>
        </ul>
      ))}
    </div>
  )
}

export default Product
