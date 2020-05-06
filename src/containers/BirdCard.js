import React from 'react'
import {BirdsList} from '../components/BirdsList'
import {BirdInfo} from '../components/BirdInfo';
import {NextStepBtn} from '../components/NextStepBtn';
import {Question} from '../components/Question'


export const BirdCard = () => {
    return (
        <>
            <Question />
            <div className="row mb2">
                <BirdsList />
                <BirdInfo />
                <NextStepBtn />
            </div>
        </>
    )
}