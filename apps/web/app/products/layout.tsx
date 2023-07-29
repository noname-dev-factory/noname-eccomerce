export default function ProductsLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {


    return (
        <section>
            <main className="w-full flex justify-center items-center flex-col">
                <div className="w-full p-5">
                    <h1 className="text-5xl p-5 font-bold text-center">Products</h1>
                    <h2 className="text-m text-center">All</h2>
                </div>
                {children}
            </main>
        </section>
    )
}