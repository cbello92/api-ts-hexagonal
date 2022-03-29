import { BaseRepositoryMongoose } from '../../../shared/infrastructure/persitence/mongoose/BaseRepository';
import UserSchema from './model/UserSchema';

export class UserRepository<T, V> extends BaseRepositoryMongoose<T, V> {
    constructor() {
        super(UserSchema);
    }
}