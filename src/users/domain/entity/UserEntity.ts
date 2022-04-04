import { Name, UserRut, UserLastNames, UserName, UserEmail } from '../value-objects';
import CityEntity from '../../../cities/domain/entity/CityEntity';
import { DataEntity } from '../../../shared/domain/entity/DataEntity';

export interface IUserProps {
    user_rut?: UserRut,
    names?: Name,
    last_names?: UserLastNames,
    user_name?: UserName,
    email?: UserEmail,
    city?: CityEntity
}

export default class UserEntity {
    constructor(
        private props: IUserProps
    ) {
        this.runValidate()
    }

    get value() {
        return DataEntity.mapValues<IUserProps>(this.props as Record<string, unknown>);
    }

    runValidate() {
        const mapErr = DataEntity.mapErrors(this.props as Record<string, unknown>);
        
        console.log(Object.values(mapErr).some(x => (x as string[]).length > 0))

        if(Object.values(mapErr).some(x => (x as string[]).length > 0)) {
            throw { error: mapErr }
        }
    }

}