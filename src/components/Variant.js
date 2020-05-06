import React, {useState, useContext, useEffect} from 'react'
import {BirdsContext} from "../context/BirdsContext";

export const Variant = ({bird}) => {
    const {setVariant, questionBird, guessed, checkRight, setScore, score, error, setError} = useContext(BirdsContext)
    const [answer, setAnswer] = useState('')
    const [checked, setChecked] = useState(false)

    const checkVariant = () => {
        if(bird.id === questionBird.id) {
            checkRight(true)
            setAnswer('success')
            setScore(score + 5 - error)
        }
        else if (!guessed) {
            setAnswer('error')
            setError(error + 1)
        } else {
            setAnswer('')
        }
        setChecked(true)
        setVariant(bird)
    }

    useEffect(() => {
        setChecked(false)
    },[bird])

    return (
        <>
            <li className={`list-group-item ${checked && answer}`} onClick={checkVariant}><span className="li-btn"></span>{bird.name}</li>
        </>
    )
}