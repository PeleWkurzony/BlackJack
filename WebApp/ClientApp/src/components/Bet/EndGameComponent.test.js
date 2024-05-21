import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EndGameComponent } from '../EndGameComponent';

describe('EndGameComponent', () => {
    test('renders the correct message when the game is a draw', () => {
        render(<EndGameComponent beforeRestart={() => { }} onRestart={() => { }} whoWon="draw" />);
        expect(screen.getByText('Draw')).toBeInTheDocument();
    });

    test('renders the correct message when the player wins', () => {
        render(<EndGameComponent beforeRestart={() => { }} onRestart={() => { }} whoWon="player" />);
        expect(screen.getByText('player won the game!')).toBeInTheDocument();
    });

    test('renders the correct message when the croupier wins', () => {
        render(<EndGameComponent beforeRestart={() => { }} onRestart={() => { }} whoWon="croupier" />);
        expect(screen.getByText('croupier won the game!')).toBeInTheDocument();
    });

    test('calls beforeRestart on component mount', () => {
        const beforeRestartMock = jest.fn();
        render(<EndGameComponent beforeRestart={beforeRestartMock} onRestart={() => { }} whoWon="player" />);
        expect(beforeRestartMock).toHaveBeenCalledTimes(1);
    });

    test('calls onRestart when the restart button is clicked', () => {
        const onRestartMock = jest.fn();
        render(<EndGameComponent beforeRestart={() => { }} onRestart={onRestartMock} whoWon="player" />);
        fireEvent.click(screen.getByText('Play new game'));
        expect(onRestartMock).toHaveBeenCalledTimes(1);
    });
});
