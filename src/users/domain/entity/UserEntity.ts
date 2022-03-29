import { Name, UserRut, UserLastNames, UserName, UserEmail } from '../value-objects';
import CityEntity from '../../../cities/domain/entity/CityEntity';
import { ICityProps } from '../../../cities/domain/entity/CityEntity';

export interface IUserProps {
    user_rut?: UserRut | string,
    names?: Name | string,
    last_names?: UserLastNames | string,
    user_name?: UserName | string,
    email?: UserEmail | string,
    city?: CityEntity | ICityProps
}

export default class UserEntity {
    constructor(
        private props: IUserProps
    ) {
    }

    get value() {
        return this.props;
    }
}