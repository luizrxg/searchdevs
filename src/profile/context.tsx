import React, {createContext, useEffect, useState} from "react";

export const IndexContext = createContext({});

export default function IndexProvider({ children }) {
    const [title, setTitle] = useState('Sobre mim')

    return (
        <IndexContext.Provider
            value={{
            }}
        >
            {children}
        </IndexContext.Provider>
    );
}
