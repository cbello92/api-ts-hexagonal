

export class CommuneName {
    private commune_name: string;
    constructor(commune_name: string) {
        this.commune_name = commune_name;
        this.create();
    }

    get value() {
        return this.commune_name;
    }

    create(): string | never {
        if(this.commune_name === '' || this.commune_name === null || this.commune_name === undefined) {
            throw new Error('commune_name is required');
        } else {
            return this.commune_name;
        }
    }
}