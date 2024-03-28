import { useContext } from "react";
import { ActionsContext } from "../Context/ActionsContext";
import {useSelector} from "react-redux";

/**
 * Represents a component for controlling betting actions.
 * @param {object} props - The properties passed to the component.
 * @param {Function} props.onAction - Callback function triggered on action.
 * @returns {JSX.Element} The JSX element representing the BetController component.
 */
export const BetController = ({ onAction }) => {

    /**
     * Available betting actions obtained from context.
     * @type {object}
     */
    const canDouble = useSelector((state) => state.actions.canDouble);
    const canSplit = useSelector((state) => state.actions.canSplit);
    const canInsurance = useSelector((state) => state.actions.canInsurance);

    /**
     * Renders buttons for betting actions.
     * @returns {JSX.Element} The JSX element representing the betting action buttons.
     */
    return (
        <div id="bet-options">
            <button className="bet-options-button" onClick={() => onAction('hit')}>Hit</button>
            <button className="bet-options-button" onClick={() => onAction('stand')}>Stand</button>
            {canDouble ?
                <button className="bet-options-button" onClick={() => onAction('double')}>Double down</button>
                : <></>}
            {canSplit ?
                <button className="bet-options-button" onClick={() => onAction('split')}>Split</button>
                : <></>}
            {canInsurance ?
                <button className="bet-options-button" onClick={() => onAction('insurance')}>Insurance</button>
                : <></>}
        </div>
    )
}
