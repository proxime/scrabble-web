import { PlayerType } from '@@types/game';

import { Avatar } from '@components/atoms/Avatar/Avatar';
import { Button } from '@components/molecules/Button/Button';

import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    EmptyUserWrapper,
    LobbyUsersWrapper,
    Nickname,
    UserWrapper,
} from './LobbyUsers.styled';

export interface LobbyUsersProps {
    players: PlayerType[];
    isCreator: boolean;
}

export const LobbyUsers = ({ players, isCreator }: LobbyUsersProps) => {
    return (
        <LobbyUsersWrapper>
            {Array(4)
                .fill(0)
                .map((_, index) => {
                    const player = players[index];
                    const playerData = player?.player;

                    return (
                        <UserWrapper key={index} isEmpty={!player}>
                            {player ? (
                                <>
                                    <Avatar
                                        image="https://picsum.photos/200"
                                        size={70}
                                    />
                                    <Nickname>{playerData.nick}</Nickname>
                                </>
                            ) : (
                                <EmptyUserWrapper>
                                    <Button variant="secondary" minWidth={52}>
                                        <FontAwesomeIcon
                                            icon={faPlus}
                                            color="white"
                                            fontSize={'32px'}
                                        />
                                    </Button>
                                </EmptyUserWrapper>
                            )}
                        </UserWrapper>
                    );
                })}
        </LobbyUsersWrapper>
    );
};
