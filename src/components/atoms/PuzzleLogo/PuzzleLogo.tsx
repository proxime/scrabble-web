import { GAME_NAME } from '@shared/contants';

import { Letter, PuzzleLogoWrapper } from './PuzzleLogo.styled';

export interface PuzzleLogoProps {
    size?: number;
}

export const PuzzleLogo = ({ size = 54 }: PuzzleLogoProps) => {
    return (
        <PuzzleLogoWrapper>
            {GAME_NAME.split('').map((letter, index) => (
                <Letter key={index} size={size}>
                    {letter}
                </Letter>
            ))}
        </PuzzleLogoWrapper>
    );
};
