import { FilterQuery, QueryOptions } from 'mongoose'

export interface Read<T, V> {
    find(filter: FilterQuery<T>, projection?: never | null, options?: QueryOptions): Promise<V | Array<V>>;
}