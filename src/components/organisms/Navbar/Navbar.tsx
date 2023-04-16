import { Avatar } from '@components/atoms/Avatar/Avatar';
import { Button } from '@components/molecules/Button/Button';

import { PUBLIC_URL } from '@shared/contants';
import { useGetUserQuery } from '@store/api/auth';
import { openModal } from '@store/modalsSlice';
import { useAppDispatch } from '@store/store';

import {
    AuthActions,
    NavbarInnerWrapper,
    NavbarWrapper,
    PuzzleLogoWrapper,
    UserInfoWrapper,
    UserName,
} from './Navbar.styled';

export const Navbar = () => {
    const dispatch = useAppDispatch();

    const { data, isLoading } = useGetUserQuery(undefined, {
        skip: !localStorage.getItem('token'),
    });

    return (
        <NavbarWrapper>
            <NavbarInnerWrapper>
                <PuzzleLogoWrapper>
                    <img src={`${PUBLIC_URL}/images/logo.png`} />
                </PuzzleLogoWrapper>
                {!isLoading &&
                    (data ? (
                        <UserInfoWrapper>
                            <UserName>{data.nick}</UserName>
                            <Avatar image="https://picsum.photos/200" />
                        </UserInfoWrapper>
                    ) : (
                        <AuthActions>
                            <Button
                                size="small"
                                variant="secondary"
                                onClick={() => dispatch(openModal('login'))}
                            >
                                Zaloguj się
                            </Button>
                            <Button
                                onClick={() => dispatch(openModal('register'))}
                                size="small"
                            >
                                Rejestracja
                            </Button>
                        </AuthActions>
                    ))}
            </NavbarInnerWrapper>
        </NavbarWrapper>
    );
};
