import {Box, TextField} from "@mui/material";
import './style.scss'
import {useRef} from "react";
import SearchIcon from '@mui/icons-material/Search';

const CustomTextField = (props: any) => {
    const inputRef = useRef<HTMLInputElement>()

    return (
        <Box
            ref={inputRef}
            className="input"
            sx={props?.style}
        >
            <input
                {...props}
                style={props?.inputStyle}
                onChange={(e: any) => props?.onChange(e.target.value)}
            />
            <SearchIcon/>
        </Box>
    )
}

export default CustomTextField
