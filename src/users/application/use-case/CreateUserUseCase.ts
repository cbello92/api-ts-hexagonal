import { UseCaseBase } from '../../../shared/domain/repository/UseCaseBase';
import { UserRepository } from '../../infrastructure/persistence/UserRepository';
import { UserResponse } from '../../domain/entity/UserResponse';
import { HttpRequestData } from 'shared/domain/entity/HttpRequestData';
import { UseCaseBaseResponse } from 'shared/domain/repository/UseCaseBaseResponse';
import { HTTP_TYPE_METHOD } from '../../../shared/domain/constant/HttpTypeMethod';
import { BusinessErrorHandler } from '../../../shared/domain/service/BusinessErrorHandler';
import UserEntity, { IUserProps } from '../../domain/entity/UserEntity';
import { UserEmail, UserLastNames, UserName, Name, UserRut } from '../../domain/value-objects';
import CityEntity, { ICityProps } from '../../../cities/domain/entity/CityEntity';
import { CityName, CommuneName } from '../../../cities/domain/value-objects';


export class CreateUserUseCase implements UseCaseBase<unknown> {
    private _repository: UserRepository<unknown, UserResponse>;

    constructor(repository: UserRepository<unknown, UserResponse>) {
        this._repository = repository;
    }

    async execute({ body }: HttpRequestData<unknown>): Promise<UseCaseBaseResponse<unknown>> {
        const bodyParse = body as Record<string, unknown>;
        try {
            
            const bodyCity = bodyParse?.city as Record<string, unknown>;
            const city: ICityProps = {
                city_name: new CityName(bodyCity?.city_name as string).value,
                commune_name: new CommuneName(bodyCity?.commune_name as string).value
            };

            const bodyForDB: IUserProps = {
                user_rut: new UserRut(bodyParse.user_rut as string).value,
                names: new Name(bodyParse.names as string).value,
                last_names: new UserLastNames(bodyParse.last_names as string).value,
                user_name: new UserName(bodyParse.user_name as string).value,
                email: new UserEmail(bodyParse.email as string).value,
                city: new CityEntity(city).value
            };

            const userInstance = new UserEntity(bodyForDB);
            const response = await this._repository.create(userInstance.value as Record<string, unknown>);

            return {
                type: HTTP_TYPE_METHOD.POST_CREATE,
                message: response
            }
        } catch (error) {
            throw BusinessErrorHandler.createException(error as Error);
        }
    }

}