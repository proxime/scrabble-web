import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppModals } from './AppModals';

import { theme } from '@utils/theme';

import { router } from '@services/RouteService/router';

import { useAppSelector } from '@store/store';

import { GlobalDynamicStyled, GlobalStaticStyled } from './global.styled';

export const App = () => {
    const { blockScroll } = useAppSelector((state) => state.modals);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStaticStyled />
            <GlobalDynamicStyled blockScroll={blockScroll} />
            <RouterProvider router={router} />
            <AppModals />
        </ThemeProvider>
    );
};
