import React, {createContext, useEffect, useState} from "react";
import apiRoutes from "../../services/api.routes";

export const ProfileContext = createContext({});

export default function ProfileProvider({ children }: any) {

    return (
        <ProfileContext.Provider
            value={{

            }}
        >
            {children}
        </ProfileContext.Provider>
    );
}
