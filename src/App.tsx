import React, { useEffect } from "react";
import "./../css/App.css";
import { Github, Hexagon, ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";
import Card from "./Components/Card";
import { useRecoilState } from "recoil";
import { AllProducts, ShoppingBag } from './../Recoil/Atoms';
import axios from "axios";

export type ProductType = {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string,
  rating: { rate: number, count: number },
  count: number
}


function App() {
  const [allproducts, setAllproducts] = useRecoilState<ProductType[]>(AllProducts)
  const [BAG, setBAG] = useRecoilState<ProductType[]>(ShoppingBag)

  const getData = () => { axios.get('https://fakestoreapi.com/products').then(response => setAllproducts(response.data)) }
  useEffect(() => { getData() }, [])


  // ^RETURN
  return (
    <div className="app relative top-0 left-0 h-screen overflow-x-hidden ">
      {/* HEADER ======================================================================================================================== */}
      <header className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold text-xl sticky top-0 left-0 flex justify-between items-center px-10 w-screen m-0">
        <a className="logo flex items-center justify-center space-x-6 hover:underline cursor-pointer"> <Hexagon size={20} strokeWidth={2.5} className="mr-2" />TYPESCRIPT SHOPPING CART</a>
        <NavLink to='/cart' className="flex"><ShoppingCart size={24} strokeWidth={2.5} /><span className="bg-emerald-800 rounded-lg font-semibold h-fit px-1 text-sm">{BAG.length}</span> </NavLink>
      </header>

      <section>
        <p className="text-white border hover:border-white cursor-pointer hover:bg-white/20 border-white/30 bg-white/10 w-fit mx-auto mt-4 text-2xl p-5 font-bold rounded-md ">All Products</p>
      </section>

      {/* MAIN ========================================================================================================================== */}
      <main className="flex px-4 flex-wrap gap-20 items-center justify-center mt-10 h-inherit">
        {allproducts.map((product: ProductType) => (<Card key={product.id} {...product} />))}
      </main>

      {/* FOOTER ========================================================================================================================  */}
      <footer className="bg-white/10 backdrop-blur-sm py-4 text-white font-extrabold sticky top-0 left-0 text-lg mt-10 flex justify-start items-center px-10 w-full ">
        <a target={"_blank"} href="https://github.com/PouryaSoleimani" className="flex items-center text-lg">
          <Github size={22} color="#fafafa" strokeWidth={2.5} className="mr-2" /> https://github.com/PouryaSoleimani
        </a>
      </footer>

    </div>
  );
}

export default App;
