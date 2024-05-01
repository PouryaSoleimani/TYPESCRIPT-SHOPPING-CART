import { SquareX } from 'lucide-react'
import React from 'react'
import { FaRegStar } from 'react-icons/fa6'

const BasketCard = () => {
    return (
        <div>
            <div className=" w-[23rem] h-[32rem] flex flex-col items-center justify-around border   border-white  bg-white/10 backdrop-blur-sm">
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
                    <button className="w-full py-2 text-white font-bold bg-red-800/70 hover:bg-red-500 duration-300"><SquareX size={30} color="#fafafa" className="mx-auto" strokeWidth={2.5} /></button>
                </main>
            </div>
        </div>
    )
}

export default BasketCard