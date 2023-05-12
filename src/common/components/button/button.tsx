import * as React from 'react';
import './style.scss'
import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import Ripple from "../ripple/ripple";

const CustomButton = (props: any) => {
    const buttonRef = React.useRef<HTMLButtonElement>()

    return (
        <button
            {...props}
            ref={buttonRef}
            className={`button ${props?.enabled == false && 'disabled'}`}
            onClick={() => {
                if (props.enabled != false) {
                    Ripple(buttonRef)
                    props.onClick()
                }
            }}
        />
    )
}

export default CustomButton
