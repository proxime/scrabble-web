import { useEffect } from 'react';

import { Button } from '@components/molecules/Button/Button';
import { LobbyUsers } from '@components/organisms/Lobby/LobbyUsers/LobbyUsers';
import { DefaultLayout } from '@components/templates/DefaultLayout/DefaultLayout';

import { useCreateGameMutation } from '@store/api/game';

import { ButtonsWrapper, LobbyMainContent, Panel } from './LobbyPage.styled';

export interface LobbyPageProps {}

export const LobbyPage = ({}: LobbyPageProps) => {
    useEffect(() => {
        console.log('request');
        // createGame({});

        return () => {
            console.log('return');
        };
    }, []);

    return (
        <DefaultLayout>
            <LobbyMainContent>
                <Panel>
                    <LobbyUsers />
                    <ButtonsWrapper>
                        <Button variant="secondary">Rozpocznij grę</Button>
                        <Button>Wyjdź</Button>
                    </ButtonsWrapper>
                </Panel>
            </LobbyMainContent>
        </DefaultLayout>
    );
};
