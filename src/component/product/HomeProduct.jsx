import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { slicedArray } from "../../utils";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";

const HomeProduct = () => {
  const [data, setData] = useState([]);
  console.log("data", data);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://dummyjson.com/products?limit=10"
      );
      setData(response.data.products);
      setLoading(false);
    } catch (error) {
      console.log("Error loading products", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center mt-14 ">
        <p className="font-medium text-lg">Welcome to my shop</p>
        <p className="text-sm font-normal pt-4">
          Discover a world of amaxing products!
        </p>
        <Link to="/productList">
          <button className="text-white bg-blue-800 hover:bg-blue-500 font-medium text-sm rounded-sm py-1 px-2 mt-4">
            Shop Now!
          </button>
        </Link>
      </div>

      <h1 className="mt-14 flex justify-center font-semibold text-2xl">
        Featured Products
      </h1>
      <div className="product block md:grid md:grid-cols-3 gap-7 justify-center items-center px-10">
        {loading ? (
          <p className="font-medium text-lg">Loading...</p>
        ) : (
          data?.map((item, index) => (
            <Link to={`/productApi/${item.id}`}>
              <ul
                key={index}
                className="w-full h-[400px] mt-10 bg-slate-100 rounded-sm shadow-xl flex flex-col justify-center items-center pt-0"
              >
                <li>{item.id}</li>

                <li>{item.title}</li>

                <li>{item.brand}</li>
                <div className="w-[12.55rem] ">
                  {slicedArray(item.images, 1).map((x) => (
                    <div key={x}>
                      <img src={x} alt="product" />
                    </div>
                  ))}
                </div>
              </ul>
            </Link>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomeProduct;
