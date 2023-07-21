import ProductCard from "../../components/ProductCard";
import { productsList } from "../../utils/productsList";

export default function Products() {


    return (
        <>
            <main className="w-full flex justify-center items-center flex-col">
                <div className="w-full p-5">
                    <h1 className="text-5xl p-5 font-bold text-center">Products</h1>
                </div>
                <div className="lg:max-w-5xl columns-2 lg:columns-3 p-2">
                    {productsList.map((item, i) => (
                        <ProductCard product={item} />
                    ))}
                </div>
            </main>
        </>
    );
}
