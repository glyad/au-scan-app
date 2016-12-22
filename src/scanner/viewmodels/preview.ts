import { IDataService } from './../../model/contracts/IDataService';
import { DataService } from './../../model/implementation/DataService';
import { get } from '@easy-webpack/core';
import { autoinject, inject, bindable, transient } from 'aurelia-framework';

//@inject([DataService])
@autoinject()
export class Preview {

    constructor (private _dataService: DataService) { 
        //console.log("Injectted: " + this._dataService.imagePath);
    }

	
    get imagePath(): string {
        //console.log('image - ' + this._dataService.imagePath);
        return this._dataService.imagePath;
    }
}