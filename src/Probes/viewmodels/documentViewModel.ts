import { IDocument } from './../../model/contracts/IDocument';
import { ObjectViewModel } from './../../logofx/view-model/objectViewModel';


export class DocumentViewModel extends ObjectViewModel<IDocument> {

    constructor(model: IDocument){
        super(model);
    }
}