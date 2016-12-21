import { IDocument } from './../contracts/IDocument';
import { IModel } from './../../logofx/model/model';
import { Model } from './../../logofx/model/model';

export class Document extends Model<number> implements IDocument
{
    
    // constructor(
        name: string;
        description: string;
        caseId: string;//){
    //     super();
    // }

    
    // get description(): string {
    //     return this._description;
    // }

    // set description(value: string) {
    //     this._description = value;
    // }

    // get caseId(): string {
    //     return this._caseId;
    // }

    // set caseId(value: string) {
    //     this._caseId = value;
    // }

    // get name(): string {
    //     return this._name;
    // }

    // set name(value: string) {
    //     this._name = value;
    // }    
}
