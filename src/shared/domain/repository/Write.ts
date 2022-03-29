import { FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';

export interface Write<T, V> {
    create(body: Record<string, unknown>): Promise<V>;
    createMany(body: Array<T>): Promise<V>;
    update(query: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions): Promise<V>;
}