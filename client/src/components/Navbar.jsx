import { Badge } from "@material-ui/core";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { reset } from "../redux/userRedux";


const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const quantity = useSelector(state => state.cart.quantity);
  console.log(quantity);
  const handle = () => {
    dispatch(reset());
    navigate("/login");

  }

  return (
    <div className=" flex justify-between p-4 bg-[#FFFFFF] backdrop-filter backdrop-blur-xl bg-opacity-30 text-black w-full items-center text-center sticky top-[0] z-10 ">
      <div className="flex flex-row sm:justify-between items-center">
        <div className="title font-bold sm:text-3xl ">
          ATLAS
        </div>
        <div className="search-box sm:ml-10  border border-black rounded-lg sm:p-1 flex sm:w-3/5 p-0 w-1/2 ml-3">
          <input type="text" className="bg-inherit text-white outline-none w-full ml-2 rounded-lg" placeholder="Search" />
          <Search className="" />
        </div>
      </div>

      <div className="other flex flex-row justify-end sm:mr-5" >

        <p className="sm:mr-8 sm:text-lg mr-2 text-sm whitespace-nowrap sm:whitespace-normal hover:underline cursor-pointer" onClick={handle}>SIGN OUT</p>
        <Link to="/cart">
          <Badge badgeContent={quantity} color="secondary">
            <ShoppingCartOutlined />
          </Badge>
        </Link>
      </div>
    </div >
  );
};

export default Navbar;
