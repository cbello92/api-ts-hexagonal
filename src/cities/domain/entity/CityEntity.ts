import { CityName, CommuneName } from "../value-objects";
import { DataEntity } from '../../../shared/domain/entity/DataEntity';

export interface ICityProps {
    city_name?: CityName,
    commune_name?: CommuneName
}

export default class CityEntity {
    constructor(
        private props: ICityProps
    ) {
    }

    get value() {
        return DataEntity.mapValues<ICityProps>(this.props as Record<string, unknown>);
    }

    create(): unknown | never {
        if(Object.keys(this.props).length === 0) {
            throw new Error('city_name is required');
        } else {
            return this.props;
        }
    }
}