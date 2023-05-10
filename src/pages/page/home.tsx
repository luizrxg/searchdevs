import React, {useContext, useState, useEffect} from 'react';
import HomeContext from '../context';
import { GlobalContext } from '../../contexts/global';
import './styles.scss'
import CustomTextField from "../../common/components/input";

const Home = () => {
    const { search, setSearch } : any = useContext(GlobalContext)

    return (
        <div className={"container"}>
            <div className={"search"}>
                <CustomTextField
                    value={search}
                    setValue={setSearch}
                />
            </div>
        </div>
    )
}

export default Home
