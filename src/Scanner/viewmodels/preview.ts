import { get } from '@easy-webpack/core';
import { autoinject } from 'aurelia-framework';
import { DataService } from '../../model/implementation/DataService';

@autoinject
export class Preview {

    constructor (private _dataService: DataService) { }

    get imagePath(): string {
        return this._dataService.imagePath;
    }
}