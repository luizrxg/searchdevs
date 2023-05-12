import React, {useContext, useState, useEffect} from 'react';

import {GlobalContext} from '../../contexts/global';

import CustomTextField from "../../common/components/textfield/textfield";
import CustomButton from "../../common/components/button/button";
import LogoSVG from "../../svgs/logo";
import Info from "../../common/components/info/info";

import {CompanyIcon, FollowersIcon, HeartIcon, LinkIcon, LocationIcon, MailIcon, TwitterIcon} from "../../svgs/icons"

import './styles.scss'
import {CircularProgress, Tooltip, useMediaQuery} from '@mui/material';
import {copy} from "../../util/copy";
import Repo from '../../common/types/repo';
import RepoCard from '../../common/components/repoCard/repoCard';
import { useNavigate } from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";

const Profile = () => {
    const {
      search,
      setSearch,
      user,
      getUser,
      repos,
      loading
    }: any = useContext(GlobalContext)

    const isDesktop = useMediaQuery('(min-width:600px)');
    const navigate = useNavigate()

    return ( <>
        <div className="profile-container">
          <div className="profile-header">
            <LogoSVG onClick={() => navigate('/home')} className="profile-logo"/>
            <div className="profile-search">
              <CustomTextField
                placeholder="Search"
                value={search}
                onChange={setSearch}
                onEnter={getUser}
                style={{width: '50%'}}
              />
              <CustomButton style={{width: isDesktop ? '200px' : 'fit-content'}} enabled={search != ""} onClick={getUser}>
                  {isDesktop ? "Search" : <SearchIcon/>}
              </CustomButton>
            </div>
          </div>
          <div className="profile-result-container">
            {!loading ? <>
              {user && <>
                <div className="profile-result-items">
                  <div className="profile-result-header">
                    <img
                      alt="Profile Picture"
                      src={user?.avatar_url}
                    />
                    <aside>
                      <a onClick={() => window.open(user?.html_url)}>{user?.name}</a>
                      <p>@{user?.login}</p>
                    </aside>
                  </div>
                  <div className="profile-result-infos">
                    <Info info={user?.bio}>
                      <p>{user?.bio}</p>
                    </Info>
                    <aside>
                      <Info info={user?.followers}>
                        <FollowersIcon/>
                        <p>{user?.followers} seguidores</p>
                      </Info>
                      <Info info={user?.following}>
                        <HeartIcon/>
                        <p>{user?.following} seguindo</p>
                      </Info>
                    </aside>
                    <aside>
                      <Info info={user?.company}>
                        <CompanyIcon/>
                        <p>{user?.company}</p>
                      </Info>
                      <Info info={user?.location}>
                        <LocationIcon/>
                        <a onClick={() => window.open(`https://www.google.com.br/maps/search/${user?.location}`)}>
                          {user?.location}
                        </a>
                      </Info>
                      <Info info={user?.link}>
                        <LinkIcon/>
                        <a onClick={() => window.open(user?.link)}>
                          {user?.link}
                        </a>
                      </Info>
                      <Info info={user?.email}>
                        <MailIcon/>
                        <p>{user?.email}</p>
                      </Info>
                      <Info info={user?.twitter_username}>
                        <TwitterIcon/>
                        <a onClick={() => window.open(`https://twitter.com/${user?.twitter_username}`)}>
                            @{user?.twitter_username}
                        </a>
                      </Info>
                    </aside>
                    <Tooltip title="Clique para copiar o email" arrow>
                      <CustomButton
                        style={{width: '100%'}}
                        onClick={() => copy(user?.email != null ? user?.email : '')}
                      >
                        Contato
                      </CustomButton>
                    </Tooltip>
                  </div>
                </div>
                <div className="profile-result-repos-list">
                  {repos.lenght >= 1 ? <>
                    {repos?.sort((a: Repo, b: Repo) => b.stargazers_count- a.stargazers_count)
                        ?.map((repo: Repo) => <RepoCard {...repo}/>)
                    } </> :
                    <p style={{margin: "auto"}}>Nenhum repositório encontrado</p>
                  }
                </div> </>
                } </> : <CircularProgress sx={{ margin: 'auto' }}/>}
            </div>
        </div>
      </>
    )
}

export default Profile
