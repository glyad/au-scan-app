import { ValidationRules, Rule } from 'aurelia-validation';
export interface IModel<T> {
    id: T;

    validationRules: ValidationRules;

    rules: Rule<{}, any>[][];
}

export class Model<T> implements IModel<T> {
    
    id: T;

    private _validationRules: ValidationRules;
    private _rules: Rule<{}, any>[][];

    // public  validationRules: () => ValidationRules = () =>{
    //     return this._validationRules;
    // }

    public get validationRules(): ValidationRules {
        return this._validationRules;
    }

    public set validationRules(value: ValidationRules) {
        if (value === this._validationRules) {
            return;
        }
        
        this._validationRules = value;
    }

    public get rules(): Rule<{}, any>[][] {
        return this._rules;
    }

    public set rules(value: Rule<{}, any>[][]) 
    {
        if (value === this._rules) {
            return;
        }

        this._rules = value;
    }

    toString(): string {
        return makeString(this);
    }
}

/**
 * Checks if the given argument is undefined.
 * @function
 */
export function isUndefined(obj: any): boolean {
    return (typeof obj) === 'undefined';
}

/**
 * Checks if the given argument is a string.
 * @function
 */
export function isString(obj: any): boolean {
    return Object.prototype.toString.call(obj) === '[object String]';
}

const _hasOwnProperty = Object.prototype.hasOwnProperty;
export const has = function(obj: any, prop: any) {
    return _hasOwnProperty.call(obj, prop);
};

export function makeString<T>(item: T, join: string = ','): string {
    if (item === null) {
        return 'COLLECTION_NULL';
    } else if (isUndefined(item)) {
        return 'COLLECTION_UNDEFINED';
    } else if (isString(item)) {
        return item.toString();
    } else {
        let toret = '{';
        let first = true;
        for (const prop in item) {
            if (has(item, prop)) {
                if (first) {
                    first = false;
                } else {
                    toret = toret + join;
                }
                toret = toret + prop + ':' + (<any>item)[prop];
            }
        }
        return toret + '}';
    }
}


