import { Bet } from './Bet/Bet';
import { CardComponent } from "./Cards/CardComponent";
import { calculatePoints } from "./Cards/CardsPoints";

export const Home = () => {
    return (
        <>
            Tutaj będzie ekran początkowy z linkami do postawienia zakładu
            <Bet />
            <CardComponent name={"2D"} />
            <CardComponent name={"3C"} isReversed={true} />
        </>
    )
};