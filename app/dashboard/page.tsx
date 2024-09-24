'use client';

import { useSession } from "next-auth/react";

const Hello = () => {
    const session = useSession();
    console.log(session)

    return (
        <>
            <p>Dashboard</p>
            {session.data?.isAdmin}
        </>
    )
}

export default Hello;