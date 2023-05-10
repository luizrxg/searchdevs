import {TextField} from "@mui/material";
import './style.scss'
const CustomTextField = (props: any) => {

    return (
        <input
            className="input"
            {...props}
        />
    )
}

export default CustomTextField
