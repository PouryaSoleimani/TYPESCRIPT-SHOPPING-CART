import { SquareX } from 'lucide-react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { ProductType } from '../App'
import { ShoppingBag } from '../../Recoil/Atoms'
import { useRecoilState } from 'recoil'
import toast, { Toaster } from 'react-hot-toast';

const BasketCard = (product: ProductType) => {

    const [BAG, setBAG] = useRecoilState<ProductType[]>(ShoppingBag)

    const notify2 = () => toast.error('Product Removed');

    const deleteHandler = (product: ProductType) => {
        notify2()
        const ID = product.id
        const copy = [...BAG]
        const filteredBAG = copy.filter(product => { return product.id !== ID })
        setBAG(filteredBAG)
    }



    //^ RETURN
    return (

        <>
            <Toaster position="bottom-right" reverseOrder={true} />
            <div>
                <div className=" w-[23rem] h-[32rem] flex flex-col items-center justify-around border   border-white  bg-white/10 backdrop-blur-sm">
                    <img src={product.image} className="w-full h-full " />
                    <main className="w-full">
                        <p className="text-2xl text-center font-sans text-white tracking-tighter bg-white/20 w-inherit font-bold  px-4 py-1">{product.title.toUpperCase().slice(0, 20)}</p>
                        <div className="text-white flex justify-between items-center px-4 font-bold text-xl py-2">
                            <div className="flex">
                                {Array(Math.ceil(product.rating.rate)).fill(0).map(star => (<FaStar className="text-yellow-400" />))}
                                {Array(5 - Math.ceil(product.rating.rate)).fill(0).map(star => (<FaRegStar className="text-yellow-400" />))}
                            </div>
                            <p className="bg-black/70 px-2 py-1 tracking-wider font-extrabold text-2xl rounded-lg">{product.price}</p>
                        </div>
                        <div className="bg-sky-500/20 py-2 flex items-center justify-end pr-4 text-white font-bold text-2xl">
                            <h2 className='font-bold text-2xl tracking-tighter'>Quantity   {product.count} </h2>
                        </div>
                        <button className="w-full py-2 text-white font-bold bg-red-800/70 hover:bg-red-500 duration-300" onClick={() => deleteHandler(product)}><SquareX size={30} color="#fafafa" className="mx-auto" strokeWidth={2.5} /></button>
                    </main>
                </div>
            </div >
        </>
    )
}

export default BasketCard