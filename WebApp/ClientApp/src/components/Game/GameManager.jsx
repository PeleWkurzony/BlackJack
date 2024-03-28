import { CardComponent } from "../Cards/CardComponent";
import { calculateCardPoints } from "../Cards/CardsPoints";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGameFinished, setWhoWon } from "../Context/GameManageSlice";

export const GameManager = () => {
    
    const croupierCards = useSelector((state) => state.card.croupierCards);
    const playerCards = useSelector((state) => state.card.playerCards);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if (calculateCardPoints(playerCards) > 21) {
            dispatch(setGameFinished(true));
            dispatch(setWhoWon('croupier'));
        }
        else if (calculateCardPoints(croupierCards) > 21) {
            dispatch(setGameFinished(true));
            dispatch(setWhoWon('player'));
        }
        else if (
            calculateCardPoints(croupierCards) === 21 && calculateCardPoints(playerCards) !== 21
        ) {
            dispatch(setGameFinished(true));
            dispatch(setWhoWon('croupier'));
        }
        else if (
            calculateCardPoints(croupierCards) !== 21 && calculateCardPoints(playerCards) !== 21
        ) {
            dispatch(setGameFinished(true));
            dispatch(setWhoWon('player'));
        }
        else if (
            calculateCardPoints(croupierCards) === 21 && calculateCardPoints(playerCards) === 21
        )
        {
            dispatch(setGameFinished(true));
            dispatch(setWhoWon('draw'));
        }
    }, [croupierCards, playerCards]);
    
    return (
        <>
            <h3>Krupier:</h3>
            {croupierCards.map((card, index) =>
                <CardComponent name={card.cardValue} isReversed={card.cardReversed} key={index} />
            )}
            Points: {calculateCardPoints(croupierCards)}
            <h3>Player:</h3>
            {playerCards.map((card, index) =>
                <CardComponent name={card.cardValue} isReversed={card.cardReversed} key={index} />
            )}
            Points: {calculateCardPoints(playerCards)}
        </>
    )
}
