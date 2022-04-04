import { GlobalValidator } from '../../../shared/domain/entity/GlobalValidator';

export class UserRut {
    private user_rut: string;

    constructor(user_rut: string) {
        this.user_rut = user_rut;
        this.create();
    }

    get value() {
        return this.user_rut;
    }

    create(): string | never {


        if(GlobalValidator.isEmpty(this.user_rut)) {
            throw new Error('El user_rut es requerido');
        }

        if(!GlobalValidator.isValidRut(this.user_rut)) {
            throw new Error('El user_rut es incorrecto');
        }

        return this.user_rut;
    }
}