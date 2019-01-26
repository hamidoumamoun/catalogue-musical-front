import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumService } from './services/album.service';
import { ArtistService } from './services/artist.service';
import { AlbumModule } from '../album/album.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AlbumModule
  ],
  providers: [AlbumService, ArtistService]
})
export class CoreModule { }
