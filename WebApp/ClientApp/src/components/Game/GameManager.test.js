import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import GameManager from './path/to/your/GameManager';
import { setWhoWon, setCroupierNeedCards } from '../Context/GameManageSlice';
import { setCanInsurance, setCanSplit } from '../Context/ActionsContext';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);
const initialState = {
    card: {
        croupierCards: [],
        playerCards: [],
        croupierEnded: false
    },
    gameManager: {
        whoWon: undefined
    }
};

describe('GameManager component', () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    it('should render GameManager without crashing', () => {
        render(
            <Provider store={store}>
                <GameManager />
            </Provider>
        );

        expect(screen.getByText(/Croupier Points:/)).toBeInTheDocument();
        expect(screen.getByText(/Player Points:/)).toBeInTheDocument();
    });

    it('should dispatch setWhoWon and setCroupierNeedCards actions when player points exceed 21', () => {
        store = mockStore({
            ...initialState,
            card: {
                ...initialState.card,
                playerCards: [{ cardValue: 'K' }, { cardValue: 'Q' }, { cardValue: '2' }]
            }
        });

        render(
            <Provider store={store}>
                <GameManager />
            </Provider>
        );

        const actions = store.getActions();
        expect(actions).toContainEqual(setWhoWon('croupier'));
        expect(actions).toContainEqual(setCroupierNeedCards(false));
    });

    it('should dispatch setCanSplit action when player can split cards', () => {
        store = mockStore({
            ...initialState,
            card: {
                ...initialState.card,
                playerCards: [{ cardValue: '8' }, { cardValue: '8' }]
            }
        });

        render(
            <Provider store={store}>
                <GameManager />
            </Provider>
        );

        const actions = store.getActions();
        expect(actions).toContainEqual(setCanSplit(true));
    });

    it('should dispatch setCanInsurance action when croupier has an Ace', () => {
        store = mockStore({
            ...initialState,
            card: {
                ...initialState.card,
                croupierCards: [{ cardValue: 'A' }]
            }
        });

        render(
            <Provider store={store}>
                <GameManager />
            </Provider>
        );

        const actions = store.getActions();
        expect(actions).toContainEqual(setCanInsurance(true));
    });

    // Dodaj wiêcej testów dla innych przypadków logiki gry tutaj...
});
