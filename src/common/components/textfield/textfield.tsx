import {Box, TextField} from "@mui/material";
import './style.scss'
import {useRef} from "react";
import SearchIcon from '@mui/icons-material/Search';

const CustomTextField = (props: any) => {
    const inputRef = useRef<HTMLInputElement>()

    if (props.onEnter != null) {
        inputRef.current?.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                props?.onEnter()
            }
        });
    }

    return (
        <Box
            ref={inputRef}
            className="input"
            sx={props?.style}
        >
            <input
                {...props}
                style={props?.inputStyle}
            />
            <SearchIcon/>
            <div id="focused-border"/>
            <div id="unfocused-border"/>
        </Box>
    )
}

export default CustomTextField
