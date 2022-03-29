import { Request } from "express";
import { Response } from "express-serve-static-core";
import { BaseController } from "shared/domain/repository/BaseController";
import { UseCaseBase } from '../../domain/repository/UseCaseBase';
import { HttpRequestData } from '../../domain/entity/HttpRequestData';
import { SuccessHandler } from '../../domain/service/SuccessHandler';
import { ErrorHandler } from "../../../shared/domain/service/ErrorHandler";

export class ControllerBaseRepository<T> implements BaseController {
    private useCase: UseCaseBase<T>;

    constructor(useCase: UseCaseBase<T>) {
        this.useCase = useCase;
    }

    run = async (req: Request, res: Response): Promise<void> => {
        const { body, headers, params, query } = req;
        const httpRequestData: HttpRequestData<unknown> = {
            body,
            params,
            query,
            headers
        };

        try {
            const useCaseResponse = await this.useCase.execute(httpRequestData);
            const { type, message } = useCaseResponse;
            SuccessHandler.catch(type, message, res);
        } catch (error) {
            ErrorHandler.catch(error as Record<string, unknown>, res);
        }
    }
}