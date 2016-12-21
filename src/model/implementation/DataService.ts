import { Document } from './Document';
import { IDocument } from './../contracts/IDocument';
import { singleton } from 'aurelia-framework';
import { IDataService } from './../contracts/IDataService';

@singleton()
export class DataService implements IDataService {
    
    private _documents: Array<IDocument> = [];

    imagePath : string = '';

    document: Document = new Document();

    constructor () {

		for (let i = 0; i < 100; i++) {
			this._documents
            	.push (	{ name: 'Document ${i}'
                		, id: i
                        , description: 'This is description of the Document #${i}'
                        , caseId: 'Case #${i}' } );
        }

    }

    get documents() {
        return this._documents;
    }

    UpdateDocumentData( name: string, 
                        id: number,
                        description: string,
                        caseId: string): Promise<any> {

        
        return new Promise(resolve => setTimeout(() => {
            this.document = { name: name, id: id, description: description, caseId: caseId};
            resolve();
        }, 1000));
    }

    UpdateImage(id: number): Promise<any> {
        return new Promise(resolve => setTimeout(() => {
            this.imagePath = "../../assets/" + id.toString() + ".png";
            resolve();
        }, 1000));
    }

    scanDocument(): Promise<any> {
        return new Promise (async resolve => {
            console.log('scanDocument is called: ');
            await this.UpdateDocumentData("Petya", 2, "Alkash", "12-3-45");
            await this.UpdateImage(1);
            await this.UpdateImage(2);
            await this.UpdateImage(3);          

            resolve();
        })
    }
}
