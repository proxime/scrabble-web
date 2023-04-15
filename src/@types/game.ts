export type Response<T> = {
    data: T;
};

export type GameStatusType = 'lobby' | 'running' | 'finished';

export type GameResult = {
    _id: string;
    players: any[];
    status: GameStatusType;
};
