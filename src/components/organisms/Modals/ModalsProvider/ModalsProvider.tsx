import React from 'react';

import { ModalProps } from '@components/molecules/Modal/Modal';

import { closeModal, DefaultModalsKeys } from '@store/modalsSlice';
import { useAppDispatch, useAppSelector } from '@store/store';

export interface ModalsProviderProps {
    modals: Record<
        keyof DefaultModalsKeys,
        React.FC<Pick<ModalProps, 'onClose' | 'open'>>
    >;
}

export const ModalsProvider = ({ modals }: ModalsProviderProps) => {
    const currentModals = useAppSelector((state) => state.modals.active);
    const dispatch = useAppDispatch();

    return (
        <>
            {currentModals.map((modal) => {
                const Component = modals[modal];

                return (
                    <Component
                        key={modal}
                        onClose={() => dispatch(closeModal(modal))}
                        // open={!!currentModal}
                        open
                    />
                );
            })}
        </>
    );
};
