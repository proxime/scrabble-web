import {
    MouseEvent as MouseReactEvent,
    useContext,
    useEffect,
    useRef,
} from 'react';

import { GameContext } from '@components/pages/GamePage/GamePage';

import {
    Letter,
    LetterLabel,
    LetterValue,
    LetterWrapper,
} from './GameLetter.styled';

export interface GameLetterProps {
    active: boolean;
    className?: string;
    index: string;
    name: string;
    setActive: () => void;
    value: number;
}

export const GameLetter = ({
    active,
    className,
    index,
    name,
    setActive,
    value,
}: GameLetterProps) => {
    const {
        movedIndex,
        offset,
        position,
        setMovedIndex,
        setOffset,
        setPosition,
    } = useContext(GameContext);

    const ref = useRef<HTMLButtonElement>(null);

    const isMoved = movedIndex === index;

    const handleClick = (e: MouseReactEvent<HTMLButtonElement>) => {
        setActive();
        setMovedIndex?.(index);

        const offset = {
            x: e.nativeEvent.offsetX,
            y: e.nativeEvent.offsetY,
        };

        setOffset?.(offset);

        setPosition?.({
            x: e.clientX - offset.x,
            y: e.clientY - offset.y,
        });
    };

    useEffect(() => {
        const handleEscape = () => {
            isMoved && setMovedIndex?.(null);
        };

        const handleMove = (e: MouseEvent) => {
            if (!isMoved) return;

            setPosition?.({
                x: e.x - offset.x,
                y: e.y - offset.y,
            });
        };

        window.addEventListener('mouseup', handleEscape);
        window.addEventListener('mousemove', handleMove);

        return () => {
            window.removeEventListener('mouseup', handleEscape);
            window.removeEventListener('mousemove', handleMove);
        };
    }, [isMoved]);

    return (
        <LetterWrapper className={className}>
            <Letter
                ref={ref}
                active={active}
                onMouseDown={(e) => handleClick(e)}
                isMoved={isMoved}
                style={
                    isMoved
                        ? {
                              top: position.y,
                              left: position.x,
                          }
                        : undefined
                }
            >
                <LetterLabel>{name}</LetterLabel>
                <LetterValue>{value}</LetterValue>
            </Letter>
        </LetterWrapper>
    );
};
