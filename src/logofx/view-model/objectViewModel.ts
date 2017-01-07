import { IModel } from './../model';

export class ObjectViewModel<T extends IModel<any>> {
    
    private _model: T;
    private _isSelected: boolean = false;
    private _isEnabled: boolean = true;

    constructor(model: T) {
        this._model = model;
    }

    public get model(): T {
        return this._model;
    }

    public get isSelected(): boolean {
        return this._isSelected;
    }

    public set isSelected(value: boolean) {
        if (this._isSelected === value)
            return;
        
        this._isSelected = value;
    }

    public get isEnabled(): boolean {
        return this._isEnabled;
    }

    public set isEnabled(value: boolean) {
        if (this._isEnabled === value) {
            return;
        }
        this._isEnabled = value;        
    }

} 