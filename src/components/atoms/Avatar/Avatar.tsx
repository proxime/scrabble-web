import { AvatarImage, AvatarWrapper } from './Avatar.styled';

export interface AvatartProps {
    size?: number;
    image: string;
}

export const Avatar = ({ image, size = 50 }: AvatartProps) => {
    return (
        <AvatarWrapper size={size}>
            <AvatarImage src={image} alt="avatar" />
        </AvatarWrapper>
    );
};
