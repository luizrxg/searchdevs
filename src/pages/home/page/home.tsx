import React, {useContext, useState, useEffect} from 'react';
import './styles.scss'
import HomeContext from '../context';
import { GlobalContext } from '../../../contexts/global';
import CustomTextField from '../../../common/components/textfield/textfield';
import CustomButton from '../../../common/components/button/button';
import LogoSVG from "../../../svgs/logo";

const Home = () => {
    const { search, setSearch, getUser } : any = useContext(GlobalContext)

    return (
        <div className="container">
            {/*<LogoSVG/>*/}
            <div className="search">
                <CustomTextField
                    value={search}
                    setValue={setSearch}
                />
                <CustomButton
                    onClick={getUser}
                >
                    Search
                </CustomButton>
            </div>
        </div>
    )
}

export default Home
