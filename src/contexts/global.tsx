import React, {createContext, useEffect, useState} from "react";
import apiRoutes from "./services/api.routes";

export const IndexContext = createContext({});

export default function IndexProvider({ children } : any) {
    const [user, setUser] = useState({})

    const getUser = async (username: string) => {
        try {
            const res = await apiRoutes.getUser(username)
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    const getRepositories = async (username: string) => {
        try {
            const res = await apiRoutes.getRepositories(username)
        } catch (err: any) {
            throw new Error(err.message)
        }
    }

    return (
        <IndexContext.Provider
            value={{
                user,
                setUser,
                getUser,
                getRepositories
            }}
        >
            {children}
        </IndexContext.Provider>
    );
}
