import axios from "axios";

export const gettopproducts = () => {
  return axios.get("http://localhost:4000/api/product/getall");
};

export const getproductsbyname = (ProductName) => {
  const url = `http://localhost:4000/api/product/getbyname?name=${ProductName}`;

  return axios.get(url);
};

export const getcategories = () => {
  return axios.get("http://localhost:4000/api/category/getall");
};

export const getcategoriesbyname = (CategoryName) => {
  const url = `http://localhost:4000/api/category/getbyname?name=${CategoryName}`;

  return axios.get(url);
};
