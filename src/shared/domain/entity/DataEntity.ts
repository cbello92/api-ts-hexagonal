export class DataEntity {

    static mapValues<T>(entity: Record<string, unknown>): T {
        let obj: Record<string, unknown> = {};
        Object.keys(entity).forEach(e => {
            obj[e] = (entity[e] as Record<string, unknown>).value
        })

        return obj as T;
    }

    static mapErrors(entity: Record<string, unknown>) {
        let obj: Record<string, unknown> = {};
        Object.keys(entity).forEach(e => {
            obj[e] = (entity[e] as Record<string, unknown>).errorsFound || []
        })

        return obj;
    }
}