import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistListComponent } from './album/artist-list/artist-list.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumDetailsComponent } from './album/album-details/album-details.component';

const routes: Routes = [
  {
    path: 'albums',
    component:AlbumListComponent
  },

  {
    path: 'artists',
    component:ArtistListComponent
   
  },

  {
    path: 'albums/:id',
    component:AlbumDetailsComponent
   
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
