import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Bet } from './Bet';
import { MoneyBet } from './MoneyBet';
import { BetController } from './BetController';
import { EndGameComponent } from './EndGameComponent';
import { GameOver } from '../GameOver/GameOver';

// Mock redux store
const mockStore = configureStore([]);
let store;

beforeEach(() => {
    store = mockStore({
        gameManager: {
            gameFinished: false,
            whoWon: null,
        },
        card: {
            croupierCards: [],
        },
        profile: {
            money: 1000,
            bet: 100,
            insuranceMoney: 0,
        },
        actions: {
            canDouble: true,
            canSplit: true,
            canInsurance: true,
        }
    });
    store.dispatch = jest.fn();
});

test('renders MoneyBet component when isBet is false and money > 0', () => {
    render(
        <Provider store={store}>
            <Bet />
        </Provider>
    );
    expect(screen.getByText(/Place your bet/i)).toBeInTheDocument();
});

test('renders GameOver component when isBet is false and money === 0', () => {
    store = mockStore({
        ...store.getState(),
        profile: { money: 0 }
    });

    render(
        <Provider store={store}>
            <Bet />
        </Provider>
    );
    expect(screen.getByText(/Game Over/i)).toBeInTheDocument();
});

test('renders BetController component when isBet is true', () => {
    render(
        <Provider store={store}>
            <Bet />
        </Provider>
    );

    fireEvent.click(screen.getByText(/Place your bet/i));

    expect(screen.getByText(/Hit/i)).toBeInTheDocument();
    expect(screen.getByText(/Stand/i)).toBeInTheDocument();
    expect(screen.getByText(/Double/i)).toBeInTheDocument();
    expect(screen.getByText(/Split/i)).toBeInTheDocument();
    expect(screen.getByText(/Insurance/i)).toBeInTheDocument();
});

test('dispatches correct actions on BetController actions', () => {
    render(
        <Provider store={store}>
            <Bet />
        </Provider>
    );

    fireEvent.click(screen.getByText(/Place your bet/i));

    fireEvent.click(screen.getByText(/Hit/i));
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'card/addPlayerCard' });

    fireEvent.click(screen.getByText(/Stand/i));
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'gameManage/setIsStand', payload: true });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'card/addCroupierCard' });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'card/processStandOption' });

    fireEvent.click(screen.getByText(/Double/i));
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'actions/setCanDouble', payload: false });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'profile/changeMoney', payload: 900 });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'profile/changeBet', payload: 200 });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'card/addPlayerCard' });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'gameManage/setIsStand', payload: true });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'card/addCroupierCard' });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'card/processStandOption' });

    fireEvent.click(screen.getByText(/Split/i));
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'actions/setCanSplit', payload: false });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'profile/changeBet', payload: 200 });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'card/splitPlayerCards' });

    fireEvent.click(screen.getByText(/Insurance/i));
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'actions/setCanInsurance', payload: false });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'profile/changeMoney', payload: 950 });
});

test('renders EndGameComponent when gameFinished is true', () => {
    store = mockStore({
        ...store.getState(),
        gameManager: { gameFinished: true, whoWon: 'player' }
    });

    render(
        <Provider store={store}>
            <Bet />
        </Provider>
    );

    fireEvent.click(screen.getByText(/Place your bet/i));

    expect(screen.getByText(/End of game/i)).toBeInTheDocument();
    fireEvent.click(screen.getByText(/Restart/i));
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'gameManage/resetGameManager' });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'actions/resetActions' });
    expect(store.dispatch).toHaveBeenCalledWith({ type: 'card/resetCards' });
});
