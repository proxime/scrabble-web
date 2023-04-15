import { PlayersTable } from '../PlayersTable/PlayersTable';

import { GameLetters } from '@components/molecules/Game/GameLetters/GameLetters';

import { acceptPuzzles } from '@store/gameSlice';
import { useAppDispatch } from '@store/store';

import { GameMenuWrapper } from './GameMenu.styled';

export const GameMenu = () => {
    const dispatch = useAppDispatch();

    return (
        <GameMenuWrapper>
            <PlayersTable />
            <GameLetters />
            <button onClick={() => dispatch(acceptPuzzles())}>accept</button>
        </GameMenuWrapper>
    );
};
