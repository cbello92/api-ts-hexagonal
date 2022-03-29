import { CityName, CommuneName } from "../value-objects";

export interface ICityProps {
    city_name?: CityName | string,
    commune_name?: CommuneName | string
}

export default class CityEntity {
    constructor(
        private props: ICityProps
    ) {
    }

    get value() {
        return this.props;
    }

    create(): unknown | never {
        if(Object.keys(this.props).length === 0) {
            throw new Error('city_name is required');
        } else {
            return this.props;
        }
    }
}