

export class CityName {
    private city_name: string;
    constructor(city_name: string) {
        this.city_name = city_name;
        this.create();
    }

    get value() {
        return this.city_name;
    }

    create(): string | never {
        if(this.city_name === '' || this.city_name === null || this.city_name === undefined) {
            throw new Error('city_name is required');
        } else {
            return this.city_name;
        }
    }
}