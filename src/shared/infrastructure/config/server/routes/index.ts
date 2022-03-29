import { Request, Response, Router } from "express";
import { UserRepository } from '../../../../../users/infrastructure/persistence/UserRepository';
import { GetUsersUseCase } from '../../../../../users/application/use-case/GetUsersUseCase';
import { ControllerBaseRepository } from '../../../controllers/IBaseController';
import { CreateUserUseCase } from '../../../../../users/application/use-case/CreateUserUseCase';

export class Routes {

    public router: Router;

    // Instance repositories
    private userRepository = new UserRepository<never, never>();

    // Instance useCases
    private userUseCase = new GetUsersUseCase(this.userRepository);
    private createUserUseCase = new CreateUserUseCase(this.userRepository);

    // Create controllers
    private getUsersController: ControllerBaseRepository<GetUsersUseCase>;
    private createUserController: ControllerBaseRepository<CreateUserUseCase>;

    constructor() {
        this.router = Router();
        this.getUsersController = new ControllerBaseRepository(this.userUseCase);
        this.createUserController = new ControllerBaseRepository(this.createUserUseCase);
    }

    public buildRoutes(): Router {

        this.router.get("/version", (req: Request, res: Response) => {
            res.send({
                ok: true,
                message: `first version Rest API using hexagonal architecture`
            });
        });

        // users routes
        this.router.get('/users', this.getUsersController.run)
        this.router.post('/users', this.createUserController.run);

        return this.router;
    }

}