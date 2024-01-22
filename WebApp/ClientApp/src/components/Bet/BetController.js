

export const BetController = ({ canDouble, canSplit, canInsurance, onAction }) => {
    
    return (
        <div id="bet-options">
            <button className="bet-options-button" onClick={() => onAction('hit')}>Hit</button>
            <button className="bet-options-button" onClick={() => onAction('stand')}>Stand</button>
            { canDouble ? 
                <button className="bet-options-button" onClick={() => onAction('double')}>Double down</button>
            : <></>}
            { canSplit ?
                <button className="bet-options-button" onClick={() => onAction('split')}>Split</button>
            : <></>}
            { canInsurance ?
                <button className="bet-options-button" onClick={() => onAction('insurance')}>Insurance</button>
            : <></>}
        </div>
    )
    
}