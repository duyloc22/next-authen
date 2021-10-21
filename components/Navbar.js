import React from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/client";

function Navbar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/api/auth/signin">
                            <a
                                onClick={(e) => {
                                    e.preventDefault;
                                    signIn("github");
                                }}
                            >
                                Sign In
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/api/auth/signout">
                            <a
                                onClick={(e) => {
                                    e.preventDefault;
                                    signOut();
                                }}
                            >
                                Sign Out
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
