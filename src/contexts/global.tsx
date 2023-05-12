import React, {createContext, useEffect, useState} from "react";
import apiRoutes from "../services/api.routes";
import User from "../common/types/user";
import Repo from "../common/types/repo";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext({});

export default function GlobalProvider({children}: any) {
    const [loading, setLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")
    const [message, setMessage] = useState<string>("")
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
                setLoading(false)
            } catch (err: any) {
                setMessage(err.message)
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
                message,
                setMessage
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
}
