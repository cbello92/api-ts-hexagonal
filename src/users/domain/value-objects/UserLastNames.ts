import { GlobalValidator } from '../../../shared/domain/entity/GlobalValidator';

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
        if(GlobalValidator.isEmpty(this.userLastNames)) {
            throw new Error('lastnames is required');
        } 

        if(!GlobalValidator.ensureMaxLength(this.userLastNames, 30)) {
            throw new Error('lastnames, can contain up to 30 characters');
        }

        return this.userLastNames;
    }
}