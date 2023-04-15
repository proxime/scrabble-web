import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import { RootRouter } from './RootRouter';

import { DashboardPage } from '@components/pages/DashboardPage/DashboardPage';
import { GamePage } from '@components/pages/GamePage/GamePage';
import { LobbyPage } from '@components/pages/LobbyPage/LobbyPage';
import { LoginPage } from '@components/pages/LoginPage/LoginPage';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <RootRouter />,
        children: [
            {
                path: '/',
                element: <DashboardPage />,
            },
            {
                path: '/lobby',
                element: <LobbyPage />,
            },
            {
                path: '/game',
                element: <GamePage />,
            },
            {
                path: '*',
                element: <Navigate to={'/'} replace />,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
