export interface ValueObject<T extends string, U> {
    readonly type: T;
    readonly value: U;
}