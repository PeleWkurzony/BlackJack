import { Bet } from './Bet/Bet';
import "./Style.scss";
import { Croupier } from './Home/Croupier';

export const Home = () => {
    return (
        <>
            <Croupier />
            <Bet />
        </>
    )
};