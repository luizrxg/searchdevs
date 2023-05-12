import React, {useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes, useLocation} from "react-router-dom";
import Home from "./pages/home/home";
import Profile from "./pages/profile/profile";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/perfil" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
