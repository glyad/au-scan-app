import { ValidationRules } from 'aurelia-validation';
import { IDocument } from './../contracts';
import { IModel } from './../../logofx/model/model';
import { Model } from './../../logofx/model/model';

export class Document extends Model<number> implements IDocument
{

    name: string;
    description: string;
    caseId: string;

    constructor () {
        super();

        ValidationRules
            .ensure('name').required().minLength(5).maxLength(32).withMessage('Wrong input.')
            .on(this);
    }
    
}
