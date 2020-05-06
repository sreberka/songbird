import React, {useContext, useEffect, useState} from 'react'
import AudioPlayer from "react-h5-audio-player";
import {BirdsContext} from "../context/BirdsContext";
import birdsData from '../birds'

export const Question = () => {
    const {activeStep, questionBird, setQuestionBird, guessed} = useContext(BirdsContext)
    const [src, setSrc] = useState()
    const [name, setName] = useState('******')
    const [image, setImage] = useState('https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg')
    const birds = birdsData[activeStep].items

    useEffect(() => {
        const rand = Math.floor(Math.random() * birds.length);
        const data = birds[rand]
        setQuestionBird(data)
        setSrc(data.audio)
    }, [activeStep])

    useEffect(() => {
        if(questionBird && guessed) {
            setName(questionBird.name)
            setImage(questionBird.image)
        } else {
            setName('******')
            setImage('https://birds-quiz.netlify.app/static/media/bird.06a46938.jpg')
        }
    }, [guessed])

    return (
        <div className="random-bird jumbotron rounded">
            <img className="bird-image" src={image} alt="bird" />
            <div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h3>{name}</h3></li>
                    <li className="list-group-item">
                        <div className="audio-player">
                            <AudioPlayer
                                autoPlay={false}
                                autoPlayAfterSrcChange={false}
                                src={src}
                            />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}