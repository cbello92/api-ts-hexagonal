import { HttpRequestData } from '../entity/HttpRequestData';
import { UseCaseBaseResponse } from './UseCaseBaseResponse';

export interface UseCaseBase<T> {
    execute(httpRequestData: HttpRequestData<unknown>): Promise<UseCaseBaseResponse<T>>;
}