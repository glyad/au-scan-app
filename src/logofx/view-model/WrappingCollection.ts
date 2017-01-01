import { autoinject, BindingEngine, Container, transient, inject } from "aurelia-framework";
import { IModel } from './../model';
import { ObjectViewModel } from './objectViewModel';
import * as Core from '../Core';
import {ObserverLocator, Callable} from 'aurelia-binding';

@autoinject()
@transient()
export class WrappingCollection extends Array {

    // @inject(ObserverLocator)
    // get observerLocator(): ObserverLocator { return [ObserverLocator]; };

    public factoryMethod: (item: IModel<any> | any) => ObjectViewModel<IModel<any>> | any | null | undefined;

    private _bindingEngine: BindingEngine;
    private _source: Array<any> | null | undefined = null;
    private _internalList: Array<any>;

    

    constructor ( factoryMethod?: (item: IModel<any>) => ObjectViewModel<IModel<any>>
                , source?: Array<any> ) {
        super();

        this._bindingEngine = Core.getDefaultBindingEngine();

        if (factoryMethod === null || factoryMethod === undefined)
            factoryMethod = (item) => <any>item;
        
        this.factoryMethod = factoryMethod;

        if (source === null || source === undefined)
            this._source = new Array<any>();
        else 
            this._source = source;

        
        Core.getDefaultObserverLocator()
            .getArrayObserver(this._source)
            .subscribe('clbk', (changes: Object) => {
                if ((<Array<any>>changes).length == 0)
                    return;

                let innerChanges = changes[0];

                if (innerChanges.addedCount > 0) {
                    console.log('Added:' + innerChanges.addedCount.toString());
                }
                else if (innerChanges.removed.length > 0)
                {
                    innerChanges.removed.forEach((removed) => {
                        let model: IModel<any> = removed;

                        console.log('Removed ' + 'Id: ' + model.id + '  name: ' + removed.name + '  toString():  ' + removed.toString());
                        
                    });
                }
                
            });

            this._source.forEach((item) => {
                this.push(WrappingCollection.createWrapper(item, this.factoryMethod));
            });

            console.log('this.length: ' + this.length);
            //this.forEach((item: ObjectViewModel<IModel<any>>) => console.log('Model.Id: ' + item.model.id.toString()));

        
    }

    clbk( changes: any){
        
        console.log('CHANGES 2:  ' + typeof changes);
    }

    
    private static createWrapper(item: any, factoryMethod): ObjectViewModel<IModel<any>> | any
    {
        return factoryMethod(item);
    }
    
}

