export type Response<T> = {
    data: T;
};

export type UserResult = {
    _id: string;
    email: string;
    nick: string;
    avatar?: string;
};

export type AuthResult = {
    token: string;
    refreshToken: string;
};

export type LoginInput = {
    email: string;
    password: string;
};

export type RegisterInput = {
    email: string;
    password: string;
    nick: string;
};
