import { Github, Hexagon, ShoppingCart, SquareX } from "lucide-react";
import React, { useContext } from "react";
import { FaRegStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import BasketCard from "../Components/BasketCard";
import { useRecoilState } from "recoil";
import { ProductType } from "../App";
import { AllProducts, ShoppingBag } from "../../Recoil/Atoms";



export default function Cart() {

  const [allproducts, setAllproducts] = useRecoilState<ProductType[]>(AllProducts)

  const [BAG, setBAG] = useRecoilState<ProductType[]>(ShoppingBag)




  return (
    <div className="app relative top-0 left-0 h-screen overflow-x-hidden ">
      <header className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold text-xl sticky top-0 left-0 flex justify-between items-center px-10 w-screen m-0">
        <a className="logo flex items-center justify-center space-x-6 hover:underline cursor-pointer"> <Hexagon size={20} strokeWidth={2.5} className="mr-2" />TYPESCRIPT SHOPPING CART</a>
        <a className="flex">  <ShoppingCart size={24} strokeWidth={2.5} /><span className="bg-emerald-700 rounded-lg font-semibold h-fit px-1 text-sm">{BAG.length}</span>  </a>
        {/* //^ HEADER ========================================================================================= */}
      </header>
      <div className="flex items-center justify-end pr-4 py-2 space-x-4 w-full h-fit mt-3">
        <NavLink to='/'> <button className="text-white p-2 font-bold text-lg hover:bg-sky-700 hover:text-white duration-300 bg-sky-400/30">BACK TO PRODUCTS</button></NavLink>
        <button className="text-white p-2 font-bold text-lg hover:bg-red-700 hover:text-white duration-300 bg-red-400/30">EMPTY BASKET</button>
      </div>
      {/* //^ MAIN ========================================================================================= */}
      <main className="flex  flex-wrap gap-20 items-start justify-center mt-10 h-screen">
        {BAG.length ? (
          <>
            {BAG.map((product: ProductType) => (<BasketCard key={product.id}  {...product} />))}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-10">
            <img src="/public/Webiconset-E-Commerce-Empty-shopping-cart.128.png" className="w-[20rem]" />
            <p className="text-white border hover:border-white cursor-pointer hover:bg-white/20 border-white/30 bg-white/10 w-fit text-5xl p-5 font-bold rounded-md">YOUR BASKET IS EMPTY</p>
          </div>
        )}
      </main>
      {/* //^ FOOTER ========================================================================================= */}
      <footer className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold sticky top-0 left-0 text-lg mt-10 flex justify-start items-center px-10 w-full ">
        <a target={"_blank"} href="https://github.com/PouryaSoleimani" className="flex items-center text-lg">
          <Github size={22} color="#fafafa" strokeWidth={2.5} className="mr-2" /> https://github.com/PouryaSoleimani
        </a>
      </footer>

    </div>
  );
}
