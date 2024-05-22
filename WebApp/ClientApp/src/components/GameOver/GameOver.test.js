import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { GameOver } from './path/to/your/GameOver';
import { changeMoney } from '../Context/ProfileSlice';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);
const initialState = {};

describe('GameOver component', () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
        store.dispatch = jest.fn();
    });

    it('should render GameOver without crashing', () => {
        render(
            <Provider store={store}>
                <GameOver />
            </Provider>
        );

        expect(screen.getByText(/Game Over/)).toBeInTheDocument();
        expect(screen.getByText(/Start Again/)).toBeInTheDocument();
    });

    it('should dispatch changeMoney action with 100 when "Start Again" button is clicked', () => {
        render(
            <Provider store={store}>
                <GameOver />
            </Provider>
        );

        fireEvent.click(screen.getByText(/Start Again/));

        expect(store.dispatch).toHaveBeenCalledWith(changeMoney(100));
    });
});
