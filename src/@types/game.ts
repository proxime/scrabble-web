export type Response<T> = {
    data: T;
};

export type GameStatusType = 'lobby' | 'running' | 'finished';

export interface PlayerData {
    id: string;
    avatar?: string;
    nick: string;
}

export type PlayerType = {
    player: PlayerData;
    ready: boolean;
};

export type GameResult = {
    _id: string;
    players: PlayerType[];
    status: GameStatusType;
    creatorId: string;
};
