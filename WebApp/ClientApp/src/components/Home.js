import { Bet } from './Bet/Bet';
import "./Style.scss";
import { Croupier } from './Home/Croupier';
import { BackgroundMusic } from './Home/BackgroundMusic';

/**
 * Represents the main screen component of the game.
 * @returns {JSX.Element} The JSX element representing the Home component.
 */
export const Home = () => {

    /**
     * Renders the main screen of the game.
     * @returns {JSX.Element} The JSX element representing the Home component.
     */
    return (
        <>
            <BackgroundMusic />
            <Croupier />
            <Bet />
        </>
    );
}
