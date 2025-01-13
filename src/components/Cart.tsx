import { useAppSelector } from "@/redux/hooks";
import { RxCross1 } from "react-icons/rx";
import CartProduct from "./CartProduct";

interface CartProps {
    setShowCart: (value: boolean) => void;
}

const Cart = ({ setShowCart }: CartProps) => {
    interface Product {
        id: number;
        img: string;
        name: string;
        price: number;
        quantity: number;
    }

    const products: Product[] = useAppSelector((state: any) => state.cartReducer);

    const getTotal = () => {
        return products.reduce((total, item) => {
            const itemTotal = (item.price || 0) * (item.quantity || 0);
            return total + itemTotal;
        }, 0);
    };

    return (
        <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-scroll">
            <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6">
                <RxCross1
                    className="absolute right-0 top-0 m-6 text-[24px] cursor-pointer"
                    onClick={() => setShowCart(false)}
                />
                <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h3>
                <div className="mt-6 space-y-2">
                    {products?.map((item: Product) => (
                        <CartProduct
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))}
                </div>
                <div className="flex justify-between items-center font-medium text-xl py-4">
                    <p>Total:</p>
                    <p>${getTotal()}.00</p>
                </div>
                <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent mb-4 mt-4">
                    View Cart
                </button>
                <button className="bg-black text-white text-center w-full rounded-3xl py-2 hover:bg-accent">
                    CheckOut
                </button>
            </div>
        </div>
    );
};

export default Cart;
