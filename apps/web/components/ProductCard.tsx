export default function productCard({ product }) {
    const { name, price, image } = product
    return (
        <>
            <div data-theme="forest" className="card card-compact w-auto shadow-xl mb-5 inline-block">
                <figure><img height={250} src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <h3 className="text-center">COP {price}</h3>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}