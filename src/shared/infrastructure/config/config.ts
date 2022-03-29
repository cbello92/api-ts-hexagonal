import { config } from "dotenv"

config();

type Environment = {
    MONGODB_URL: string
};

export const getEnvironments = (): Environment => ({
    MONGODB_URL: process.env.MONGODB_URL || ''
})