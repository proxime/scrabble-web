import React, { useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useEventListener } from '@utils/hooks/useEventListener';
import { useOnClickOutside } from '@utils/hooks/useOnClickOutside';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    CloseButtonWrapper,
    Content,
    InnerWrapper,
    ModalWrapper,
} from './Modal.styled';

export interface ModalProps {
    children: React.ReactNode;
    className?: string;
    closeButton?: boolean;
    onClose: () => void;
    open?: boolean;
    preventCloseEsc?: boolean;
    preventCloseOutside?: boolean;
    width?: number;
}

export const ModalComponent = ({
    children,
    className,
    closeButton = false,
    open,
    preventCloseEsc,
    preventCloseOutside,
    width = 984,
    onClose,
}: ModalProps) => {
    const contentRef = useRef(null);
    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            !preventCloseEsc && event.key === 'Escape' && onClose();
        },
        [onClose],
    );

    useEventListener('keydown', handleKeyDown);

    useOnClickOutside(contentRef, () => !preventCloseOutside && onClose());

    if (!open) return null;

    return createPortal(
        <ModalWrapper className={className}>
            <InnerWrapper width={width}>
                <Content ref={contentRef}>
                    {closeButton && (
                        <CloseButtonWrapper>
                            <FontAwesomeIcon
                                icon={faXmark}
                                fontSize="24px"
                                onClick={onClose}
                            />
                        </CloseButtonWrapper>
                    )}
                    {children}
                </Content>
            </InnerWrapper>
        </ModalWrapper>,
        document.getElementById('modals')!,
    );
};
