import React, {createContext, useEffect, useState} from "react";
import apiRoutes from "../services/api.routes";
import User from "../common/types/user";
import Repo from "../common/types/repo";

export const GlobalContext = createContext({});
export default function GlobalProvider({children}: any) {
    const [loading, setLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")
    const [user, setUser] = useState<User | null>(null)
    const [repos, setRepos] = useState<Repo[]>([])

    const getUser = async () => {
        try {
            setLoading(true)
            const userRes = await apiRoutes.getUser(search)
            const reposRes = await apiRoutes.getRepositories(search)
            console.log(userRes)
            console.log(reposRes)
            setUser(userRes.data)
            setRepos(reposRes.data.sort((a: Repo, b: Repo) => a.stargazers_count - b.stargazers_count))
            setLoading(false)
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    return (
        <GlobalContext.Provider
            value={{
                user,
                repos,
                loading,
                getUser,
                search,
                setSearch
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
