import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BetController } from './BetController';

// Mock redux store
const mockStore = configureStore([]);
let store;

beforeEach(() => {
    store = mockStore({
        actions: {
            canDouble: true,
            canSplit: true,
            canInsurance: true,
        }
    });
});

test('renders all action buttons when all actions are available', () => {
    render(
        <Provider store={store}>
            <BetController onAction={jest.fn()} />
        </Provider>
    );

    expect(screen.getByText(/Hit/i)).toBeInTheDocument();
    expect(screen.getByText(/Stand/i)).toBeInTheDocument();
    expect(screen.getByText(/Double down/i)).toBeInTheDocument();
    expect(screen.getByText(/Split/i)).toBeInTheDocument();
    expect(screen.getByText(/Insurance/i)).toBeInTheDocument();
});

test('does not render Double down button when canDouble is false', () => {
    store = mockStore({
        actions: {
            canDouble: false,
            canSplit: true,
            canInsurance: true,
        }
    });

    render(
        <Provider store={store}>
            <BetController onAction={jest.fn()} />
        </Provider>
    );

    expect(screen.queryByText(/Double down/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Hit/i)).toBeInTheDocument();
    expect(screen.getByText(/Stand/i)).toBeInTheDocument();
    expect(screen.getByText(/Split/i)).toBeInTheDocument();
    expect(screen.getByText(/Insurance/i)).toBeInTheDocument();
});

test('does not render Split button when canSplit is false', () => {
    store = mockStore({
        actions: {
            canDouble: true,
            canSplit: false,
            canInsurance: true,
        }
    });

    render(
        <Provider store={store}>
            <BetController onAction={jest.fn()} />
        </Provider>
    );

    expect(screen.queryByText(/Split/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Hit/i)).toBeInTheDocument();
    expect(screen.getByText(/Stand/i)).toBeInTheDocument();
    expect(screen.getByText(/Double down/i)).toBeInTheDocument();
    expect(screen.getByText(/Insurance/i)).toBeInTheDocument();
});

test('does not render Insurance button when canInsurance is false', () => {
    store = mockStore({
        actions: {
            canDouble: true,
            canSplit: true,
            canInsurance: false,
        }
    });

    render(
        <Provider store={store}>
            <BetController onAction={jest.fn()} />
        </Provider>
    );

    expect(screen.queryByText(/Insurance/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Hit/i)).toBeInTheDocument();
    expect(screen.getByText(/Stand/i)).toBeInTheDocument();
    expect(screen.getByText(/Double down/i)).toBeInTheDocument();
    expect(screen.getByText(/Split/i)).toBeInTheDocument();
});

test('calls onAction with correct argument when buttons are clicked', () => {
    const onAction = jest.fn();

    render(
        <Provider store={store}>
            <BetController onAction={onAction} />
        </Provider>
    );

    fireEvent.click(screen.getByText(/Hit/i));
    expect(onAction).toHaveBeenCalledWith('hit');

    fireEvent.click(screen.getByText(/Stand/i));
    expect(onAction).toHaveBeenCalledWith('stand');

    fireEvent.click(screen.getByText(/Double down/i));
    expect(onAction).toHaveBeenCalledWith('double');

    fireEvent.click(screen.getByText(/Split/i));
    expect(onAction).toHaveBeenCalledWith('split');

    fireEvent.click(screen.getByText(/Insurance/i));
    expect(onAction).toHaveBeenCalledWith('insurance');
});
