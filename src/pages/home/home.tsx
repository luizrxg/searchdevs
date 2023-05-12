import React, {useContext, useState, useEffect} from 'react';

import { GlobalContext } from '../../contexts/global';

import CustomTextField from '../../common/components/textfield/textfield';
import CustomButton from '../../common/components/button/button';
import LogoSVG from "../../svgs/logo";

import './styles.scss'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const {
        search,
        setSearch,
        getUser,
    } : any = useContext(GlobalContext)

    const navigate = useNavigate()

    useEffect(() => {
        search == "" && navigate('/')
    }, [])

    const doSearch = () => {
        getUser()
        search != "" && navigate('/perfil')
    }

    return (
        <div className="home-container">
            <LogoSVG/>
            <div className="home-search">
                <CustomTextField
                    placeholder="Search"
                    value={search}
                    onChange={setSearch}
                    style={{width: '50%'}}
                />
                <CustomButton
                    style={{width: '200px'}}
                    enabled={search != ""}
                    onClick={doSearch}
                >
                    Search
                </CustomButton>
            </div>
        </div>
    )
}

export default Home
