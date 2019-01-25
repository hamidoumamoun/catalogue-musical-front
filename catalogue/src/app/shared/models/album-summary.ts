import { ArtistSummary } from './artist-summary';
import { AlbumSummaryLigth } from './album-summary-light';

export class AlbumSummary extends AlbumSummaryLigth {

    constructor(public id?: number,public title?: string, public cover?: string, public artist?: ArtistSummary) {
        super(id, title, cover);
    }
}
