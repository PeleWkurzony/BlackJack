import {useContext} from "react";
import {ActionsContext} from "../Context/ActionsContext";


export const BetController = ({ onAction }) => {
    
    const availableActions = useContext(ActionsContext);
    
    return (
        <div id="bet-options">
            <button className="bet-options-button" onClick={() => onAction('hit')}>Hit</button>
            <button className="bet-options-button" onClick={() => onAction('stand')}>Stand</button>
            { availableActions.canDouble ? 
                <button className="bet-options-button" onClick={() => onAction('double')}>Double down</button>
            : <></>}
            { availableActions.canSplit ?
                <button className="bet-options-button" onClick={() => onAction('split')}>Split</button>
            : <></>}
            { availableActions.canInsurance ?
                <button className="bet-options-button" onClick={() => onAction('insurance')}>Insurance</button>
            : <></>}
        </div>
    )
    
}