import { AuthResult, Response } from '@@types/auth';

import { logout } from '@utils/logout';

import {
    BaseQueryFn,
    createApi,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders: (headers, { endpoint }) => {
        const token = localStorage.getItem('token');

        if (token && endpoint !== 'refresh') {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    const refreshToken = localStorage.getItem('refreshToken');

    if (result.error && result.error.status === 401) {
        if (!refreshToken) {
            logout();
            return result;
        }

        const refreshResult = await baseQuery(
            {
                url: '/auth/refresh',
                headers: {
                    'Refresh-Token': refreshToken,
                },
            },
            api,
            extraOptions,
        );
        const data = (refreshResult.data as Response<AuthResult>)?.data;

        if (data) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('refreshToken', data.refreshToken);

            result = await baseQuery(args, api, extraOptions);
        } else logout();
    }
    return result;
};

export const rootApi = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
    tagTypes: ['User'],
});
