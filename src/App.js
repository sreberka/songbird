import React, {useState} from 'react';
import './bootstrap.css'
import './App.css';
import {Header} from './components/Header'
import {GameResult} from "./components/GameResult";
import {BirdCard} from "./containers/BirdCard";
import {BirdsContext} from "./context/BirdsContext";
import birdsData from "./birds";

function App() {
    const [completed, setComplited] = useState(false)
    const [activeStep, setActive] = useState(0)
    const [variant, setVariant] = useState(null)
    const [questionBird, setQuestionBird] = useState()
    const [enabled, setEnable] = useState(false)
    const [guessed, setGuessed] = useState(false)
    const [score, setScore] = useState(0)
    const [error, setError] = useState(0)

    const changeStep = () => {
        let active = activeStep+1
        setActive(active)
        setEnable(false)
        setGuessed(false)
        setVariant(null)
        setError(0)
        if(activeStep === birdsData.length - 1) {
            setComplited(true)
        }
    }

    const clearData = () => {
        setActive(0)
        setComplited(false)
        setScore(0)
    }

    const checkRight = () => {
        setGuessed(true)
        setEnable(true)
    }

    const valuesObj = {
        changeStep, clearData, setVariant,
        activeStep, variant, setQuestionBird, questionBird,
        guessed, checkRight, enabled,
        score, setScore,
        error, setError
    }

    return (
        <BirdsContext.Provider value={valuesObj}>
        <div className="container">
          <Header active={activeStep}/>
          {!completed ? <BirdCard /> : <GameResult/>}
        </div>
        </BirdsContext.Provider>
    );
}

export default App;
