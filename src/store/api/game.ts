import { rootApi } from './root';

import {
    AuthResult,
    LoginInput,
    RegisterInput,
    UserResult,
} from '@@types/auth';
import { GameResult } from '@@types/game';

import { transformResponse } from '@utils/transformResponse';

const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        // getUser: builder.query<UserResult, null>({
        //     query: () => `auth`,
        //     providesTags: (result) => [{ type: 'User', id: result?._id }],
        //     transformResponse,
        // }),
        createGame: builder.mutation<GameResult, object>({
            query: () => ({
                url: `game/create`,
                method: 'POST',
            }),
            transformResponse,
        }),
    }),
    overrideExisting: false,
});

export const { useCreateGameMutation, endpoints: authEndpoints } = authApi;
