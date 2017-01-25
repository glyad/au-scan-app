import { bindable, bindingMode } from 'aurelia-framework';
import { ValidationRules } from 'aurelia-validation';
import { IDocument } from './../contracts';
import { IModel } from './../../logofx/model/model';
import { Model } from './../../logofx/model/model';

export class Document extends Model<number> implements IDocument
{
    public name: string = '';
    public description: string = '';
    public caseId: string = '';

    constructor () {
        super();

        this.rules = ValidationRules
            .ensure((p: Document) => p.name).displayName('Name').required().withMessage('The value is mandatory')
            .ensure((p: Document) => p.name).displayName('Name').minLength(5)
            .ensure((p: Document) => p.caseId).maxLength(5).withMessage('Wrong input.')
            .rules;
    }
    
}
