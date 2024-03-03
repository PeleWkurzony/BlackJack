import { Bet } from './Bet/Bet';
import {CardComponent} from "./Cards/CardComponent";

export const Home = () => {
    return (
        <>
            Tutaj będzie ekran początkowy z linkami do postawienia zakładu
            <Bet />
            <CardComponent name={"1H"} />
            <CardComponent name={"AS"} isReversed={true} />
        </>
    )
};