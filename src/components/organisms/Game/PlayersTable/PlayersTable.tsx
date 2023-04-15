import { GamePlayer } from '@components/molecules/Game/GamePlayer/GamePlayer';

import { PlayersTableWrapper } from './PlayersTable.styled';

export interface PlayersTableProps {}

export const PlayersTable = ({}: PlayersTableProps) => {
    return (
        <PlayersTableWrapper>
            <GamePlayer />
            <GamePlayer />
            <GamePlayer />
            <GamePlayer />
        </PlayersTableWrapper>
    );
};
