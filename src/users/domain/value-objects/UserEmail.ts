export class UserEmail {
    private user_email: string;
    constructor(user_email: string) {
        this.user_email = user_email;
        this.create();
    }

    get value() {
        return this.user_email;
    }

    create(): string | never {
        if(this.user_email === '' || this.user_email === null || this.user_email === undefined) {
            throw new Error('user_email is required');
        } else {
            return this.user_email;
        }
    }
}