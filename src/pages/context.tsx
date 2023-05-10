import React, {createContext, useEffect, useState} from "react";

export const HomeContext = createContext({});

export default function HomeProvider({ children } : any) {
    const [title, setTitle] = useState('Sobre mim')

    return (
        <HomeContext.Provider
            value={{
            }}
        >
            {children}
        </HomeContext.Provider>
    );
}
