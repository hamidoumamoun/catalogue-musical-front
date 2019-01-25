import { DefaultModel } from './default-model';

export class ArtistSummary extends DefaultModel {

    constructor(public id?: number,public name?: string, public picture?: string) {
        super(id);
    }
}
