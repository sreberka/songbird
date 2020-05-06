import React, {useContext} from 'react'
import {BirdsContext} from "../context/BirdsContext";
import birdsData from "../birds";

export const GameResult = () => {
    const {clearData, score} = useContext(BirdsContext)
    const total = birdsData.length*5

    return (
        <div className="jumbotron game-over"><h1 className="display-3 text-center">Поздравляем!</h1><p
            className="lead text-center">Вы прошли викторину и набрали {score} из {total} возможных баллов</p>
            <hr className="my-4" />
            <button onClick={clearData} className="btn btn-next btn-game-over">Попробовать еще раз!</button>
        </div>
    )
}