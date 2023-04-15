import { Avatar } from '@components/atoms/Avatar/Avatar';

import {
    GamePlayerWrapper,
    Nickname,
    PlayerHeader,
    PlayerValues,
    Points,
    Timer,
} from './GamePlayer.styled';

export interface GamePlayerProps {}

export const GamePlayer = ({}: GamePlayerProps) => {
    return (
        <GamePlayerWrapper>
            <PlayerHeader>
                <Avatar image={'https://picsum.photos/200'} />
                <Nickname>Zoey</Nickname>
            </PlayerHeader>
            <PlayerValues>
                <Points>10000</Points>
                <Timer>00:00</Timer>
            </PlayerValues>
        </GamePlayerWrapper>
    );
};
