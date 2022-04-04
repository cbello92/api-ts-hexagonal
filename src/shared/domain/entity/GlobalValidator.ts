import { REGEXP } from '../constant/RegularExpressions';

export class GlobalValidator {
    static isEmpty(value: string): boolean {
        if (value === '' || value === null || value === undefined) {
            return true;
        } else {
            return false;
        }
    }

    static ensureMaxLength(value: string, length: number): boolean {
        console.log(value, value.length, length)
        return value.length < length;
    }

    static isValidRut(rutParam: string): boolean {
        rutParam = rutParam.toString();
        if (!rutParam.includes('-')) {
            let endChar = rutParam[rutParam.length - 1];
            rutParam = `${rutParam.substring(0, rutParam.length - 1)}-${endChar}`;
        }

        let rut = rutParam.replace(/\./g, '');
        let rutSplit = rut.split("-");

        let arrayRut = rutSplit[0].split("");

        let rutLength = arrayRut.length - 1;
        let indexUp = 2;
        let sumValues = 0;

        arrayRut.forEach((el, index) => {
            if (indexUp > 7) {
                indexUp = 2;
            }

            sumValues += Number(arrayRut[rutLength]) * indexUp;
            indexUp++;

            if (rutLength >= 0) {
                rutLength--;
            }
        });

        let rest = Math.ceil(sumValues % 11);

        let dv = null;

        if ((11 - rest) === 10) {
            dv = 'K';
        } else if ((11 - rest) >= 1 && (11 - rest) <= 9) {
            dv = (11 - rest).toString();
        } else if ((11 - rest) === 11) {
            dv = '0';
        } else {
            dv = '';
        }

        return dv === '' || dv !== rutSplit[1].toUpperCase() ? false : true;
    }

    static isValidEmail(value: string): boolean {
        return REGEXP.email.test(value);
    }
}