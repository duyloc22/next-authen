import React, { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/client";

function Dashboard() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const securePage = async () => {
            const session = await getSession();
            if (!session) {
                signIn();
            } else {
                setLoading(false);
            }
        };
        securePage();
    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

export default Dashboard;
