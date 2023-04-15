import { Outlet, ScrollRestoration } from 'react-router-dom';

export const RootRouter = () => {
    return (
        <>
            <ScrollRestoration />
            <Outlet />
        </>
    );
};
