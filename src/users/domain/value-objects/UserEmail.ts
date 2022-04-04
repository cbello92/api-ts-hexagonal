import { GlobalValidator } from '../../../shared/domain/entity/GlobalValidator';

export class UserEmail {
    private user_email: string;
    constructor(user_email: string) {
        this.user_email = user_email;
        this.create();
    }

    get value(): string {
        return this.user_email;
    }

    create(): string | never {
        if (GlobalValidator.isEmpty(this.user_email)) {
            throw new Error('user_email is required');
        }

        if(!GlobalValidator.isValidEmail(this.user_email)) {
            throw new Error('user_email is incorrect');
        }

        return this.user_email;
    }
}