export class UserName {
    private user_name: string;
    constructor(user_name: string) {
        this.user_name = user_name;
        this.create();
    }

    get value() {
        return this.user_name;
    }

    create(): string | never {
        if(this.user_name === '' || this.user_name === null || this.user_name === undefined) {
            throw new Error('user_name is required');
        } else {
            return this.user_name;
        }
    }
}