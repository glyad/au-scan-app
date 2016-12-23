import { DocumentsList } from './documentslist';
import { DataService } from './../../model/implementation';
import { autoinject } from 'aurelia-framework';

@autoinject
export class DocumentsApprovalScreen {

     constructor(private list: DocumentsList ) {}   
}