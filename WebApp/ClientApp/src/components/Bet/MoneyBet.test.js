import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MoneyBet } from '../MoneyBet';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

describe('MoneyBet', () => {
    let store;
    let onBetAcceptMock;

    beforeEach(() => {
        store = mockStore({
            profile: {
                money: 1000
            }
        });

        onBetAcceptMock = jest.fn();

        render(
            <Provider store={store}>
                <MoneyBet onBetAccept={onBetAcceptMock} />
            </Provider>
        );
    });

    test('renders the MoneyBet component', () => {
        expect(screen.getByText('Ile chcesz postawiæ?')).toBeInTheDocument();
    });

    test('allows setting bet amount', () => {
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: 500 } });
        expect(input.value).toBe('500');
    });

    test('validates bet amount and shows error if invalid', () => {
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: 1500 } });

        const acceptButton = screen.getByText('Akceptujê');
        fireEvent.click(acceptButton);

        expect(screen.getByText('Nie masz takiej iloœci pieniêdzy!')).toBeInTheDocument();
    });

    test('does not show error for valid bet amount', () => {
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: 500 } });

        const acceptButton = screen.getByText('Akceptujê');
        fireEvent.click(acceptButton);

        expect(screen.queryByText('Nie masz takiej iloœci pieniêdzy!')).not.toBeInTheDocument();
    });

    test('calls onBetAccept when the bet is accepted', () => {
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: 500 } });

        const acceptButton = screen.getByText('Akceptujê');
        fireEvent.click(acceptButton);

        expect(onBetAcceptMock).toHaveBeenCalledTimes(1);
    });

    test('dispatches changeMoney and changeBet actions on valid bet', () => {
        const input = screen.getByRole('spinbutton');
        fireEvent.change(input, { target: { value: 500 } });

        const acceptButton = screen.getByText('Akceptujê');
        fireEvent.click(acceptButton);

        const actions = store.getActions();
        expect(actions).toEqual([
            { type: 'profile/changeMoney', payload: 500 },
            { type: 'profile/changeBet', payload: 500 },
            { type: 'gameManager/setGameStarted', payload: true }
        ]);
    });

    test('sets bet amount to all available money on "All in" click', () => {
        const allInButton = screen.getByText('All in');
        fireEvent.click(allInButton);

        const input = screen.getByRole('spinbutton');
        expect(input.value).toBe('1000');
    });
});
