import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState("");
  const [priceRange, setPriceRange] = useState(false);

  

  const getProduct = async () => {
    let url = "https://dummyjson.com/products";
    console.log(url);
    if (search.trim() && category) {
      url += `?search=${search}&&category=${category}`;
    } else if (search.trim()) {
      url += `/search?q=${search}`;
    } else if (category) {
      url += `/category/${category}`;
    } else if (priceRange) {
      url += `/priceRange/${priceRange}`;
    }
    setLoading(true);

    try {
      const response = await axios.get(url);
      console.log(url);
      setProducts(response.data.products);
      console.log(response.data.products);
      setLoading(false);
    } catch (error) {
      console.log("Error getting product", error);
      setLoading(false);
    }
  };

  const getCategories = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products/categories"
    );
    setCategories(response.data);
    console.log(response.data)
  };

  const getPriceRange = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=10&skip=10&select=title,price"
    );
    setPriceRange(response.data);
    console.log(response.data)
  };

  useEffect(() => {
    getCategories();
  },[])

  useEffect(() => {
    const debouncedFetchData = setTimeout(getProduct,500)
    return() => clearTimeout(debouncedFetchData)
  }, [search,category]);
  return (
    <div>
      <Header />
      <div className="border border-slate-100 rounded-sm shadow-xl mx-auto mt-10 max-w-[1000px] px-7 ">
        <div className="flex justify-between pt-5">
          <input
            type="text"
            value={search}
            placeholder="Search Products"
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-sm w-[300px] text-xs h-[35px] pl-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-50 shadow-sm"
          />
          <div className="flex gap-4">
            <select
              value="category"
              onChange={(e) => setCategory(e.target.value)}
              className="focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-50 shadow-sm text-xs w-[300px] border rounded-sm h-[35px] pl-4 "
            >
              <option value="">All Categories</option>
              {categories?.map((category) => (
                <option value={category} key={category} className="">{category}</option>
              ))}
            </select>

            <select
              value="priceRange"
              onChange={(e) => setPriceRange(e.target.value)}
              className="focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-50 shadow-sm text-xs w-[150px] border rounded-sm h-[35px] pl-4 "
            >
              <option value="">Price Range</option>
              {/* {prices ?.map((priceRange) => (
                <option value={priceRange} key={priceRange} >{priceRange}</option>
              ))} */}
            </select>
          </div>
        </div>

        {loading ? (
          <p className="font-medium text-lg">Loading...</p>
        ) : (
          <ul>
            {products &&
              products?.map((products) => (
                <li key={products.id} className="text-sm font-light">
                  <Link to={`/products/${products.id}`}>{products.title}</Link>
                </li>
              ))}
          </ul>
        )}
        
      </div>
    </div>
  );
};

export default ProductLists;
