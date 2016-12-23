import { IDocument } from './../contracts';
import { IModel } from './../../logofx/model/model';
import { Model } from './../../logofx/model/model';

export class Document extends Model<number> implements IDocument
{

    name: string;
    description: string;
    caseId: string;
    
}
