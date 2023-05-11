import * as React from 'react';
import './style.scss'
import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import Ripple from "../ripple/ripple";

const CustomButton = (props: any) => {
    const buttonRef = React.useRef<HTMLButtonElement>()

    return (
        <Box
            ref={buttonRef}
            className="button"
            onClick={() => Ripple(buttonRef)}
        >
            <button {...props}/>
        </Box>
    )
}

export default CustomButton
