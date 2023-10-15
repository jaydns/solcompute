import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

export default function useUser({
    redirectTo = "",
    redirectIfFound = false,
} = {}) {
    const fetcher = url => fetch(url).then(r => r.json())

    const { data, mutate: mutateUser } = useSWR("/api/user", fetcher);

    useEffect(() => {
        if (!redirectTo || !user) return;

        if (
            (redirectTo && !redirectIfFound && !user?.isLoggedIn) ||
            (redirectIfFound && user?.isLoggedIn)
        ) {
            Router.push(redirectTo);
        }
    }, [data, redirectIfFound, redirectTo]);

    return { data, mutateUser };
}
