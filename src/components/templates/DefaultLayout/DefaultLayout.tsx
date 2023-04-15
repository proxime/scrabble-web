import { ReactNode } from 'react';

import { Navbar } from '@components/organisms/Navbar/Navbar';

import {
    ContentInnerWrapper,
    ContentWrapper,
    DefaultLayoutWrapper,
} from './DefaultLayout.styled';

export interface DefaultLayoutProps {
    children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <DefaultLayoutWrapper>
            <Navbar />
            <ContentWrapper>
                <ContentInnerWrapper>{children}</ContentInnerWrapper>
            </ContentWrapper>
            <div>footer</div>
        </DefaultLayoutWrapper>
    );
};
