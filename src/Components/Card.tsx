//^ CARD COMPONENT
import { ShoppingCart } from 'lucide-react'
import { FaRegStar, FaStar } from 'react-icons/fa6'
import { ProductType } from '../App'
import toast, { Toaster } from 'react-hot-toast';
import { AllProducts, ShoppingBag } from '../../Recoil/Atoms';
import { useRecoilState } from 'recoil';
import '../../index.css'

const Card = (product: ProductType) => {
    const [BAG, setBAG] = useRecoilState<ProductType[]>(ShoppingBag)
    const [allproducts, setAllproducts] = useRecoilState<ProductType[]>(AllProducts)
    const notify = () => toast.success('Product added to Shopping Cart');

    const buyHandler = (product: ProductType) => {
        notify()
        setBAG(prevProducts => {
            const mainProductsInBag = BAG.find(item => item.id === product.id)
            if (mainProductsInBag) {
                return prevProducts.map(item => {
                    if (item.id === product.id) {
                        return { ...item, count: item.count + 1 }
                    } else {
                        return item
                    }
                })
            } else {
                const mainProductInShop = allproducts.find(item => item.id === product.id) as ProductType
                return [...prevProducts, { ...mainProductInShop, count: 1 }]
            }
        })

    }

    //^ RETURN
    return (
        <>
            <Toaster position="bottom-right" reverseOrder={true} toastOptions={{ duration: 1000 }} />
            <div>
                <div className=" w-[23rem] h-[32rem] flex flex-col items-center justify-around border border-white bg-white/10 ">
                    <img src={product.image} className="w-full h-full " />
                    <main className="w-full">
                        <p className="text-xl text-start font-sans text-white tracking-tighter bg-white/20 w-inherit font-bold  px-4 py-1">{product.title.toUpperCase().slice(0, 25)}</p>
                        <div className="text-white flex justify-between items-center bg-black px-4 font-bold text-xl py-2">
                            <div className="flex">
                                {Array(Math.ceil(product.rating.rate)).fill(0).map(star => (<FaStar className="text-yellow-400" />))}
                                {Array(5 - Math.ceil(product.rating.rate)).fill(0).map(star => (<FaRegStar className="text-yellow-400" />))}
                            </div>
                            <p id="price">{product.price} $</p>
                        </div>
                        <button className="w-full  py-2 text-white font-bold bg-emerald-800/50 hover:bg-emerald-700 duration-300" onClick={() => buyHandler(product)}><ShoppingCart size={30} color="#fafafa" className="mx-auto" strokeWidth={2.5} /></button>
                    </main>
                </div>
            </div>

        </>
    )
}

export default Card