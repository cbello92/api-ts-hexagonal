export class Name {
    private names: string;
    constructor(names: string) {
        this.names = names;
        this.create();
    }

    get value() {
        return this.names;
    }

    create(): string | never {
        if(this.names === '' || this.names === null || this.names === undefined) {
            throw new Error('names is required');
        } else {
            return this.names;
        }
    }
}