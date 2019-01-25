import { ArtistSummary } from './artist-summary';
import { AlbumSummary } from './album-summary';
import { Track } from './track';

export class AlbumDetails extends AlbumSummary {

    constructor(public id?: number,
        public title?: string,
         public cover?: string, 
         public artist?: ArtistSummary,
         public tracks?: Track[]) {
        super(id, title, cover, artist);
    }
}
