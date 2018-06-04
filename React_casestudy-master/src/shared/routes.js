import React from "react";
import { Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import App from "./components/App";
import PurchasedItems from "./components/PurchasedItems";
import ProductDetails from "./components/ProductDetails";
import Dashboard from "./components/Dashboard";

var routes = [
  {
    path:'/',
    component:LoginForm,
    exact:true
  },
  {
    path:'/purchasedItems',
    component:PurchasedItems
  },
  {
    path:'/dashboard',
    component:Dashboard
  },
  {
    path:'/productDetails/:id',
    component:ProductDetails
  }
]


export default routes;
