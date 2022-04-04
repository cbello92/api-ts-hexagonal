import express from 'express';
import { Application } from "express";
import { Routes } from './routes/index';
import { MongooseConfig } from '../mongoose/MongooseConfig';

class App {

    public server: Application;
    public appRouter: Routes = new Routes();
    public database: MongooseConfig = new MongooseConfig();

    constructor() {
        this.server = express();
        this.config();
    }

    private config(): void {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));

        this.server.use("/api/v1", this.appRouter.buildRoutes());
        this.database.connection();
    }
}

export default new App().server.listen(5000, () => {
    console.info('Server listening!!!');
});