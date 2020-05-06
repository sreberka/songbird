import React, {useContext, useEffect} from 'react'
import birdsData from "../birds";
import {BirdsContext} from "../context/BirdsContext";

export const Header = ({active}) => {
    const {score} = useContext(BirdsContext)

    return (
        <div className="header d-flex">
            <div className="top-panel d-flex">
                <div className="logo" />
                <h5>Score: <span className="score">{score}</span></h5>
            </div>
            <ul className="pagination">
                {birdsData.map((item, i) => <li key={i} className={active === i ?"page-item active": "page-item"}><a className="page-link" href="/#">{item.name}</a></li>)}
            </ul>
        </div>
    )
}