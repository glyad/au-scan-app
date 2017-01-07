import { IDocument } from './IDocument';

export interface IDataService {

    documents: Array<IDocument>;

    scanDocument(): Promise<any>;
    // getDocument(id: number);
    // getDocuments(): void;
    createRangeOfDocuments(count: number): Promise<any>;
    createDocument(): Promise<any>;
    deleteDocument(id: number): Promise<any>;
    deleteLastOfDocuments(count:number): Promise<any>;
    // updateDocument(id: number): void;
}
