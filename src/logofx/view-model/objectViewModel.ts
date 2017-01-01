import { IModel } from './../model';

export class ObjectViewModel<T extends IModel<any>> {
    
    private _model: T;
    private _isSelected: boolean = false;
    private _isEnabled: boolean = true;

    constructor(model: T) {
        this._model = model;
    }

    get model(): T {
        return this._model;
    }

    get isSelected(): boolean {
        return this._isSelected;
    }

    set isSelected(value: boolean) {
        if (this._isSelected === value)
            return;
        
        this._isSelected = value;
    }

    get isEnabled(): boolean {
        return this._isEnabled;
    }

    set isEnabled(value: boolean) {
        if (this._isEnabled === value) {
            return;
        }
        this._isEnabled = value;        
    }

} 