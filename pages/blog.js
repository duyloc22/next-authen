import React from "react";
import { getSession } from "next-auth/client";

function blog({ data }) {
    return (
        <div>
            <h2>Blog - {data}</h2>
        </div>
    );
}

export default blog;

export async function getServerSideProps(context) {
    const session = await getSession(context);
    return {
        props: {
            session,
            data: session ? "list of 100 personalized blogs" : "list of free blogs",
        },
    };
}
