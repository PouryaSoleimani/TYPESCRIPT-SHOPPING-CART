import React from "react";
import "./App.css";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { Github, Hexagon, ShoppingCart } from "lucide-react";

function App() {
  return (
    // <ContextDataProvider>
    <div className="app min-h-screen">
      {/* //^ HEADER */}
      <header className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold text-xl sticky top-0 left-0 flex justify-between items-center px-10 w-screen m-0">
        <a className="logo flex items-center justify-center space-x-6 hover:underline cursor-pointer"> <Hexagon size={20} strokeWidth={2.5} className="mr-2" />TYPESCRIPT SHOPPING CART</a>
        <a className="flex">  <ShoppingCart size={24} strokeWidth={2.5} /><span className="bg-emerald-700 rounded-lg font-semibold h-fit px-1 text-sm">2</span>  </a>
      </header>


      {/* //^ MAIN */}
      <section>
        <p className="text-white border hover:border-white cursor-pointer hover:bg-white/20 border-white/30 bg-white/10 w-fit mx-auto mt-10 text-2xl p-5 font-bold rounded-md ">All Products</p>
      </section>

      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        <div className="card">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
          <main>
            <p>Test Title ...</p>
            <div className="card-details">
              <div>
                <FaRegStar style={{ color: "orange" }} />
                <FaRegStar style={{ color: "orange" }} />
                <FaRegStar style={{ color: "orange" }} />
                <FaRegStar style={{ color: "orange" }} />
                <FaRegStar style={{ color: "orange" }} />
              </div>
              <p>231$</p>
            </div>
            <button>Add to Basket</button>
          </main>
        </div>
        <div className="card">
          <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
          <main>
            <p>Test Title ...</p>
            <div className="card-details">
              <div>
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
                <FaStar style={{ color: "orange" }} />
              </div>
              <p>231$</p>
            </div>
            <button>Add to Basket</button>
          </main>
        </div>
      </main>


      {/*//^ FOOTER  */}
      <footer className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold bottom-0 left-0 absolute text-lg  flex justify-between items-center px-10 w-screen m-0">
        <a target={"_blank"} href="https://github.com/PouryaSoleimani" className="flex items-center text-lg">
          <Github size={22} color="#fafafa" strokeWidth={2.5} className="mr-2" /> https://github.com/PouryaSoleimani
        </a>
      </footer>

    </div>
    // </ContextDataProvider>
  );
}

export default App;
