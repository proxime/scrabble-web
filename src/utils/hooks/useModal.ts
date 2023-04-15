import { useState } from 'react';

export interface UseModal {
    open?: boolean;
    setOpen: (value: boolean) => void;
}

export const useModal = (defaultOpen?: boolean): UseModal => {
    const [open, setOpen] = useState(!!defaultOpen);

    return { open, setOpen };
};
