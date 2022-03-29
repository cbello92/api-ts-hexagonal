import mongoose from "mongoose";
import { getEnvironments } from '../config';

export class MongooseConfig {
    private database: string;

    constructor() {
        const { MONGODB_URL } = getEnvironments();
        this.database = MONGODB_URL;
    }

    connection = (): void => {
        console.log(this.database)
        mongoose
            .connect(this.database, {
                autoIndex: true,
                maxPoolSize: 10,
            })
            .then(() => console.info(`Successfully connected to ${this.database}`))
            .catch(err => console.error('Error connecting to database', err));
    }
}