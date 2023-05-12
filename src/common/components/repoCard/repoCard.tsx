import * as React from 'react';
import './style.scss'
import Repo from '../../types/repo'
import { StarIcon } from "../../../svgs/icons";
import {getDaysSince} from "../../../util/date";

const RepoCard = (repo: Repo) => {
    return (
        <div className="repo">
            <a className="title" onClick={() => window.open(repo.html_url)}>{repo.name}</a>
            <p className="description">{repo.description}</p>
            <div>
                <StarIcon/>
                <p>{repo.stargazers_count} • Atualizado há {getDaysSince(repo.updated_at)} dias</p>
            </div>
        </div>
    )
}

export default RepoCard
