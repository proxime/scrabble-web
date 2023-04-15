import { Response } from '@@types/auth';

export const transformResponse = <T>(response: Response<T>) => response.data;
