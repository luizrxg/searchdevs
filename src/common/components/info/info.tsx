import * as React from 'react';
import './style.scss'

const Info = (props: any) => {

    return ( <>
        {props?.info != null &&
            <div className="info">
                {props?.children}
            </div>
        }
      </>
    )
}

export default Info
