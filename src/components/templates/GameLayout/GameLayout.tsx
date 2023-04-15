import { ReactNode } from 'react';

import { GameLayoutWrapper } from './GameLayout.styled';

export interface GameLayoutProps {
    children: ReactNode;
}

export const GameLayout = ({ children }: GameLayoutProps) => {
    return <GameLayoutWrapper>{children}</GameLayoutWrapper>;
};
