import * as React from 'react';
import {Button} from "@mui/material";
import './style.scss'

const CustomButton = (props: any) => {
    const onClick = () => {
        if (props?.onClick) {
            props?.onClick()
        }
    }

    return (
        <div className="button">
            <button
                {...props}
                onClick={onClick}
            />
        </div>
    )
}

export default CustomButton