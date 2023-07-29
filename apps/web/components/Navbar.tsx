'use client'
import Link from "next/link";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/nextjs";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [stickyClass, setStickyClass] = useState("");
    const empty: boolean = false;

    function stickNavbar() {
        let windowHeight = window.scrollY;
        windowHeight > 300 ? setStickyClass("fixed top-0 z-50") : setStickyClass("relative");
    }

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);
    }, []);

    return (
        <>
            <div data-theme="dark" className={`navbar ${stickyClass} transition-all`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li>
                                <Link href={"/about"}>About</Link>
                            </li>
                            <li>
                                <Link href={"/products"}>Products</Link>
                                <ul className="p-2 ">
                                    <li>
                                        <Link href={"/products/caps"}>Caps</Link>
                                    </li>
                                    <li>
                                        <Link href={"/products/shirts"}>Shirts</Link>
                                    </li>
                                    <li>
                                        <Link href={"/products/hoodies"}>Hoodies</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        <li>
                            <Link href={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/"}>About</Link>
                        </li>
                        <li tabIndex={0}>
                            <div className="dropdown dropdown-hover p-0">
                                <Link className="mx-4 my-2" tabIndex={0} href={"/products"}>Products</Link>
                                <ul tabIndex={0} className="dropdown-content relative top-9 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><Link href={"/products/caps"}>Caps</Link></li>
                                    <li><Link href={"/products/shirts"}>Shirts</Link></li>
                                    <li><Link href={"/products/hoodies"}>Hoodie</Link></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">NONAME</a>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-ghost btn-circle">
                        <SignedIn>
                            <UserButton afterSignOutUrl="/" />
                        </SignedIn>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                    </button>
                    <button className="btn btn-ghost btn-circle text-center">
                        <div className="indicator justify-center">
                            <svg
                                className="w-[60%] fill-[#9ca3af]"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                id="shopping-cart"
                            >
                                <g data-name="Layer 2">
                                    <g data-name="shopping-cart">
                                        <path d="M21.08 7a2 2 0 0 0-1.7-1H6.58L6 3.74A1 1 0 0 0 5 3H3a1 1 0 0 0 0 2h1.24L7 15.26A1 1 0 0 0 8 16h9a1 1 0 0 0 .89-.55l3.28-6.56A2 2 0 0 0 21.08 7zm-4.7 7H8.76L7.13 8h12.25z"></path>
                                        <circle cx="7.5" cy="19.5" r="1.5"></circle>
                                        <circle cx="17.5" cy="19.5" r="1.5"></circle>
                                    </g>
                                </g>
                            </svg>
                            {empty ? null : (
                                <span className="badge badge-xs badge-primary indicator-item absolute right-2.5 top-1"></span>
                            )}
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};
