import {Button} from "@mui/material";
import './style.scss'

const CustomButton = (props: any) => {

    return (
        <button
            className="button"
            {...props}
        />
    )
}

export default CustomButton
