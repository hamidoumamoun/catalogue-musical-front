import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from './services/album.service';
import { ArtistService } from './services/artist.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [AlbumService, ArtistService]
})
export class CoreModule { }
