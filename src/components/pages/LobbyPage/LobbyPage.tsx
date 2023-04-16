import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Button } from '@components/molecules/Button/Button';
import { LobbyUsers } from '@components/organisms/Lobby/LobbyUsers/LobbyUsers';
import { DefaultLayout } from '@components/templates/DefaultLayout/DefaultLayout';

import { closeGame } from '@store/gameSlice';
import { useAppSelector } from '@store/store';

import { ButtonsWrapper, LobbyMainContent, Panel } from './LobbyPage.styled';

export const LobbyPage = () => {
    const currentGame = useAppSelector((state) => state.game.currentGame);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeGame());
    };

    if (!currentGame) return <Navigate replace to="/" />;

    return (
        <DefaultLayout>
            <LobbyMainContent>
                <Panel>
                    <LobbyUsers
                        players={currentGame.players}
                        isCreator={currentGame.isCreator}
                    />
                    <ButtonsWrapper>
                        <Button variant="secondary">Rozpocznij grę</Button>
                        <Button onClick={handleClose}>Wyjdź</Button>
                    </ButtonsWrapper>
                </Panel>
            </LobbyMainContent>
        </DefaultLayout>
    );
};
