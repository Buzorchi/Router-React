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
  const [select, setSelect] = useState([]);

  const priceRange = [
    { id: 1, name: "0-100", value: "100" },
    { id: 2, name: "100-200", value: "200" },
    { id: 3, name: "200-300", value: "300" },
    { id: 4, name: "300-400", value: "400" },
    { id: 5, name: "400-500", value: "500" },
    { id: 6, name: "500-600", value: "600" },
    { id: 7, name: "600-700", value: "700" },
    { id: 8, name: "700-800", value: "800" },
    { id: 9, name: "800-900", value: "900" },
    { id: 10, name: "900-1000", value: "1000" },
    { id: 11, name: "1000-1100", value: "1100" },
    { id: 12, name: "1100-1200", value: "1200" },
    { id: 13, name: "1200-1300", value: "1300" },
    { id: 14, name: "1300-1400", value: "1400" },
    { id: 15, name: "1400-1500", value: "1500" },
    { id: 16, name: "1500-1600", value: "1600" },
    { id: 17, name: "1600-1700", value: "1700" },
    { id: 18, name: "1700-1800", value: "1800" },
    { id: 19, name: "1800-1900", value: "1900" },
    { id: 20, name: "1900-2000", value: "2000" }
    ];

  const getProduct = async () => {
    let url = "https://dummyjson.com/products";
    console.log(url);
    if (search.trim() && category) {
      url += `?search=${search}&&category=${category}`;
    } else if (search.trim()) {
      url += `/search?q=${search}`;
    } else if (category) {
      url += `/category/${category}`;
    } else if (select) {
      url += `?&price/${select}`
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
    console.log(response.data);
  };


  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const debouncedFetchData = setTimeout(getProduct, 500);
    return () => clearTimeout(debouncedFetchData);
  }, [search, category, select]);
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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-50 shadow-sm text-xs w-[300px] border rounded-sm h-[35px] pl-4 "
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option value={category} key={category} className="">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>

            <select
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              className="focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-50 shadow-sm text-xs w-[150px] border rounded-sm h-[35px] pl-4 "
            >
              <option value="">Price Range</option>
              {priceRange.map((item) => (
                <option  key={item.id} value={item.value} >{item.name}</option>
              ))}
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
                  <Link to={`/productApi/${products.id}`}>{products.title}</Link>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductLists;
