import ProductCard from "../../components/ProductCard";
import { productsList } from "../../utils/productsList";

export default function Products() {


    return (
        <>
            <div className="lg:max-w-5xl columns-1 md:columns-2 lg:columns-3 p-3">
                {productsList.map((item) => (
                    <ProductCard key={item.name} product={item} />
                ))}
            </div>
        </>
    );
}
