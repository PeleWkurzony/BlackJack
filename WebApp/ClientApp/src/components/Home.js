import { Bet } from './Bet/Bet';
import { store } from  "./Context/Store";

export const Home = () => {
    return (
        <>
            Tutaj będzie ekran początkowy z linkami do postawienia zakładu
            <Bet />
        </>
    )
};