import { rootApi } from './root';

import {
    AuthResult,
    LoginInput,
    RegisterInput,
    UserResult,
} from '@@types/auth';

import { transformResponse } from '@utils/transformResponse';

const authApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<UserResult, null>({
            query: () => `auth`,
            providesTags: (result) => [{ type: 'User', id: result?._id }],
            transformResponse,
        }),
        register: builder.mutation<AuthResult, RegisterInput>({
            query: (body) => ({
                url: `auth/register`,
                method: 'POST',
                body,
            }),
            transformResponse,
        }),
        login: builder.mutation<AuthResult, LoginInput>({
            query: (body) => ({
                url: `auth/login`,
                method: 'POST',
                body,
            }),
            transformResponse,
        }),
    }),
    overrideExisting: false,
});

export const {
    useRegisterMutation,
    useLoginMutation,
    useGetUserQuery,
    useLazyGetUserQuery,
    endpoints: authEndpoints,
} = authApi;
