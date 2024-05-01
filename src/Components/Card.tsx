//^ CARD COMPONENT
import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { ProductType } from '../App'



const Card = (product: ProductType) => {
    return (
        <div>
            <div className=" w-[23rem] h-[32rem] flex flex-col items-center justify-around border border-white bg-white/10 ">
                <img src={product.image} className="w-full h-full " />
                <main className="w-full">
                    <p className="text-2xl text-start font-sans text-white tracking-tighter bg-white/20 w-inherit font-bold  px-4 py-1">{product.title}</p>
                    <div className="text-white flex justify-between items-center px-4 font-bold text-xl py-2">
                        <div className="flex">
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaStar className="text-yellow-400" />
                            <FaRegStar className="text-yellow-400" />
                        </div>
                        <p className="bg-black/70 px-2 py-1 tracking-wider font-extrabold text-2xl rounded-lg">{product.price}</p>
                    </div>
                    <button className="w-full  py-2 text-white font-bold bg-emerald-800/50 hover:bg-emerald-700 duration-300"><ShoppingCart size={30} color="#fafafa" className="mx-auto" strokeWidth={2.5} /></button>
                </main>
            </div>
        </div>
    )
}

export default Card