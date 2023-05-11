import * as React from 'react';
import './style.scss'
import {useEffect, useState} from "react";
import {Box} from "@mui/material";

const Ripple = (ref :  React.MutableRefObject<HTMLButtonElement | undefined>) => {
    const ripple = document.createElement('span')
    ripple.setAttribute('class', 'ripple')
    ref.current?.appendChild(ripple)
    setTimeout(() => ripple.remove(), 500)
}

export default Ripple
