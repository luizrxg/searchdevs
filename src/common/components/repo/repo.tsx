import * as React from 'react';
import './style.scss'
import Repo from '../../../common/types/repo'
import { StarIcon } from "../../../svgs/icons";
import {getDaysSince} from "../../../util/date";

const Repo = (repo: Repo) => {

    const getDays = () => {
        const date = new Date()
        const today = new Date()
        const diff = Math.abs(date.getTime() - today.getTime());
        return `Atualizado há ${Math.ceil(diff / (1000 * 3600 * 24))} dias`
    }

    return (
        <div className="repo">
            <a className="title" href={repo.html_url}>{repo.name}</a>
            <p className="description">{repo.description}</p>
            <div>
                <StarIcon/>
                {repo.stargazers_count} • {getDaysSince(repo.updated_at)}
            </div>
        </div>
    )
}

export default Repo
