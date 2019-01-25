import { DefaultModel } from './default-model';

export class AlbumSummaryLigth extends DefaultModel {

    constructor(public id?: number,public title?: string, public cover?: string) {
        super(id);
    }
}
