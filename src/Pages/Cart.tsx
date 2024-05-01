import { Github, Hexagon, ShoppingCart, SquareX } from "lucide-react";
import React, { useContext } from "react";
import { FaRegStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import BasketCard from "../Components/BasketCard";



export default function Cart() {
  return (
    <div className="app min-h-screen">
      {true ? ( // if shoppping cart is not empty
        <>
          {/* //^ HEADER ========================================================================================= */}
          <header className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold text-xl sticky top-0 left-0 flex justify-between items-center px-10 w-screen m-0">
            <a className="logo flex items-center justify-center space-x-6 hover:underline cursor-pointer"> <Hexagon size={20} strokeWidth={2.5} className="mr-2" />TYPESCRIPT SHOPPING CART</a>
            <a className="flex">  <ShoppingCart size={24} strokeWidth={2.5} /><span className="bg-emerald-700 rounded-lg font-semibold h-fit px-1 text-sm">2</span>  </a>
          </header>
          <div className="flex items-center justify-end pr-4 py-2 space-x-4">
            <NavLink to='/'> <button className="text-white p-2 font-bold text-lg hover:bg-sky-700 hover:text-white duration-300 bg-sky-400/30">BACK TO PRODUCTS</button></NavLink>
            <button className="text-white p-2 font-bold text-lg hover:bg-red-700 hover:text-white duration-300 bg-red-400/30">EMPTY BASKET</button>
          </div>
          {/* //^ MAIN ========================================================================================= */}
          <main className="flex items-center justify-center space-x-10 mt-10">
            <BasketCard />
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}

      {/* //^ FOOTER ========================================================================================= */}
      <footer className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold bottom-0 left-0 absolute text-lg  flex justify-between items-center px-10 w-screen m-0">
        <a target={"_blank"} href="https://github.com/PouryaSoleimani" className="flex items-center text-lg">
          <Github size={22} color="#fafafa" strokeWidth={2.5} className="mr-2" /> https://github.com/PouryaSoleimani
        </a>
      </footer>

    </div>
  );
}
