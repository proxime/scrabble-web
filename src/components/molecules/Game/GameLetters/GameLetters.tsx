import { GameLetter } from '../GameLetter/GameLetter';

import { setActiveLetter } from '@store/gameSlice';
import { useAppDispatch, useAppSelector } from '@store/store';

import { GameLettersWrapper } from './GameLetters.styled';

export interface GameLettersProps {}

export const GameLetters = ({}: GameLettersProps) => {
    const { activeLetter, availablePuzzles } = useAppSelector(
        (state) => state.game,
    );

    const dispatch = useAppDispatch();

    return (
        <GameLettersWrapper>
            {availablePuzzles.map(({ key, name, value }) => (
                <GameLetter
                    active={activeLetter?.key === key}
                    index={key}
                    key={key}
                    name={name}
                    setActive={() => dispatch(setActiveLetter(key))}
                    value={value}
                />
            ))}
        </GameLettersWrapper>
    );
};
