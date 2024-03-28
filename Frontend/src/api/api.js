import axios from "axios";

export const gettopproducts = () => {
  return axios.get("https://fyp-deployment-adaptimart-server.vercel.app//api/product/getall");
};

export const getproductsbyname = (ProductName) => {
  const url = `https://fyp-deployment-adaptimart-server.vercel.app//api/product/getbyname?name=${ProductName}`;

  return axios.get(url);
};

export const getcategories = () => {
  return axios.get("https://fyp-deployment-adaptimart-server.vercel.app//api/category/getall");
};

export const getcategoriesbyname = (CategoryName) => {
  const url = `https://fyp-deployment-adaptimart-server.vercel.app//api/category/getbyname?name=${CategoryName}`;

  return axios.get(url);
};
