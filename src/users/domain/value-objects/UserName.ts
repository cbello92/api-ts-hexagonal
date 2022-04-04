import { GlobalValidator } from '../../../shared/domain/entity/GlobalValidator';

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
        if(GlobalValidator.isEmpty(this.user_name)) {
            throw new Error('user_name is required');
        }

        return this.user_name;
    }
}