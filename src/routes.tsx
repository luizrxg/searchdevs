import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Profile from "./pages/profile";

export default function Routes() {

    return (
        <BrowserRouter>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </BrowserRouter>
    )
}
