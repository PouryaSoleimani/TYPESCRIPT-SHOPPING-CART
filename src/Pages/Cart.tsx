import { Github, Hexagon, ShoppingCart } from "lucide-react";
import React, { useContext } from "react";
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa6";
export default function Cart() {
  return (
    <div className="app min-h-screen">
      {true ? ( // if shoppping cart is not empty
        <>
          <header className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold text-xl sticky top-0 left-0 flex justify-between items-center px-10 w-screen m-0">
            <a className="logo flex items-center justify-center space-x-6 hover:underline cursor-pointer"> <Hexagon size={20} strokeWidth={2.5} className="mr-2" />TYPESCRIPT SHOPPING CART</a>
            <a className="flex">  <ShoppingCart size={24} strokeWidth={2.5} /><span className="bg-emerald-700 rounded-lg font-semibold h-fit px-1 text-sm">2</span>  </a>
          </header>
          <main className="flex items-center justify-center space-x-10 mt-20">
            <div className=" w-[23rem] h-[29rem] flex flex-col items-center justify-around border   border-white  bg-white/10 backdrop-blur-sm">
              <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" className="w-full h-full " />
              <main className="w-full">
                <p className="text-2xl text-center font-sans text-white tracking-tighter bg-white/20 w-inherit font-bold  px-4 py-1">Test Title</p>
                <div className="text-white flex justify-between items-center px-4 font-bold text-xl py-2">
                  <div className="flex">
                    <FaRegStar style={{ color: "orange" }} />
                    <FaRegStar style={{ color: "orange" }} />
                    <FaRegStar style={{ color: "orange" }} />
                    <FaRegStar style={{ color: "orange" }} />
                    <FaRegStar style={{ color: "orange" }} />
                  </div>
                  <p className="bg-black/70 px-2 py-1 tracking-wider font-extrabold text-2xl rounded-lg">231$</p>
                </div>
                <div className="bg-sky-700/50 py-2 flex items-center justify-end pr-4 text-white font-bold text-xl">
                  <h2>COUNT : 1</h2>
                </div>
                <button className="w-full py-2 text-white font-bold bg-emerald-800/50 hover:bg-emerald-700 duration-300"><ShoppingCart size={30} color="#fafafa" className="mx-auto" strokeWidth={2.5} /></button>
              </main>
            </div>
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}

      <footer className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold bottom-0 left-0 absolute text-lg  flex justify-between items-center px-10 w-screen m-0">
        <a target={"_blank"} href="https://github.com/PouryaSoleimani" className="flex items-center text-lg">
          <Github size={22} color="#fafafa" strokeWidth={2.5} className="mr-2" /> https://github.com/PouryaSoleimani
        </a>
      </footer>

    </div>
  );
}
