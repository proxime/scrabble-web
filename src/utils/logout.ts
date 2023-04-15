import { rootApi } from '@store/api/root';
import { store } from '@store/store';

export const logout = () => {
    store.dispatch(rootApi.util.resetApiState());
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
};
