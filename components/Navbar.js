import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";

function Navbar() {
    const [session, loading] = useSession();
    return (
        <div>
            <nav>
                <ul className={`${!session && loading ? "loading" : "loaded"}`}>
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard">
                            <a>Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                    {!loading && !session && (
                        <li>
                            <Link href="/api/auth/signin">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signIn("github");
                                    }}
                                >
                                    Sign In
                                </a>
                            </Link>
                        </li>
                    )}
                    {session && (
                        <li>
                            <Link href="/api/auth/signout">
                                <a
                                    onClick={(e) => {
                                        e.preventDefault();
                                        signOut();
                                    }}
                                >
                                    Sign Out
                                </a>
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
