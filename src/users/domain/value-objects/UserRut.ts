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
        if(this.user_rut === '' || this.user_rut === null || this.user_rut === undefined) {
            throw new Error('El user_rut es requerido');
        } else {
            return this.user_rut;
        }
    }
}