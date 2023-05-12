import React, {useContext, useState, useEffect} from 'react';

import ProfileContext from '../context';
import {GlobalContext} from '../../../contexts/global';

import CustomTextField from "../../../common/components/textfield/textfield";
import CustomButton from "../../../common/components/button/button";
import LogoSVG from "../../../svgs/logo";
import Info from "../../../common/components/info/info";

import {CompanyIcon, FollowersIcon, HeartIcon, LinkIcon, LocationIcon, MailIcon, TwitterIcon} from "../../../svgs/icons"

import './styles.scss'
import { CircularProgress, Tooltip } from '@mui/material';
import {copy} from "../../../util/copy";
import Repo from '../../../common/types/repo';
import RepoCard from '../../../common/components/repoCard/repoCard';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const {
      search,
      setSearch,
      user,
      getUser,
      repos, 
      loading
    }: any = useContext(GlobalContext)

    const navigate = useNavigate()

    return ( <>
        <div className="profile-container">
          <div className="profile-header">
            <LogoSVG className="profile-logo"/>
            <div className="profile-search">
              <CustomTextField
                placeholder="Search"
                value={search}
                onChange={setSearch}
                onEnter={getUser}
                style={{width: '50%'}}
              />
              <CustomButton style={{width: '200px'}} onClick={getUser}>
                Search
              </CustomButton>
            </div>
          </div>
          <div className="profile-result-container">
          {!loading ? <>
          {user && <>
            <div className="profile-result">
              <div className="profile-result-header">
                <img
                  alt="Profile Picture"
                  src={user?.avatar_url}
                />
                <aside>
                  <h1>{user?.name}</h1>
                  <h2>@{user?.login}</h2>
                </aside>
              </div>
              <div className="profile-result-infos">
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
                <p className="profile-result-bio">
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
                <Tooltip title="Clique para copiar" arrow>
                  <CustomButton
                    style={{width: '100%'}}
                    onClick={() => { copy(user?.email) }}
                  >
                    Contato
                  </CustomButton>
                </Tooltip>
              </div>
            </div>
            <div className="profile-result-repos-list">
              {repos?.map((repo: Repo) => <RepoCard {...repo}/>)}
            </div> </>
          } </> : <CircularProgress/>}
          </div>
        </div>
      </>
    )
}

export default Profile
