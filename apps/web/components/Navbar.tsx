import Link from "next/link";

export const Navbar = () => {
    const empty: boolean = false;

    return <>
        <div className="navbar sticky top-0 z-50 bg-[#1d232a]">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li>
                            <a>Products</a>
                            <ul className="p-2 ">
                                <li><Link href={"/"}>Caps</Link></li>
                                <li><Link href={"/"}>Shirts</Link></li>
                                <li><Link href={"/"}>Hoodies</Link></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/"}>About</Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>Products</summary>
                            <ul className="p-2">
                                <li><Link href={"/"}>Caps</Link></li>
                                <li><Link href={"/"}>Shirts</Link></li>
                                <li><Link href={"/"}>Hoodies</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">NONAME</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <svg className="w-[60%] fill-[#9ca3af]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="user"><path d="M50.4 54.5c10.1 0 18.2-8.2 18.2-18.2S60.5 18 50.4 18s-18.2 8.2-18.2 18.2 8.1 18.3 18.2 18.3zm0-31.7c7.4 0 13.4 6 13.4 13.4s-6 13.4-13.4 13.4S37 43.7 37 36.3s6-13.5 13.4-13.5zM18.8 83h63.4c1.3 0 2.4-1.1 2.4-2.4 0-12.6-10.3-22.9-22.9-22.9H39.3c-12.6 0-22.9 10.3-22.9 22.9 0 1.3 1.1 2.4 2.4 2.4zm20.5-20.5h22.4c9.2 0 16.7 6.8 17.9 15.7H21.4c1.2-8.9 8.7-15.7 17.9-15.7z" strokeWidth="6"></path></svg>
                </button>
                <button className="btn btn-ghost btn-circle text-center">
                    <div className="indicator justify-center">
                        <svg className="w-[60%] fill-[#9ca3af]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="shopping-cart"><g data-name="Layer 2"><g data-name="shopping-cart"><path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"></path><circle cx="7.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></g></g></svg>
                        {empty
                            ? null
                            : <span className="badge badge-xs badge-primary indicator-item absolute right-2.5 top-1"></span>
                        }
                    </div>
                </button>
            </div>
        </div>
    </>;
};
