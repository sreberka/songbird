import React, {useContext} from 'react'
import {Variant} from "./Variant";
import {BirdsContext} from "../context/BirdsContext";
import birdsData from '../birds';

export const BirdsList = () => {
    const {activeStep} = useContext(BirdsContext)
    const birds = birdsData[activeStep].items

    return (
        <div className="col-md-6">
            <ul className="item-list list-group">
                {birds && birds.map((item, i) => <Variant key={i} bird={item} />)}
            </ul>
        </div>
    )
}