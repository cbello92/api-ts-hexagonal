import { GlobalValidator } from '../../../shared/domain/entity/GlobalValidator';
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
        if(GlobalValidator.isEmpty(this.names)) {
            throw new Error('names is required');
        } 
    
        if(!GlobalValidator.ensureMaxLength(this.names, 30)) {
            throw new Error('names, can contain up to 30 characters');
        }

        return this.names;
    }
}