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
        getUser: builder.query<UserResult, void>({
            query: () => `auth`,
            providesTags: ['User'],
            transformResponse,
        }),
        register: builder.mutation<AuthResult, RegisterInput>({
            query: (body) => ({
                url: `auth/register`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
            transformResponse,
        }),
        login: builder.mutation<AuthResult, LoginInput>({
            query: (body) => ({
                url: `auth/login`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['User'],
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
