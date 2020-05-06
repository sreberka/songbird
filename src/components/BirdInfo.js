import React, {useContext} from 'react'
import AudioPlayer from "react-h5-audio-player";
import {BirdsContext} from "../context/BirdsContext";

export const BirdInfo = () => {
    const {variant} = useContext(BirdsContext)

    if(!variant) {
        return <p className="instruction"><span>Послушайте плеер.</span><span>Выберите птицу из списка</span></p>
    }

    return (
        <div className="col-md-6">
            <div className="bird-details card">
                <div className="card-body"><img className="bird-image"
                                                src={variant.image}
                                                alt={variant.name} />
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><h4>{variant.name}</h4></li>
                        <li className="list-group-item"><span>{variant.species}</span></li>
                        <li className="list-group-item">
                            <AudioPlayer
                                autoPlayAfterSrcChange={false}
                                src={variant.audio}
                            />
                        </li>
                    </ul></div>
                <span className="bird-description">{variant.description}</span>
            </div>
        </div>
    )
}