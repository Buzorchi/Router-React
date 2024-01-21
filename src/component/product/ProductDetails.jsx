import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { slicedArray } from "../../utils";
import Header from "./Header"

const ProductDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState("");
  const myElementRef = useRef("");
  let { productId } = useParams();

  let endpoint = `https://dummyjson.com/products/${productId}`;

  const getData = async () => {
    setLoading(false);
    try {
      const response = await axios.get(endpoint);
      setData(response.data);
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error loading details", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(endpoint);
  return (
    <>
    <Header/>
    <div className="mx-auto w-[300px] mt-16">
      <p className="font-medium text-lg items-center ">Details</p>
      <p>{productId}</p>
      {loading ? (
        <p className="font-medium text-lg">Loading...</p>
      ) : (
        <div ref={myElementRef}>
          {data && Array.isArray(data.images) && (
            <ul >
                {slicedArray(data.images, 1)?.map((image) => (
                  <div key={image}>
                    <img src={image} alt="phone" />
                  </div>
                ))}
           
              <li>{data.title}</li>
              <li>{data.brand}</li>
              <li>{data.description}</li>
              <li>{data.price}</li>
            </ul>
          )}
        </div>
      )}
     
    </div>
    </>
  );
};

export default ProductDetails;
