import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routes: Routes = [
  { path: '', component: AlbumListComponent },
  { path: ':id', component: AlbumDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
