import { DataService } from './../../model/implementation';
import { IDocument } from './../../model/contracts';
import { ObjectViewModel } from './../../logofx/view-model';

export class DocumentViewModel extends ObjectViewModel<IDocument> {

    constructor(model: IDocument){
        super(model);
    }
}