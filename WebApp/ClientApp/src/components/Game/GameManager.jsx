import { CardComponent } from "../Cards/CardComponent";
import { calculateCardPoints } from "../Cards/CardsPoints";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setWhoWon } from "../Context/GameManageSlice";

export const GameManager = () => {
    
    const croupierCards = useSelector((state) => state.card.croupierCards);
    const playerCards = useSelector((state) => state.card.playerCards);
    
    const croupierEnded = useSelector((state) => state.card.croupierEnded);
    
    
    const dispatch = useDispatch();
    /*
            
            !!!!!!!!!!!!!!!!!!! DO NOT TOUCH !!!!!!!!!!!!!!!!!!!
    
     */
    useEffect(() => {
        // Croupier wins
        // If player have more than 21 points he lose
        if (calculateCardPoints(playerCards) > 21) {
            dispatch(setWhoWon('croupier'));
        }
        // If player stand and croupier have more than player and less than 21
        else if (croupierEnded && calculateCardPoints(croupierCards) <= 21 && calculateCardPoints(croupierCards) > calculateCardPoints(playerCards)) {
            dispatch(setWhoWon('croupier'));
        }
        //Draw
        // If player and croupier have 21 points
        else if (calculateCardPoints(playerCards) === 21 && calculateCardPoints(croupierCards) === 21) {
            dispatch(setWhoWon('draw'));
        }
        //Player wins
        // If croupier have more than 21 points he lose
        else if (calculateCardPoints(croupierCards) > 21) {
            dispatch(setWhoWon('player'));
        }
        // If player stand and player have more than croupier and less than 21
        else if (croupierEnded && calculateCardPoints(playerCards) <= 21 && calculateCardPoints(playerCards) > calculateCardPoints(croupierCards)) {
            dispatch(setWhoWon('croupier'));
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
