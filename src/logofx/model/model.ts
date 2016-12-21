export interface IModel<T> {
    id: T;
}

export class Model<T> implements IModel<T> {
    id: T;
}

