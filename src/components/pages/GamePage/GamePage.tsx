import { GameLayout } from '../../templates/GameLayout/GameLayout';
import { createContext, useState } from 'react';

import { GameBoard } from '@components/organisms/Game/GameBoard/GameBoard';
import { GameMenu } from '@components/organisms/Game/GameMenu/GameMenu';

export type GamePositionType = {
    x: number;
    y: number;
};

export interface GameContext {
    movedIndex: string | null;
    offset: GamePositionType;
    position: GamePositionType;
    setMovedIndex?: (value: string | null) => void;
    setOffset?: (value: GamePositionType) => void;
    setPosition?: (value: GamePositionType) => void;
}

export const GameContext = createContext<GameContext>({
    movedIndex: null,
    position: {
        x: 0,
        y: 0,
    },
    offset: {
        x: 0,
        y: 0,
    },
});

export const GamePage = () => {
    const [movedIndex, setMovedIndex] = useState<string | null>(null);
    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    });
    const [offset, setOffset] = useState({
        x: 0,
        y: 0,
    });

    return (
        <GameContext.Provider
            value={{
                movedIndex,
                offset,
                position,
                setMovedIndex,
                setOffset,
                setPosition,
            }}
        >
            <GameLayout>
                <GameBoard />
                <GameMenu />
            </GameLayout>
        </GameContext.Provider>
    );
};
