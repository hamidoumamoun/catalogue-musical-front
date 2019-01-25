
import { AlbumSummaryLigth } from './album-summary-light';
import { ArtistSummary } from './artist-summary';

export class ArtistDetails extends ArtistSummary {

    constructor(public id?: number,
        public name?: string,  
        public picture?: string,
        public actualName?: string, 
        public birthday?: string, 
        public albums?: AlbumSummaryLigth[]
        ) {
        super(id, name, picture);
    }
}
