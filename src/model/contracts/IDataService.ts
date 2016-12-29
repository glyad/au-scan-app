import { IDocument } from './IDocument';

export interface IDataService {

    documents: Array<IDocument>;

    scanDocument(): Promise<any>;
    // getDocument(id: number);
    // getDocuments(): void;
    // createDocument(): void;
    // deleteDocument(id: number): void;
    // updateDocument(id: number): void;
}
