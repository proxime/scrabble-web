import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PuzzleLogo } from '@components/atoms/PuzzleLogo/PuzzleLogo';
import { DashboardButton } from '@components/molecules/DashboardButton/DashboardButton';
import { DefaultLayout } from '@components/templates/DefaultLayout/DefaultLayout';

import {
    faPuzzlePiece,
    faScaleBalanced,
    faSpellCheck,
} from '@fortawesome/free-solid-svg-icons';
import { useGetUserQuery } from '@store/api/auth';
import { useCreateGameMutation } from '@store/api/game';
import { openModal } from '@store/modalsSlice';

import {
    ButtonsWrapper,
    DashboardOrnament,
    Main,
    MainSection,
    PlayText,
    TitleLetters,
} from './DashboardPage.styled';

export const DashboardPage = () => {
    const [createGame] = useCreateGameMutation();

    const navigate = useNavigate();
    const { data, isLoading } = useGetUserQuery(undefined, {
        skip: !localStorage.getItem('token'),
    });

    const dispatch = useDispatch();

    const handleCreateGame = async () => {
        await createGame();
        navigate('/lobby');
    };

    return (
        <DefaultLayout>
            <MainSection>
                <DashboardOrnament />
                <Main>
                    <PlayText>Zagraj w</PlayText>
                    <TitleLetters>
                        <PuzzleLogo />
                    </TitleLetters>
                    <ButtonsWrapper>
                        <DashboardButton
                            iconProps={{
                                name: faPuzzlePiece,
                                color: 'l3',
                            }}
                            onClick={() =>
                                data
                                    ? handleCreateGame()
                                    : dispatch(openModal('login'))
                            }
                        >
                            Nowa gra
                        </DashboardButton>
                        <DashboardButton
                            iconProps={{
                                name: faScaleBalanced,
                                color: 'w2',
                            }}
                            onClick={() => {}}
                        >
                            Zasady gry
                        </DashboardButton>
                        <DashboardButton
                            iconProps={{
                                name: faSpellCheck,
                                color: 'w3',
                            }}
                            onClick={() => window.open('https://sjp.pl/')}
                        >
                            Słownik
                        </DashboardButton>
                    </ButtonsWrapper>
                </Main>
            </MainSection>
        </DefaultLayout>
    );
};
