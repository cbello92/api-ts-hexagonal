import { ObjectId } from 'mongoose';
import { UseCaseBase } from '../../../shared/domain/repository/UseCaseBase';
import { UserRepository } from '../../infrastructure/persistence/UserRepository';
import { UserResponse } from '../../domain/entity/UserResponse';
import { HttpRequestData } from 'shared/domain/entity/HttpRequestData';
import { UseCaseBaseResponse } from 'shared/domain/repository/UseCaseBaseResponse';
import { GET } from 'typescript-rest';
import { HTTP_TYPE_METHOD } from '../../../shared/domain/constant/HttpTypeMethod';


export class GetUsersUseCase implements UseCaseBase<unknown> {
    private _repository: UserRepository<unknown, UserResponse>;

    constructor(repository: UserRepository<unknown, UserResponse>) {
        this._repository = repository;
    }

    async execute({ query }: HttpRequestData<unknown>): Promise<UseCaseBaseResponse<Array<UserResponse>>> {
        try {
            const response = await this.findUsers(query);
            return {
                type: HTTP_TYPE_METHOD.GET,
                message: response
            }
        } catch (error) {
            console.log(error)
            throw error;
        }
    }


    @GET
    //@Tags('Label')
    //@Response<Array<BlockOrderResponse>>(200, 'OK')
    //@Response<{ error: string }>(503, 'SERVICE UNAVAILABLE')
    protected async findUsers(
        query: Record<string, unknown>
        //@QueryParam('orderId') orderId?: string,
    ): Promise<UserResponse | Array<UserResponse>> {
        //log.info('INPUT:::', orderId);
        const filter: Record<string, unknown> = {};
        const { limit, page } = query;

        if(query._id) {
            filter['_id'] = query._id;
        }

        console.log(filter)

        const options: Record<string, unknown> = {};

        if(limit) {
            options.limit = limit ? Number(limit) : 50;
        }

        //options.skip = 
        // filter['order_data.order_id'] = orderId;
        // filter.active = true;
        // options.sort = { _id: -1 };
        return this._repository.find(filter, {}, options);
    }
}