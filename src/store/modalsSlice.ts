import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DefaultModalsKeys {
    register: string;
    login: string;
}

export interface ModalsState {
    active: (keyof DefaultModalsKeys)[];
    blockScroll: boolean;
}

const initialState: ModalsState = {
    active: [],
    blockScroll: false,
};

export const modalsSlice = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<keyof DefaultModalsKeys>) => {
            state.active = [action.payload, ...state.active];
            state.blockScroll = !!state.active.length;
        },
        closeModal: (state, action: PayloadAction<keyof DefaultModalsKeys>) => {
            state.active = state.active.filter(
                (modal) => modal !== action.payload,
            );
            state.blockScroll = !!state.active.length;
        },
        clearModals: (state) => {
            state.active = [];
            state.blockScroll = false;
        },
    },
});

export const { openModal, closeModal, clearModals } = modalsSlice.actions;

export default modalsSlice.reducer;
