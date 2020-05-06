import React, {useContext} from 'react'
import {BirdsContext} from "../context/BirdsContext";

export const NextStepBtn = () => {
    const {changeStep, enabled} = useContext(BirdsContext)

    return (
        <button className={`btn ${enabled && 'btn-next'}`} onClick={changeStep} disabled={!enabled}>Next Level</button>
    )
}