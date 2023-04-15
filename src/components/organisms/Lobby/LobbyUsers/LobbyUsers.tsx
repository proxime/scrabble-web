import { Avatar } from '@components/atoms/Avatar/Avatar';

import { LobbyUsersWrapper, Nickname, UserWrapper } from './LobbyUsers.styled';

export interface LobbyUsersProps {}

export const LobbyUsers = ({}: LobbyUsersProps) => {
    return (
        <LobbyUsersWrapper>
            {Array(4)
                .fill(0)
                .map((_, index) => (
                    <UserWrapper key={index}>
                        <Avatar image="https://picsum.photos/200" size={70} />
                        <Nickname>Zoey</Nickname>
                    </UserWrapper>
                ))}
        </LobbyUsersWrapper>
    );
};
