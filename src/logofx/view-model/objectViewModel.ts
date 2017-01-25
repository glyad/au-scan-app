import { Container } from 'aurelia-framework';
import { ValidationController, ValidationControllerFactory } from 'aurelia-validation';
import { IModel } from './../model';

export interface IObjectWrapper<T extends IModel<any>> {

    model: T;
}

export abstract class ObjectViewModel<T extends IModel<any>> implements IObjectWrapper<T> {
    
    private _model: T;
    private _isSelected: boolean = false;
    private _isEnabled: boolean = true;
    public controller: ValidationController;


    constructor(model: T) {
        this._model = model;

        let controllerFactory: ValidationControllerFactory = Container.instance.get(ValidationControllerFactory);
        this.controller = controllerFactory.createForCurrentScope();
        
    }

    public get model(): T {
        return this._model;
    }

    public set model(value: T) {
         this._model = value;
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