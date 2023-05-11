import React, {useContext, useState, useEffect} from 'react';

import HomeContext from '../context';
import { GlobalContext } from '../../../contexts/global';

import CustomTextField from '../../../common/components/textfield/textfield';
import CustomButton from '../../../common/components/button/button';
import LogoSVG from "../../../svgs/logo";

import './styles.scss'

const Home = () => {
    const { search, setSearch, getUser } : any = useContext(GlobalContext)

    return (
        <div className="container">
            {/*<LogoSVG/>*/}
            <div className="search">
                <CustomTextField
                    placeholder="Search"
                    value={search}
                    setValue={setSearch}
                    onEnter={getUser}
                />
                <CustomButton onClick={getUser}>
                    Search
                </CustomButton>
            </div>
        </div>
    )
}

export default Home
