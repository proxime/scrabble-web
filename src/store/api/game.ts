import { authEndpoints } from './auth';
import { rootApi } from './root';

import { GameResult } from '@@types/game';

import { transformResponse } from '@utils/transformResponse';

import { createGame } from '@store/gameSlice';

const gameApi = rootApi.injectEndpoints({
    endpoints: (builder) => ({
        createGame: builder.mutation<GameResult, void>({
            query: () => ({
                url: `game/create`,
                method: 'POST',
            }),
            transformResponse,
            async onCacheEntryAdded(
                _,
                { dispatch, cacheDataLoaded, getState },
            ) {
                const {
                    data: { _id, players, status, creatorId },
                } = await cacheDataLoaded;

                const userId = authEndpoints.getUser.select()(getState()).data
                    ?._id;

                dispatch(
                    createGame({
                        id: _id,
                        players,
                        status,
                        isCreator: userId === creatorId,
                    }),
                );
            },
        }),
    }),
    overrideExisting: false,
});

export const { useCreateGameMutation, endpoints: gameEndpoints } = gameApi;
