import React from 'react';
import './GithubCard.css'

function GithubCard({ repos }: Props) {
    const onClick = function(url: string): void {
        let win: Window | null = window.open(url, "blank");
        win && win.focus();
    }
    const Fade: any = require("react-reveal/Fade");
    return(
        <Fade duration={800} bottom>
        <div>
            <div className="repo-card" onClick={() => onClick(repos.node.url)}>
                
                <div className="repo-card-name">
                    <svg className="octicon octicon-repo mr-2 text-gray flex-shrink-0" viewBox="0 0 16 16" version="1.1" width="20" height="20" aria-hidden="true"><path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg>
                    <p className="repo-name">{repos.node.name}</p>
                </div>
                
                <div className="repo-card-desc">
                    <p className="repo-desc">{repos.node.description}</p>
                </div>
                
                <div className="repo-card-stat">
                    <div className="wrapper-left">
                        <div className="lang-color" style={{ backgroundColor: repos.node.primaryLanguage.color }}></div>
                        <p className="repo-lang">{repos.node.primaryLanguage.name}</p>
                        <svg height="15" className="octicon octicon-star" viewBox="0 0 16 16" version="1.1" width="15" aria-hidden="true"><path fillRule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>
                        <p className="repo-lang">{repos.node.stargazers.totalCount}</p>
                        <svg className="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="15" height="15" aria-hidden="true"><path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>
                        <p className="repo-lang">{repos.node.forkCount}</p>
                    </div>
                    <div className="wrapper-right">
                        <p className="repo-lang">{repos.node.diskUsage}KB</p>
                    </div>
                </div>

            </div>
        </div>
        </Fade>
    )
}
interface Props {
    repos: {
        node: {
            url: string,
            name: string,
            description: string,
            primaryLanguage: {
                color: string,
                name: string
            },
            stargazers: {
                totalCount: number
            },
            forkCount: number,
            diskUsage: number
        },
    }
}
export default GithubCard;