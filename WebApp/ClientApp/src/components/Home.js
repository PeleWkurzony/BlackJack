import { Bet } from './Bet/Bet';
import "./Style.scss";
import { Croupier } from './Home/Croupier';
import { BackgroundMusic } from './Home/BackgroundMusic';

export const Home = () => {
    return (
        <>
            <BackgroundMusic />
            <Croupier />
            <Bet />
        </>
    )
};