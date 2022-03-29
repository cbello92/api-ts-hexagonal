export class UserLastNames {
    private userLastNames: string;
    constructor(userLastNames: string) {
        this.userLastNames = userLastNames;
        this.create();
    }

    get value() {
        return this.userLastNames;
    }

    create(): string | never {
        if(this.userLastNames === '' || this.userLastNames === null || this.userLastNames === undefined) {
            throw new Error('lastnames is required');
        } else {
            return this.userLastNames;
        }
    }
}