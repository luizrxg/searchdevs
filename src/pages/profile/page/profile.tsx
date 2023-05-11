import React, {useContext, useState, useEffect} from 'react';

import ProfileContext from '../context';
import {GlobalContext} from '../../../contexts/global';

import CustomTextField from "../../../common/components/textfield/textfield";
import CustomButton from "../../../common/components/button/button";
import LogoSVG from "../../../svgs/logo";
import Info from "../../../common/components/info/info";

import {CompanyIcon, FollowersIcon, HeartIcon, LinkIcon, LocationIcon, MailIcon, TwitterIcon} from "../../../svgs/icons"

import './styles.scss'
import { Tooltip } from '@mui/material';
import {copy} from "../../../util/copy";

const Profile = () => {
    const {
        search,
        setSearch,
        user,
        getUser,
        repos
    }: any = useContext(GlobalContext)


    return ( <>
      {user == null &&
        <div className="container">
          <div className="header">
            <LogoSVG className="logo"/>
            <CustomTextField
              placeholder="Search"
              value={search}
              setValue={setSearch}
              style={{width: '50%'}}
            />
            <CustomButton onClick={getUser}>
              Search
            </CustomButton>
          </div>
          <div className="result-container">
            <div className="profile">
              <div className="profile-header">
                <img
                  alt="Profile Picture"
                  src={user?.avatar_url}
                />
                <aside>
                  <h1>{user?.name}</h1>
                  <h2>{user?.user}</h2>
                </aside>
              </div>
              <div className="profile-infos">
                <aside>
                  <Info>
                    <FollowersIcon/>
                    <p>{user?.followers} seguidores</p>
                  </Info>
                  <Info>
                    <HeartIcon/>
                    <p>{user?.followers} seguindo</p>
                  </Info>
                </aside>
                <p className="profile-bio">
                  {user?.bio}
                </p>
                <aside>
                  <Info info={user?.company}>
                    <CompanyIcon/>
                    <p>{user?.company}</p>
                  </Info>
                  <Info info={user?.location}>
                    <LocationIcon/>
                    <a href={`https://www.google.com.br/maps/search/${user?.location}`}>
                      {user?.location}
                    </a>
                  </Info>
                  <Info info={user?.link}>
                    <LinkIcon/>
                    <a href={user?.link}>
                      {user?.link}
                    </a>
                  </Info>
                  <Info info={user?.email}>
                    <MailIcon/>
                    <p>{user?.email}</p>
                  </Info>
                  <Info info={user?.twitter_username}>
                    <TwitterIcon/>
                    <a href={`https://twitter.com/${user?.twitter_username}`}>
                        {user?.twitter_username}
                    </a>
                  </Info>
                </aside>
              </div>
              <Tooltip title="Clique para copiar" arrow>
                <CustomButton
                  onClick={() => { copy(user?.email) }}
                >
                  Contato
                </CustomButton>
              </Tooltip>
            </div>
            <div className="repos-list"></div>
          </div>
        </div>}
      </>
    )
}

export default Profile
