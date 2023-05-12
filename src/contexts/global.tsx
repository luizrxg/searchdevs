import React, {createContext, useEffect, useState} from "react";
import apiRoutes from "../services/api.routes";
import User from "../common/types/user";
import Repo from "../common/types/repo";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({});

export default function GlobalProvider({children}: any) {
    const [loading, setLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")
    const [user, setUser] = useState<any>()
    const [repos, setRepos] = useState<any>()


    const getUser = async () => {
        if (search) {
            try {
                setLoading(true)
                const userRes = await apiRoutes.getUser(search)
                const reposRes = await apiRoutes.getRepositories(search)
                setUser(userRes)
                setRepos(reposRes)
                setRepos(repos.sort((a: Repo, b: Repo) => b.stargazers_count- a.stargazers_count))
                setLoading(false)
            } catch (err: any) {
                console.log(err.message)
                setLoading(false)
            }
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
                setSearch,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
