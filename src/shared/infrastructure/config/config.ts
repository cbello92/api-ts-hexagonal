import { config } from "dotenv"

config();

type Environment = {
    MONGODB_URL: string,
    PORT: number
};

export const getEnvironments = (): Environment => ({
    MONGODB_URL: process.env.MONGODB_URL || '',
    PORT: Number(process.env.PORT || '5000')
})