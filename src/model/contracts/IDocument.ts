import { IModel } from './../../logofx/model/model';

export interface IDocument extends IModel<number> {

    name: string;
    description: string;
    caseId: string;

}
