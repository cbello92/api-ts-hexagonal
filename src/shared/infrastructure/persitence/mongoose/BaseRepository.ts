import { Document, Model, CallbackError, InsertManyResult, FilterQuery, UpdateQuery, QueryOptions } from 'mongoose';
import { Write } from '../../../domain/repository/Write';
import { Read } from '../../../domain/repository/Read';


export class BaseRepositoryMongoose<T, V> implements Write<T, V>, Read<T, V> {
    private _model: Model<Document>;

    constructor(schemaModel: Model<Document>) {
        this._model = schemaModel;
    }

    responseHandler(
        resolve: (value: V | PromiseLike<V>) => void,
        reject: (reason?: unknown) => void,
        err: CallbackError,
        res: Document | Array<Document> | InsertManyResult<T> | number
    ): void {
        if(err) {
            console.error(`Database Error ${err}`);
            reject(err);
        } else {
            console.info(`Database response ${JSON.stringify(res)}`);
            resolve(<V>(<unknown> res));
        }
    }

    create(body: Record<string, unknown>): Promise<V> {
        return new Promise<V>((resolve, reject) => {
          this._model.create(body, (err: CallbackError, res: Document) => {
            this.responseHandler(resolve, reject, err, res);
          });
        });
      }
    
      createMany(body: Array<T>): Promise<V> {
        return new Promise<V>((resolve, reject) => {
          this._model.insertMany(body, {}, (err: CallbackError, res: Array<Document> | InsertManyResult<T>) => {
            this.responseHandler(resolve, reject, err, res);
          });
        });
      }
    
      update(query: FilterQuery<T>, update: UpdateQuery<T>, options?: QueryOptions): Promise<V> {
        return new Promise<V>((resolve, reject) => {
          this._model.updateOne(query as Record<string, unknown>, update, options, (err: CallbackError, res: Document) => {
            this.responseHandler(resolve, reject, err, res);
          });
        });
      }
    
      find(
        filter: FilterQuery<T>,
        projection?: Record<string, number> | null,
        options?: QueryOptions,
      ): Promise<V | Array<V>> {
        return new Promise<V | Array<V>>((resolve, reject) => {
          this._model.find(
            filter as Record<string, unknown>,
            projection,
            options,
            (err: CallbackError, res: Array<Document>) => {
              this.responseHandler(resolve, reject, err, res);
            },
          );
        });
      }
    
      countDocuments(filter: FilterQuery<T>): Promise<V | Array<V>> {
        return new Promise<V | Array<V>>((resolve, reject) => {
          this._model.countDocuments(filter as Record<string, unknown>, (err: CallbackError, res: number) => {
            this.responseHandler(resolve, reject, err, res);
          });
        });
      }
}